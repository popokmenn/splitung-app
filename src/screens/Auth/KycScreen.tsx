import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  ViewPager,
  CheckBox,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Header, HStack, Text, VStack} from 'components';
import {Images} from 'assets/images';

interface ISelectItemProps {
  icon: string;
  title: string;
  describe: string;
  level: string;
  select: boolean;
  onSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

const KycScreen = React.memo(() => {
  const {goBack} = useNavigation();
  const {width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState<number>(1);
  const [activeScanId, setActiveScanId] = React.useState<boolean>(true);
  const [scanCard, setScanCard] = React.useState<boolean>(true);
  const [takeVideo, setTakeVideo] = React.useState<boolean>(false);

  const SelectItem = React.useCallback((item: ISelectItemProps) => {
    const {title, select, onSelect, describe, icon, level} = item;
    return (
      <HStack mb={32} ml={40} mr={32} onPress={() => onSelect(!select)}>
        <Layout level={level} style={styles.icLayout}>
          <Icon pack="assets" name={icon} />
        </Layout>
        <VStack maxWidth={188 * (width / 375)} mr={8}>
          <Text category="label">{title}</Text>
          <Text category="s1" status="placeholder">
            {describe}
          </Text>
        </VStack>
        <CheckBox
          status="secondary"
          onChange={onSelect}
          checked={select}
          style={styles.checkbox}
        />
      </HStack>
    );
  }, []);
  return (
    <Container style={styles.container}>
      <Header
        accessoryLeft={
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Icon pack="assets" name="arrow-left" />
          </TouchableOpacity>
        }
        accessoryCenter={<Icon name="logo" pack="assets" />}
      />
      <Content>
        <Image
          source={Images.auth.kyc}
          // @ts-ignore
          style={styles.img}
        />
        <Text category="t3" center marginBottom={40}>
          <Text category="t3-sb" status="info" center>
            0{activeIndex + 1}
          </Text>
          /03 Complete ✅
        </Text>
        <ViewPager selectedIndex={activeIndex} onSelect={setActiveIndex}>
          <View>
            <Text>Step 1</Text>
          </View>
          <View>
            <SelectItem
              level="7"
              icon="passport"
              select={activeScanId}
              onSelect={setActiveScanId}
              title="Scan Your ID/Passport"
              describe="Take a picture both side of your ID/Passport"
            />
            <SelectItem
              level="9"
              icon="cc"
              select={scanCard}
              onSelect={setScanCard}
              title="Scan Your ID/Passport"
              describe="Take a picture both side of your ID/Passport"
            />
            <SelectItem
              level="6"
              icon="face-detection"
              select={takeVideo}
              onSelect={setTakeVideo}
              title="Scan Your ID/Passport"
              describe="Take a picture both side of your ID/Passport"
            />
            <Button
              onPress={goBack}
              status="primary"
              children={'Confirm'}
              style={styles.button}
            />
          </View>
          <View>
            <Text>Step 3</Text>
          </View>
        </ViewPager>
      </Content>
    </Container>
  );
});

export default KycScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  img: {
    alignSelf: 'center',
    marginVertical: 32,
  },
  icLayout: {
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
  },
  checkbox: {
    width: 32,
    height: 32,
  },
  button: {
    marginHorizontal: 40,
    marginTop: 32,
  },
});
