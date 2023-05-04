import * as React from 'react';
import {
  View,
  Image,
  StyleProp,
  ViewStyle,
  ImageRequireSource,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import {Text} from 'components';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import type {TAnimationStyle} from 'react-native-reanimated-carousel/src/layouts/BaseLayout';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import _ from 'lodash';
import Dots from './Dots';

interface ICardProps {
  title: string;
  image: ImageRequireSource;
}

interface INewsCarousel {
  style?: StyleProp<ViewStyle>;
  carouselStyle?: StyleProp<ViewStyle>;
  data: Array<ICardProps>;
}

const NewsCarousel = React.memo(
  ({style, carouselStyle, data}: INewsCarousel) => {
    const theme = useTheme();
    const {goBack} = useNavigation();
    const {height, width, top, bottom} = useLayout();
    const styles = useStyleSheet(themedStyles);

    const progress = useSharedValue(0);
    const refCarousel = React.useRef<ICarouselInstance>(null);
    const animationStyle: TAnimationStyle = React.useCallback(
      (value: number) => {
        'worklet';

        const zIndex = interpolate(value, [-1, 0, 1], [-1000, 0, 1000]);
        const translateX = interpolate(value, [-1, 0, 1], [0, 0, width]);

        return {
          transform: [{translateX}],
          zIndex,
        };
      },
      [],
    );
    const renderItem = ({
      item,
      animationValue,
    }: {
      item: ICardProps;
      animationValue: Animated.SharedValue<number>;
    }) => {
      const colors_data = _.shuffle(colors);

      const maskStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
          animationValue.value,
          [-1, 0, 1],
          ['#000000dd', 'transparent', '#000000dd'],
        );

        return {
          backgroundColor,
        };
      }, [animationValue]);
      return (
        <Layout style={[styles.layout, {backgroundColor: colors_data.pop()}]}>
          <Animated.View
            pointerEvents="none"
            style={[styles.animatedLayout, maskStyle]}
          />
          <View style={styles.backdrop}>
            <Text category="t5-b" status="white" center marginHorizontal={20}>
              {item.title}
            </Text>
          </View>
          <Image
            source={item.image}
            style={{width: 343 * (width / 375), height: 193 * (height / 812)}}
          />
        </Layout>
      );
    };

    return (
      <View style={style}>
        <Carousel
          data={data}
          width={width}
          height={193 * (height / 812)}
          autoPlay
          autoPlayInterval={2500}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            const x = absoluteProgress * width;
            progress.value = x;
          }}
          ref={refCarousel}
          style={carouselStyle}
          renderItem={renderItem}
          customAnimation={animationStyle}
          scrollAnimationDuration={250}
        />
        <Dots
          style={styles.dots}
          translationValue={progress}
          data={data}
          widthDot={8}
          heightDot={4}
          widthInterpolate={20}
        />
      </View>
    );
  },
);

export default NewsCarousel;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  layout: {
    marginHorizontal: 16,
    borderRadius: 8,
  },
  animatedLayout: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backdrop: {
    backgroundColor: '#00000090',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
  },
});
const colors = ['#00C48C', '#FFCF5C', '#FFA26B', '#FF647C', '#0084F4'];
