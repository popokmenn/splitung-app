import * as React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
} from '@ui-kitten/components';

import {
  Container,
  FocusAwareStatusBar,
  NavigationAction,
  Text,
} from 'components';
import {Images} from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import _ from 'lodash';

const News12 = React.memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const stylesSize = sizeStyles({width: width, height: height});
  return (
    <Container style={styles.container} level="7">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryLeft={
          <NavigationAction icon="arrow-left" status="white" size="large" />
        }
        accessoryRight={
          <Avatar source={Images.avatar['avatar-04']} size="tiny" />
        }
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={styles.title}
          status="white"
          marginBottom={12}
          marginHorizontal={16}>
          How To Boost Your Traffic Of Your Blog And Destroy The Competition
        </Text>
        <Text
          category="s2-b"
          status="white"
          opacity={0.5}
          marginBottom={16}
          marginHorizontal={16}>
          12 Jan 2020
        </Text>
        <Carousel
          data={DATA}
          style={styles.carousel}
          renderItem={({item, index}) => {
            const colors_data = _.shuffle(colors);
            return (
              <View
                key={index}
                style={{
                  backgroundColor: colors_data.pop(),
                  borderRadius: 8,
                  ...stylesSize.layout,
                  marginLeft: 16,
                }}>
                <Image source={item.image} style={stylesSize.image} />
              </View>
            );
          }}
          mode="vertical-stack"
          modeConfig={{
            snapDirection: 'left',
            stackInterval: 15,
          }}
          customConfig={() => ({type: 'positive', viewCount: DATA.length})}
          width={width}
          height={332 * (height / 812)}
        />
        <Text status="white" category="t7" marginHorizontal={16}>
          {TEXT}
        </Text>
      </ScrollView>
    </Container>
  );
});

export default News12;

const sizeStyles = ({width, height}: {width: number; height: number}) =>
  StyleSheet.create({
    layout: {
      width: 343 * (width / 375),
      height: 313 * (height / 812),
    },
    image: {
      width: 295 * (width / 375),
      height: 232 * (height / 812),
    },
  });
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    marginRight: 16,
  },
  content: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    lineHeight: 36,
  },
  carousel: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
const DATA = [
  {
    image: Images.news['news-02'],
  },
  {
    image: Images.news['news-03'],
  },
  {
    image: Images.news['news-04'],
  },
  {
    image: Images.news['news-05'],
  },
  {
    image: Images.news['news-06'],
  },
];
const colors = ['#00C48C', '#FFCF5C', '#FFA26B', '#FF647C'];
const TEXT =
  'So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don’t want to work towards any goal. Nothing motivates them to work. Why is it so? Why many of us are not motivated? What is wrong? We think in different ways and our thinking is decided by many factors. Some are known and some are unknown. The known factors are – thinking, circumstances, early upbringing, living style, culture, family support, friends, own intelligence etc. Our thoughts and our mental makeup is also decided by many factors that are yet not known. Two persons of similar upbringing may be facing similar situation, but react in opposite ways? there are so many whys about the human mind that it is very difficult to determine about what may happen. Coming back to the central question – why are some of us totally demotivated? There is no easy answer. Can anything be done to propel such people towards work? Can one do anything to make them enthusiastitic about anything, so that they begin working towards it?  Take your own example. You are motivated to do one thing, but totally demotivated by something else. A mathematician may get very excited looking at a Math problem, but remain unaffected by the greatest pieces of music? Why? The musician acts exactly opposite, or may get equally excited by maths problem and music. Why? Our mind is a complex structure, about which we ourselves don’t know much. How many of us can claim to know about their own mind? They may know about thier abilities and disabilities, their likes and dislikes, etc. but can they predict about their own reaction in a situation? very difficult. One has to find one’s own answers in such situations. One has to reflect himself/herself and decide about the action that can be taken to break the unmotivated state. Friends, family and even medical science can help one to a certain extent, but the final destination has to be reached by the person on his/her own. If at anytime, you notice that a friend of yours is getting demotivated about life, try to inspire him/her as much as you can. Even if you are physically away from your friend you can send him inspirational ecards and tell him to download motivational screensavers and wallpapers. So motivate everyone who needs the boost.';
