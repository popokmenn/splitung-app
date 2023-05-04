import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Text} from 'components';
import Carousel from 'react-native-reanimated-carousel';
import {Images} from 'assets/images';
import Pagination from 'screens/Walkthroughs/elements/Pagination';
import {useSharedValue} from 'react-native-reanimated';

const SetupInterest = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const DATA = [
    {
      id: '1',
      title: 'Animal & Nature 🐻',
    },
    {
      id: '2',
      title: 'Activity ⚽',
    },
    {
      id: '3',
      title: 'Food & Drink 🍔',
    },
    {
      id: '4',
      title: 'Finance 📈',
    },
    {
      id: '5',
      title: 'Objects 🌇',
    },
    {
      id: '6',
      title: 'Black Friday 🛍',
    },
    {
      id: '7',
      title: 'Easter 🐰',
    },
    {
      id: '8',
      title: 'Healthcare 🏥',
    },
    {
      id: '9',
      title: 'Festivus 💪',
    },
    {
      id: '10',
      title: 'Travel & Place 🌇',
    },
  ];
  const DATA_CAROUSEL = [
    {
      id: '1',
      title: 'Pick Your Interest',
      describe: 'Enhance Your Brand Potential With Giant Advertising Blimps',
      img: Images.auth.interest,
    },
    {
      id: '1',
      title: 'Pick Your Interest',
      describe: 'Enhance Your Brand Potential With Giant Advertising Blimps',
      img: Images.auth.interest,
    },
    {
      id: '1',
      title: 'Pick Your Interest',
      describe: 'Enhance Your Brand Potential With Giant Advertising Blimps',
      img: Images.auth.interest,
    },
    {
      id: '1',
      title: 'Pick Your Interest',
      describe: 'Enhance Your Brand Potential With Giant Advertising Blimps',
      img: Images.auth.interest,
    },
  ];
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
        style={[styles.arrowLeft, {top: top + 8}]}>
        <Icon pack="assets" name="arrow-left" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
        style={[styles.skip, {top: top + 8}]}>
        <Text category="t7-sb" status="info" onPress={goBack}>
          SKIP
        </Text>
      </TouchableOpacity>
      <Content contentContainerStyle={{}}>
        <Carousel
          width={width}
          height={242 * (height / 812)}
          data={DATA_CAROUSEL}
          onProgressChange={(_, absoluteProgress) =>
            (progress.value = absoluteProgress)
          }
          renderItem={({item}) => {
            return (
              <View style={styles.itemCarousel}>
                <Image
                  source={item.img}
                  style={{
                    width: 200 * (width / 375),
                    height: 130 * (height / 812),
                    alignSelf: 'center',
                  }}
                />
                <Text category="t3-sb" center marginBottom={8} marginTop={24}>
                  {item.title}
                </Text>
                <Text category="t7" center>
                  {item.describe}
                </Text>
              </View>
            );
          }}
        />
        <View style={styles.pagination}>
          {DATA_CAROUSEL.map((item, i) => {
            return (
              <Pagination
                backgroundColor={theme['color-button-primary']}
                index={i}
                key={i}
                animValue={progress}
                length={DATA_CAROUSEL.length}
              />
            );
          })}
        </View>
        <Content horizontal>
          <View style={{width: width * 2, marginTop: 40}}>
            <View style={styles.content}>
              {DATA.map((item, i) => {
                return (
                  <TouchableOpacity activeOpacity={0.54}>
                    <Layout style={styles.item} level="2" key={i}>
                      <Text>{item.title}</Text>
                    </Layout>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </Content>
      </Content>
      <Button
        children={'CONTINUE'}
        onPress={goBack}
        status="primary"
        style={styles.button}
      />
    </Container>
  );
});

export default SetupInterest;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 24,
  },
  item: {
    marginRight: 24,
    borderRadius: 99,
    padding: 16,
    marginBottom: 24,
  },
  arrowLeft: {
    position: 'absolute',
    left: 16,
    zIndex: 100,
  },
  skip: {
    position: 'absolute',
    right: 16,
    zIndex: 100,
  },
  itemCarousel: {
    marginTop: 8,
    marginHorizontal: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  button: {
    marginHorizontal: 40,
  },
});
