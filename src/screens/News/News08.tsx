import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  FocusAwareStatusBar,
  NavigationAction,
  Text,
} from 'components';
import {Images} from 'assets/images';
import NewsCarousel from './elements/NewsCarousel';
import _ from 'lodash';

const News08 = React.memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const layoutSize = sizeStyle({width: width, height: height});
  return (
    <Container style={styles.container} level="6">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <TopNavigation
        appearance="control"
        accessoryLeft={
          <NavigationAction icon="arrow-back" status="white" size="large" />
        }
        accessoryRight={
          <NavigationAction icon="ladder" status="white" size="large" />
        }
      />
      <Content level="6">
        <Text category="t3-sb" status="white" marginBottom={20} marginLeft={24}>
          Saved articles
        </Text>
        <NewsCarousel data={DATA_CONTENT} />
        <View style={styles.content}>
          {DATA.map((item, i) => {
            const isWrap = i / 2 >= 1.1 || i / 2 == 0;
            return (
              <View
                key={i}
                style={[
                  isWrap ? layoutSize.isWrap : layoutSize.notWrap,
                  styles.item,
                  {backgroundColor: colors_data.pop()},
                ]}>
                <Image source={item.image} />
                <View
                  style={[
                    {backgroundColor: item.image ? '#00000090' : 'transparent'},
                    styles.backdrop,
                  ]}>
                  <Text
                    category="t5-b"
                    status="white"
                    center
                    marginHorizontal={20}>
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </Content>
    </Container>
  );
});

export default News08;
const sizeStyle = ({width, height}: {width: number; height: number}) => {
  return StyleSheet.create({
    isWrap: {
      width: 213 * (width / 375),
      height: 193 * (height / 812),
    },
    notWrap: {
      width: 120 * (width / 375),
      height: 193 * (height / 812),
    },
  });
};
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  item: {
    borderRadius: 8,
    marginBottom: 10,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const DATA_CONTENT = [
  {
    image: Images.news['post-01'],
    title: 'Tips For Designing An Effective Business Card',
  },
  {
    image: Images.news['post-02'],
    title: 'Cdc Issues Health Alert Notice For Travelers To Usa From Hon',
  },
  {
    image: Images.news['post-03'],
    title: 'Business Cards Does Your Business Informat',
  },
  {
    image: Images.news['post-04'],
    title: 'Hypnosis Money And 3 Major Motives Of Our Lives',
  },
];
const DATA = [
  {title: 'Cdc Issues Health Alert Notice For Travelers To Usa From Hon'},
  {
    image: Images.news['post-02'],
    title: 'Business Cards Does Your Business Informat',
  },
  {image: Images.news['post-03'], title: 'Eye Makeup After Lasik'},
  {
    image: Images.news['post-04'],
    title: 'Hypnosis Money And 3 Major Motives Of Our Lives',
  },
];
const colors = ['#00C48C', '#FFCF5C', '#FFA26B', '#FF647C', '#0084F4'];
const colors_data = _.shuffle(colors);
