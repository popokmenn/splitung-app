import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Avatar,
  Icon,
} from '@ui-kitten/components';

import {
  Container,
  FocusAwareStatusBar,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import _ from 'lodash';

const News07 = React.memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const {goBack} = useNavigation();
  const [data, setData] = React.useState(DATA);

  const imageStyle = sizeStyle({width: width, height: height});
  const colors_data = _.shuffle(colors);

  return (
    <Container style={styles.container} level="7">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <TopNavigation
        appearance="control"
        accessoryRight={
          <Avatar source={Images.avatar['avatar-03']} size="tiny" />
        }
        accessoryLeft={
          <NavigationAction icon="more" status="white" size="large" />
        }
      />
      <ScrollView>
        <Text category="t3-b" status="white" marginLeft={24} marginBottom={24}>
          New Feed
        </Text>
        <Carousel
          width={width - 32}
          data={DATA}
          windowSize={width}
          mode="horizontal-stack"
          height={370 * (height / 812)}
          modeConfig={{
            snapDirection: 'left',
            stackInterval: 16,
          }}
          style={styles.carousel}
          customConfig={() => ({type: 'positive', viewCount: 5})}
          renderItem={({item, index}) => {
            const colors_data = _.shuffle(colors);
            return (
              <Layout
                style={{
                  ...styles.item,
                  ...imageStyle.layoutBigImage,
                  backgroundColor: colors_data.pop(),
                }}>
                <View>
                  <Layout level="6" style={styles.tag}>
                    <Text category="s2-b" status="white">
                      Travel
                    </Text>
                  </Layout>
                  <Image source={item.image} style={imageStyle.bigImage} />
                </View>
                <View>
                  <Text
                    status="white"
                    opacity={0.5}
                    category="s2"
                    marginBottom={8}
                    marginTop={24}>
                    {item.create_at}
                  </Text>
                  <Text category="t7-sb" status="white">
                    {item.title}
                  </Text>
                </View>
              </Layout>
            );
          }}
        />
        <VStack mh={24}>
          {data.reverse().map((item, i) => {
            return (
              <HStack onPress={goBack} key={i} mb={24}>
                <Layout
                  style={[
                    imageStyle.smallImage,
                    styles.layoutImage,
                    {backgroundColor: colors_data.pop()},
                  ]}>
                  <Image source={item.image} style={imageStyle.smallImage} />
                </Layout>
                <VStack justify="space-between">
                  <Text
                    category="t7-sb"
                    status="white"
                    maxWidth={220 * (width / 375)}>
                    {item.title}
                  </Text>
                  <HStack>
                    <Text category="s2-sb" status="white" opacity={0.5}>
                      {item.create_at}
                    </Text>
                    <Icon pack="assets" name="bookmark" style={styles.icon} />
                  </HStack>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
      </ScrollView>
    </Container>
  );
});

export default News07;

const sizeStyle = ({width, height}: {width: number; height: number}) => {
  return StyleSheet.create({
    bigImage: {
      width: 232 * (width / 375),
      height: 182 * (height / 812),
    },
    smallImage: {
      width: 86 * (width / 375),
      height: 86 * (height / 812),
    },
    layoutBigImage: {
      width: 280 * (width / 375),
      height: 370 * (height / 812),
    },
  });
};
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  item: {
    marginRight: 32,
    borderRadius: 8,
    marginLeft: 24,
    padding: 16,
    marginBottom: 32,
    justifyContent: 'space-between',
  },
  layoutImage: {
    borderRadius: 5,
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 99,
    alignSelf: 'flex-start',
  },
  carousel: {
    marginBottom: 32,
  },
  icon: {
    tintColor: '#FFFFFF50',
    width: 24,
    height: 24,
  },
});

const DATA = [
  {
    title:
      'It S Classified How To Utilize Free Classified Ad Sites To Boost Business',
    create_at: '30 Aug 2021',
    image: Images.news['news-02'],
  },
  {
    title:
      'It S Classified How To Utilize Free Classified Ad Sites To Boost Business',
    create_at: '30 Aug 2021',
    image: Images.news['news-03'],
  },
  {
    title:
      'It S Classified How To Utilize Free Classified Ad Sites To Boost Business',
    create_at: '30 Aug 2021',
    image: Images.news['news-04'],
  },
  {
    title: 'Choosing An Antiaging Eye Cream',
    create_at: '30 Aug 2021',
    image: Images.news['news-05'],
  },
  {
    title: 'Adwords Keyword Research For Beginners',
    create_at: '30 Aug 2021',
    image: Images.news['news-06'],
  },
];
const colors = ['#00C48C', '#FFCF5C', '#FFA26B', '#FF647C', '#0084F4'];
