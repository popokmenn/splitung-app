import * as React from 'react';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Input,
  Icon,
  Avatar,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import Color from 'utils/color';
import {
  FlatList,
  Platform,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import ProgressBar from 'components/ProgressBar';
import {navigate} from 'navigation/RootNavigation';
import {
  launchCamera,
  CameraOptions,
  Asset,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Images} from 'assets/images';
import axios from 'axios';

const Cost = React.memo(() => {
  const BASE_URL = '192.168.1.5';
  const {top} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [step, setStep] = React.useState(0);
  const [isOpenModalCamera, setIsOpenModalCamera] = React.useState(false);
  const [isloading, setIsLoading] = React.useState(false);
  const [scannedText, setScannedText] = React.useState('');
  const [scannedAmount, setScannedAmount] = React.useState(['']);
  const [scannedTextSorted, setScannedTextSorted] = React.useState([
    {name: '', amount: 0, price: 0},
  ]);
  const [dataSplit, setDataSplit] = React.useState([
    {
      id: 1,
      avatar: Images.avatar['avatar-03'],
      isExpand: false,
    },
    {
      id: 2,
      avatar: Images.avatar['avatar-04'],
      isExpand: false,
    },
  ]);

  const _takePict = async () => {
    setIsLoading(true);

    const options: CameraOptions = {
      mediaType: 'photo',
      // maxWidth: 600,
      // maxHeight: 600,
      quality: 0.8,
      includeBase64: true,
      saveToPhotos: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        const imageData = response.assets && response.assets[0];
        sendImage(imageData);
        setIsOpenModalCamera(false);
      }
    });
  };
  const _openGallery = async () => {
    setIsLoading(true);

    const options: CameraOptions = {
      mediaType: 'photo',
      // maxWidth: 600,
      // maxHeight: 600,
      quality: 0.8,
      includeBase64: true,
      saveToPhotos: false,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        const imageData = response.assets && response.assets[0];
        sendImage(imageData);
        setIsOpenModalCamera(false);
      }
    });
  };

  const sendImage = async (imageData: Asset | undefined) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', {
      name: imageData?.fileName,
      type: imageData?.type,
      uri:
        Platform.OS === 'android'
          ? imageData?.uri
          : imageData?.uri?.replace('file://', ''),
    });

    const file = {
      ...imageData,
      uri:
        Platform.OS === 'ios'
          ? imageData?.uri?.replace('file://', '')
          : imageData?.uri,
    };
    formData.append('image', file);
    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    axios
      .all([
        axios.post(`http://${BASE_URL}:8000/upload-image`, formData, {
          headers,
        }),
        axios.post(`http://${BASE_URL}:8000/detect-handwrite`, formData, {
          headers,
        }),
      ])
      .then(
        axios.spread((data1, data2) => {
          const textLine = data2.data.text.split('\n');
          setScannedText(data2.data.text);
          const amountSort = textLine.map((i: string) => {
            return i.replace(/^\D+/g, '');
          });
          setScannedAmount(amountSort);
          console.log('amount', amountSort);
          const textSort = textLine.map((i: string) => {
            const itemName = i.replace(/[^a-zA-Z ]/g, '');
            // const itemName = i.replace(/[0-9]/g, '').replace(/[^a-zA-Z ]/g, '');
            if (itemName !== '') {
              return {
                name: itemName,
              };
            }
          });
          setScannedTextSorted(
            textSort.filter(
              (item: {name: string} | undefined) =>
                item !== undefined && item?.name !== '.',
            ),
          );
          setIsLoading(false);
        }),
      );
  };

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="9" />
      {isloading && (
        <View
          style={[
            styles.centeredView,
            {
              zIndex: 10,
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            },
          ]}>
          <View
            style={[
              styles.modalView,
              {height: 100, width: 100, justifyContent: 'center'},
            ]}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      )}
      <Modal
        key={'modal-camera'}
        animationType="slide"
        transparent={true}
        visible={isOpenModalCamera}
        onRequestClose={() => {
          setIsOpenModalCamera(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setIsOpenModalCamera(false)}>
              <Icon
                pack="assets"
                name="close"
                style={[styles.icon, {tintColor: Color.black}]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _takePict()}>
              <View
                style={[
                  // styles.buttonSubmit,
                  {
                    marginTop: 30,
                    height: 50,
                    width: '100%',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Color.lightGrey,
                  },
                ]}>
                <HStack>
                  <Icon pack="assets" name="scan" style={styles.icon} />
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 10,
                      fontWeight: '500',
                      color: Color.black,
                    }}>
                    Take Photo
                  </Text>
                </HStack>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _openGallery()}>
              <View
                style={[
                  // styles.buttonSubmit,
                  {
                    marginTop: 30,
                    height: 50,
                    width: '100%',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Color.lightGrey,
                  },
                ]}>
                <HStack>
                  <Icon pack="assets" name="scan" style={styles.icon} />
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 10,
                      fontWeight: '500',
                      color: Color.black,
                    }}>
                    Open Gallery
                  </Text>
                </HStack>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <Modal
        style={{
          backgroundColor: Color.grey,
          height: 250,
          width: 200,
          padding: 20,
          borderRadius: 20,
        }}
        key={'x'}
        visible={isOpenModalCamera}>
        <TouchableOpacity onPress={() => setIsOpenModalCamera(false)}>
          <Icon pack="assets" name="close" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _takePict()}>
          <View
            style={[
              // styles.buttonSubmit,
              {
                marginTop: 30,
                height: 50,
                width: '100%',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Color.lightGrey,
              },
            ]}>
            <HStack>
              <Icon pack="assets" name="scan" style={styles.icon} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  fontWeight: '500',
                  color: Color.black,
                }}>
                Take Photo
              </Text>
            </HStack>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _openGallery()}>
          <View
            style={[
              // styles.buttonSubmit,
              {
                marginTop: 30,
                height: 50,
                width: '100%',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Color.lightGrey,
              },
            ]}>
            <HStack>
              <Icon pack="assets" name="scan" style={styles.icon} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  fontWeight: '500',
                  color: Color.black,
                }}>
                Open Gallery
              </Text>
            </HStack>
          </View>
        </TouchableOpacity>
      </Modal> */}
      <View>
        <TopNavigation
          accessoryLeft={
            <NavigationAction
              onPress={() => {
                step > 0 ? setStep(step - 1) : navigate('Dashboard');
              }}
              icon="arrow-left"
            />
          }
          accessoryRight={
            <NavigationAction
              onPress={() => navigate('Dashboard')}
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
          {step > 1 ? 'Split' : 'Add Cost'}
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
        {step === 0 && (
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
            <View
              style={{
                margin: 40,
                padding: 10,
                backgroundColor: Color.lightGrey,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 10}}>{scannedText}</Text>
            </View>
          </>
        )}

        {step === 1 && (
          <>
            <Input
              placeholder="Transaction Name"
              status="primary"
              style={[styles.input]}
              textStyle={styles.inputText}
              accessoryLeft={() => (
                <Icon pack="assets" name="cart" style={styles.icon} />
              )}
            />
            <HStack style={{alignItems: 'flex-end', marginTop: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 40,
                  textAlign: 'left',
                  fontWeight: '600',
                }}
                category="h2"
                marginLeft={30}
                marginBottom={-10}>
                Item List
              </Text>
              <TouchableOpacity onPress={() => _takePict()}>
                <View
                  style={[
                    styles.buttonSubmit,
                    {
                      height: 30,
                      width: 80,
                      marginRight: 40,
                      color: Color.black,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: Color.primary,
                    },
                  ]}>
                  <HStack>
                    <Text
                      style={{
                        fontSize: 10,
                        marginLeft: 10,
                        fontWeight: '500',
                        color: Color.black,
                      }}>
                      + Add Item
                    </Text>
                  </HStack>
                </View>
              </TouchableOpacity>
            </HStack>
            <View
              style={{
                padding: 20,
                borderRadius: 10,
                marginHorizontal: 40,
                backgroundColor: Color.lightGrey,
              }}>
              <FlatList
                data={scannedTextSorted}
                renderItem={({item, index}) => (
                  <HStack key={index}>
                    <Text style={{fontSize: 10, width: 130}}>
                      {item?.name || ''}
                    </Text>
                    <Text style={{fontSize: 10}}>{scannedAmount[index]}</Text>
                    <Text style={{fontSize: 10}}>{'Rp. 100.000,00'}</Text>
                  </HStack>

                  // <HStack
                  //   key={index}
                  //   style={{
                  //     padding: 20,
                  //     paddingTop: 0,
                  //     marginBottom: 10,
                  //     justifyContent: 'center',
                  //   }}>
                  //   <Input
                  //     value={item?.name || ''}
                  //     label="Name"
                  //     placeholder="Item name"
                  //     style={[
                  //       styles.inputDetail,
                  //       {width: 150, maxWidth: undefined},
                  //     ]}
                  //     textStyle={styles.inputTextDetail}
                  //     size="small"
                  //   />
                  //   <Input
                  //     label="Amount"
                  //     placeholder="x"
                  //     keyboardType="number-pad"
                  //     style={[styles.inputDetail]}
                  //     textStyle={styles.inputTextDetail}
                  //     size="small"
                  //   />
                  //   <Input
                  //     // value={item.replace(/[^0-9.]/g, '')}
                  //     label="Price"
                  //     placeholder="Rp."
                  //     keyboardType="number-pad"
                  //     style={[styles.inputDetail]}
                  //     textStyle={styles.inputTextDetail}
                  //     size="small"
                  //   />
                  //   <TouchableOpacity
                  //     style={{justifyContent: 'flex-end'}}
                  //     onPress={() => {
                  //       const newData = scannedTextSorted.filter(
                  //         i => i.name !== item.name,
                  //       );
                  //       setScannedTextSorted(newData);
                  //     }}>
                  //     <View
                  //       style={[
                  //         {
                  //           width: 30,
                  //           margin: 0,
                  //           height: 35,
                  //           borderRadius: 10,
                  //           alignItems: 'center',
                  //           justifyContent: 'center',
                  //           backgroundColor: Color.danger,
                  //         },
                  //       ]}>
                  //       <Icon name="close" />
                  //     </View>
                  //   </TouchableOpacity>
                  // </HStack>
                )}
              />
              <View
                style={{
                  height: 1,
                  width: '100%',
                  marginBottom: 10,
                  backgroundColor: Color.grey,
                }}
              />
              <HStack>
                <Text style={{fontSize: 12}} category="t7">
                  Tax
                </Text>
                <Text style={{fontSize: 12}} category="t7">
                  Rp. 10.000,00
                </Text>
              </HStack>
              <HStack>
                <Text style={{fontWeight: 'bold'}} category="t5">
                  Total
                </Text>
                <Text style={{fontWeight: 'bold'}} category="t5">
                  Rp. 10.000,00
                </Text>
              </HStack>
            </View>
          </>
        )}

        {step === 2 && (
          <>
            <TouchableOpacity
              style={{alignItems: 'flex-end', width: '100%'}}
              onPress={() => navigate('AddPerson')}>
              <View
                style={[
                  styles.buttonSubmit,
                  {
                    height: 30,
                    width: 100,
                    marginTop: 10,
                    marginRight: 40,
                    marginVertical: 5,
                    color: Color.black,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Color.primary,
                  },
                ]}>
                <HStack>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 10,
                      fontWeight: '500',
                      color: Color.black,
                    }}>
                    + Add Person
                  </Text>
                </HStack>
              </View>
            </TouchableOpacity>
            {dataSplit.map((item, i) => {
              return (
                <View
                  key={i}
                  style={{
                    borderRadius: 10,
                    marginVertical: 5,
                    marginHorizontal: 40,
                    backgroundColor: Color.lightGrey,
                  }}>
                  <HStack itemsCenter style={{padding: 10}}>
                    <Avatar source={item?.avatar} key={i} size="small" />
                    <Text
                      style={{fontSize: 12, textAlign: 'left', width: '50%'}}>
                      John Doe
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        const newDataSplit = dataSplit.map(x => {
                          if (x.id === item?.id) {
                            return {
                              ...x,
                              isExpand: !x.isExpand,
                            };
                          } else {
                            return x;
                          }
                        });
                        setDataSplit(newDataSplit);
                      }}>
                      <View
                        style={
                          item?.isExpand
                            ? {transform: [{rotate: '-90deg'}]}
                            : {transform: [{rotate: '90deg'}]}
                        }>
                        <Icon name="arrow-left" />
                      </View>
                    </TouchableOpacity>
                  </HStack>
                  {item?.isExpand && (
                    <>
                      <HStack
                        style={{
                          marginBottom: 10,
                          paddingHorizontal: 10,
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                        }}>
                        <Input
                          label="Name"
                          placeholder="Item name"
                          style={[styles.inputDetail]}
                          textStyle={styles.inputTextDetail}
                          size="small"
                        />
                        <Input
                          label="Amount"
                          placeholder="x"
                          keyboardType="number-pad"
                          style={[styles.inputDetail]}
                          textStyle={styles.inputTextDetail}
                          size="small"
                        />
                        <Input
                          label="Price"
                          placeholder="Rp."
                          keyboardType="number-pad"
                          style={[styles.inputDetail]}
                          textStyle={styles.inputTextDetail}
                          size="small"
                        />
                        <TouchableOpacity
                          style={{justifyContent: 'flex-end'}}
                          onPress={() => _takePict()}>
                          <View
                            style={[
                              {
                                margin: 0,
                                width: 30,
                                height: 35,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: Color.danger,
                              },
                            ]}>
                            <Icon name="close" />
                          </View>
                        </TouchableOpacity>
                      </HStack>
                      <View
                        style={{
                          height: 1,
                          width: '80%',
                          marginBottom: 10,
                          alignSelf: 'center',
                          backgroundColor: Color.grey,
                        }}
                      />
                      <HStack style={{padding: 10}}>
                        <Text style={{fontWeight: 'bold'}} category="t5">
                          Total
                        </Text>
                        <Text style={{fontWeight: 'bold'}} category="t5">
                          Rp. 10.000,00
                        </Text>
                      </HStack>
                    </>
                  )}
                </View>
              );
            })}
          </>
        )}
      </Content>

      <VStack level="1">
        <TouchableOpacity onPress={() => setIsOpenModalCamera(true)}>
          <View
            style={[
              styles.buttonSubmit,
              {
                height: 50,
                color: Color.black,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Color.lightGrey,
              },
            ]}>
            <HStack>
              <Icon pack="assets" name="scan" style={styles.icon} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  fontWeight: '500',
                  color: Color.black,
                }}>
                Scan the bill
              </Text>
            </HStack>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStep(step + 1)}>
          <View
            style={[
              styles.buttonSubmit,
              {
                height: 50,
                marginBottom: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Color.secondary,
              },
            ]}>
            <HStack>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  fontWeight: '500',
                  color: Color.white,
                }}>
                Add Cost
              </Text>
            </HStack>
          </View>
        </TouchableOpacity>
      </VStack>
    </Container>
  );
});

export default Cost;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  input: {
    marginTop: 10,
    marginHorizontal: 40,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: Color.lightGrey,
  },
  inputDetail: {
    maxWidth: '35%',
    borderRadius: 10,
    borderWidth: 0,
    padding: 0,
    margin: 0,
    marginRight: 5,
    backgroundColor: Color.white,
  },
  inputText: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  inputTextDetail: {
    fontSize: 8,
  },
  buttonSubmit: {
    marginHorizontal: 24,
    marginVertical: 5,
    width: 350,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: Color.secondary,
  },
  header: {
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: Color.white,
    color: Color.black,
  },
  progressBar: {
    marginTop: 20,
    height: 5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'color-placeholder-1000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
