import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import {Container, Content, Text} from 'components';
import Carousel from 'react-native-reanimated-carousel';
import {Images} from 'assets/images';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from 'screens/Walkthroughs/elements/Pagination';

const News01 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const progress = useSharedValue(0);
  const data = [
    Images.news['news-01'],
    Images.news['news-02'],
    Images.news['news-01'],
    Images.news['news-02'],
  ];

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Content
        level="7"
        contentContainerStyle={[styles.content, {paddingTop: top + 24}]}>
        <Carousel
          data={data}
          width={width}
          height={290 * (height / 812)}
          windowSize={width - 32}
          onProgressChange={(_, absoluteProgress) =>
            (progress.value = absoluteProgress)
          }
          renderItem={({item}) => {
            return (
              <Image
                source={item}
                style={{
                  width: 343 * (width / 375),
                  height: 290 * (height / 812),
                  alignSelf: 'center',
                }}
              />
            );
          }}
        />
        <View style={styles.pagination}>
          {data.map((item, i) => {
            return (
              <Pagination
                backgroundColor={theme['text-white-color']}
                index={i}
                key={i}
                animValue={progress}
                length={data.length}
              />
            );
          })}
        </View>
        <Layout
          level="6"
          style={[styles.layoutContent, {height: height / 1.5}]}>
          <Layout style={styles.tag} level="10">
            <Text category="s2-b" status="white" center onPress={goBack}>
              Beauty
            </Text>
          </Layout>
          <Text category="s2-b" status="white" opacity={0.5} marginBottom={20}>
            23 Apr 2017
          </Text>
          <Text category="t3-sb" status="white" center marginBottom={20}>
            To Keep Makeup Looking Fresh Take A Powder
          </Text>
          <Text
            marginHorizontal={20}
            marginBottom={20}
            category="t7"
            status="white"
            opacity={0.5}>
            Laser hair removal is getting more popular everyday. Most of us have
            our own conceptions about this treatment. it is important to know
            the science and the art of laser hair removal
          </Text>
        </Layout>
      </Content>
    </Container>
  );
});

export default News01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 40,
    flexGrow: 1,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 24,
  },
  layoutContent: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
    flex: 1,
  },
  tag: {
    borderRadius: 99,
    paddingHorizontal: 14,
    paddingVertical: 2,
    marginBottom: 12,
  },
});
