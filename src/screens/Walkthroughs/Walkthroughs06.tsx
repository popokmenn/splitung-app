import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import Carousel from 'react-native-reanimated-carousel';
import {DATA_WALKTHROUGHS_06} from 'constants/data';
import {Images} from 'assets/images';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from './elements/Pagination';

const Walkthroughs06 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const progress = useSharedValue(0);
  const heightItem = 570 * (height / 812);
  const data = DATA_WALKTHROUGHS_06;
  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return theme['color-green-500'];
      case 1:
        return theme['color-button-secondary'];
      case 2:
        return theme['text-danger-color'];
      case 3:
        return theme['color-button-brown'];
      case 4:
        return theme['color-button-primary'];
      default:
        return theme['color-button-secondary'];
    }
  };
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <HStack mh={32} itemsCenter mb={40}>
          <Image
            source={Images.lightLogo}
            //@ts-ignore
            style={styles.logo}
          />
          <View style={styles.pagination}>
            {data.map((item, i) => {
              return (
                <Pagination
                  backgroundColor={theme['text-info-color']}
                  index={i}
                  key={i}
                  animValue={progress}
                  length={data.length}
                />
              );
            })}
          </View>
        </HStack>
        <Carousel
          data={data}
          width={width}
          windowSize={width}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          loop={false}
          style={{width: '100%'}}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.99,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  ...styles.item,
                  height: heightItem,
                  backgroundColor: getColor(index),
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: width - 96,
                    aspectRatio: 1 / 1,
                    marginLeft: -24,
                  }}
                />
                <Text
                  category="t5-sb"
                  status="primary"
                  marginLeft={20}
                  marginRight={12}
                  marginTop={24}>
                  {item.title}
                </Text>
                <Text
                  category="t7"
                  status="primary"
                  marginLeft={20}
                  marginRight={12}
                  marginTop={16}>
                  {item.describe}
                </Text>
              </View>
            );
          }}
        />
      </Content>
      <Button
        style={styles.button}
        accessoryLeft={<Icon pack="assets" name="apple" />}
        children="Login with Apple ID"
        onPress={goBack}
      />
    </Container>
  );
});

export default Walkthroughs06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  item: {
    marginHorizontal: 24,
    borderRadius: 16,
    marginLeft: 32,
  },
  logo: {
    height: 32,
    width: 128,
    marginTop: 12,
  },
  button: {
    marginBottom: 8,
    marginHorizontal: 48,
  },
  pagination: {
    flexDirection: 'row',
  },
});
