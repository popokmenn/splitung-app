import * as React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Button,
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import {Container, Content, Text} from 'components';
import {Images} from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import {interpolate, useSharedValue} from 'react-native-reanimated';
import {DATA_WALKTHROUGHS_05} from 'constants/data';
import Pagination from './elements/Pagination';

const Walkthroughs05 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const progress = useSharedValue(0);
  const animationStyle = React.useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.35, 1, 0.35]);
    const opacity = interpolate(value, [-0.4, 0, 1], [0, 1, 0]);

    return {
      transform: [{scale}],
      zIndex,
      opacity,
    };
  }, []);
  const DATA = DATA_WALKTHROUGHS_05;
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.lightLogo}
          // @ts-ignore
          style={styles.logo}
        />
        <View style={{paddingTop: 32}}>
          <Carousel
            data={DATA}
            width={width}
            windowSize={width}
            style={{width: '100%'}}
            height={height}
            onProgressChange={(offsetProgress, absoluteProgress) => {
              progress.value = absoluteProgress;
            }}
            loop={false}
            renderItem={({item}) => {
              return (
                <View>
                  <Image
                    source={item.image}
                    style={{
                      width: width,
                      height: height / 2,
                    }}
                  />
                  <Text
                    marginTop={72}
                    marginHorizontal={32}
                    category="t5-sb"
                    status="primary">
                    {item.title}
                  </Text>
                  <Text
                    marginHorizontal={32}
                    marginTop={24}
                    category="t7"
                    status="primary">
                    {item.describe}
                  </Text>
                </View>
              );
            }}
            customAnimation={animationStyle}
          />
          <Layout
            level="7"
            style={{
              height: height / 2,
              ...styles.layout,
            }}>
            <View style={styles.pagination}>
              {DATA.map((item, i) => {
                return (
                  <Pagination
                    backgroundColor={theme['text-white-color']}
                    index={i}
                    key={i}
                    animValue={progress}
                    length={DATA.length}
                  />
                );
              })}
            </View>
          </Layout>
        </View>
      </Content>
      <Button
        children={'GET START'}
        onPress={goBack}
        status="secondary"
        style={styles.buttonStart}
      />
    </Container>
  );
});

export default Walkthroughs05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  logo: {
    width: 128,
    height: 32,
    marginLeft: 32,
  },
  content: {
    flexGrow: 1,
  },
  layout: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: -10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonStart: {
    position: 'absolute',
    bottom: 32,
    left: 32,
  },
  pagination: {
    alignSelf: 'flex-start',
    marginTop: 32,
    marginLeft: 30,
    flexDirection: 'row',
  },
});
