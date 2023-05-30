import * as React from 'react';
import {useLayout} from 'hooks';
import {Layout, TopNavigation, Input, Icon} from '@ui-kitten/components';

import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import Color from 'utils/color';
import {TouchableOpacity, View, Image} from 'react-native';
import ProgressBar from 'components/ProgressBar';
import {navigate} from 'navigation/RootNavigation';
import {Asset, ImagePickerResponse} from 'react-native-image-picker';
import {openCropper} from 'react-native-image-crop-picker';
import Split from './cost.split.component';
import ModalPhoto from './cost.modal.component';
import Add from './cost.add.component';
import Loading from './cost.loading.component copy';
import {_openGallery, _takePict} from 'utils/media';
import {_sendImage} from '../service/image-to-text';
import {AxiosResponse} from 'axios';
import {useAppDispatch} from 'store/store';
import styles from '../cost.style';
import actions from '../cost.action';

const Cost = React.memo(() => {
  const dispatch = useAppDispatch();
  const {top} = useLayout();
  const [step, setStep] = React.useState(0);
  const [isOpenModalCamera, setIsOpenModalCamera] = React.useState(false);
  const [isloading, setIsLoading] = React.useState(false);
  const [img, setImage] = React.useState<Asset>();
  const [scannedText, setScannedText] = React.useState(['']);

  const imageCropper = (imageData: Asset | undefined) => {
    setImage({...imageData, uri: imageData?.uri});
    setIsOpenModalCamera(false);
    if (imageData?.fileName?.includes('jasdp')) {
      sendImage({...imageData});
    } else {
      setTimeout(() => {
        openCropper({
          mediaType: 'photo',
          path: imageData?.uri || '',
          freeStyleCropEnabled: true,
        })
          .then(image => {
            setIsOpenModalCamera(false);
            sendImage({...imageData, uri: image.path});
          })
          .catch(e => {
            console.log(e);
          });
      }, 1000);
    }
  };

  const takePict = async () => {
    const imageData: ImagePickerResponse = await _takePict();
    if (imageData.assets !== undefined) {
      imageCropper(imageData.assets[0]);
    }
  };
  const openGallery = async () => {
    const imageData = await _openGallery();
    if (imageData.assets !== undefined) {
      imageCropper(imageData.assets[0]);
    }
  };

  const sendImage = async (imageData: Asset | undefined) => {
    setIsLoading(true);
    setImage({...imageData, uri: imageData?.uri});
    dispatch(actions.setImageUri({imageUri: imageData?.uri || ''}))

    const result: AxiosResponse | void = await _sendImage(imageData);
    if (result?.status === 200) {
      setIsLoading(false);
      setScannedText(result?.data.text);

      const textLine = result?.data.text.split('\n');
      let itemSort = textLine.map((i: string) => {
        const itemName = i.replace(/[^a-zA-Z ]/g, '');
        if (itemName.length > 2) {
          return itemName;
        }
      });
      itemSort = itemSort.filter((i: string) => i !== undefined);

      let amountSort: string[] = [];
      textLine.map((i: string) => {
        const splitSpace = i.split(' ');
        return splitSpace
          .map(j => {
            const tmp = j.replace(/\D/g, '');
            if (tmp.length <= 2 && tmp !== '') {
              amountSort.push(tmp);
            }
          })
          .filter(function (e) {
            return e !== undefined;
          });
      });
      
      const priceSort = textLine
        .map((i: string) => {
          if (/^\d+\,|\.\d{3,3}$/.test(i)) {
            return i;
          }
        })
        .filter(function (e: undefined) {
          return e !== undefined;
        });
      const items = itemSort.map((i: string, index: number) => {
        return {
          id: index,
          item_name: i,
          quantity: amountSort[index] ? Number(amountSort[index]) : 1,
          price: priceSort[index] ? Number(priceSort[index].replace(/[^0-9]/g, '')) : 0,
        };
      });
      dispatch(actions.setDataGrid({dataGrid: items}));
    }
  };

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="3" />
      {isloading && <Loading />}
      <ModalPhoto
        isVisible={isOpenModalCamera}
        openCamera={() => takePict()}
        openGallery={() => openGallery()}
        onRequestClose={() => {
          setIsOpenModalCamera(false);
          setIsLoading(false);
        }}
      />
      <View>
        <TopNavigation
          accessoryLeft={
            <NavigationAction
              onPress={() => {
                if (step > 0) {
                  setStep(step - 1);
                } else {
                  dispatch(actions.reset());
                  navigate('Dashboard');
                }
              }}
              icon="arrow-left"
            />
          }
          accessoryRight={
            <NavigationAction
              onPress={() => {
                dispatch(actions.reset());
                navigate('Dashboard');
              }}
              icon="close"
            />
          }
        />
      </View>
      <Content level="1">
        <Text
          style={{textAlign: 'left', fontWeight: 'bold', fontSize: 31}}
          category="h1"
          marginLeft={30}
          marginBottom={-20}>
          {step > 0 ? 'Split' : 'Add Cost'}
        </Text>
        <ProgressBar
          key={step}
          didDone={step}
          total={4}
          style={styles.progressBar}
          progressColor={Color.primary}
          containColor={Color.grey}
          styleBar={{borderRadius: 0}}
        />
        {step === 99 && (
          <>
            <Input
              placeholder="Description"
              status="primary"
              style={[styles.input]}
              textStyle={styles.inputText}
              accessoryLeft={() => (
                <Icon pack="assets" name="cart" style={styles.icon} />
              )}
            />
            <Input
              placeholder="Date"
              status="primary"
              style={styles.input}
              textStyle={styles.inputText}
              accessoryLeft={() => (
                <Icon pack="assets" name="calendar" style={styles.icon} />
              )}
            />

            <View style={styles.canvasContainer}>
              <TouchableOpacity onPress={() => imageCropper(img)}>
                <Image
                  style={{height: 200, flex: 1, resizeMode: 'contain'}}
                  source={{uri: img?.uri}}
                />
              </TouchableOpacity>

              <Text style={{fontSize: 10}}>{scannedText}</Text>
            </View>
          </>
        )}

        {step === 0 && <Add />}
        {step === 1 && <Split />}
      </Content>

      <VStack level="1">
        <TouchableOpacity onPress={() => setIsOpenModalCamera(true)}>
          <View
            style={[
              styles.buttonSubmit,
              {
                backgroundColor: Color.lightGrey,
              },
            ]}>
            <HStack>
              <Icon pack="assets" name="scan" style={styles.icon} />
              <Text style={styles.scanbtntxt}>Scan the bill</Text>
            </HStack>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStep(step + 1);
          }}>
          <View
            style={[
              styles.buttonSubmit,
              {
                backgroundColor: Color.secondary,
                marginBottom: 30,
              },
            ]}>
            <HStack>
              <Text style={styles.addcostbtntxt}>Add Cost</Text>
            </HStack>
          </View>
        </TouchableOpacity>
      </VStack>
    </Container>
  );
});

export default Cost;
