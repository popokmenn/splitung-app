import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Button,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import {Images} from 'assets/images';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {DATA_WALKTHROUGHS_09} from 'constants/data';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Pagination from './elements/Pagination';

interface IWalkthroughsProps {
  image: number;
  title: string;
  describe: string;
}
interface ItemProps {
  index: number;
  animationValue: Animated.SharedValue<number>;
  item: IWalkthroughsProps;
}
const Walkthroughs09 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const data = DATA_WALKTHROUGHS_09;
  const theme = useTheme();
  const [heightImg, setHeightImg] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const progress = useSharedValue(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const animationStyle = React.useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [-1000, 0, 1000]);
    const translateX = interpolate(value, [-1, 0, 1], [0, 0, width]);
    return {
      transform: [{translateX}],
      zIndex,
    };
  }, []);

  const CustomItem: React.FC<ItemProps> = ({index, item, animationValue}) => {
    const maskStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [-1, 1, -1],
      );
      const scale = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [0.6, 1, 0.6],
      );
      return {
        opacity: opacity,
        transform: [{scale: scale}],
      };
    }, [animationValue]);

    return (
      <Animated.View style={{flex: 1, ...maskStyle}}>
        <View>
          <Image
            source={item.image}
            onLayout={e => {
              setHeightImg(e.nativeEvent.layout.height);
            }}
          />
          <Text category="t1-sb" center marginBottom={16} marginTop={48}>
            {item.title}
          </Text>
          <Text category="t5" marginHorizontal={40} center>
            {item.describe}
          </Text>
        </View>
      </Animated.View>
    );
  };
  const onPrv = () => {
    ref.current?.prev();
  };
  return (
    <Container style={styles.container}>
      <Content>
        <HStack mh={32} mb={24} mt={12} itemsCenter>
          <Image source={Images.lightLogo} />
          <Text category="s1" onPress={goBack} status="info">
            SKIP!
          </Text>
        </HStack>
        <View>
          <Carousel
            ref={ref}
            data={data}
            width={width}
            loop={false}
            height={height / 1.4}
            customAnimation={animationStyle}
            onSnapToItem={e => setActiveIndex(e)}
            scrollAnimationDuration={1000}
            onProgressChange={(offsetProgress, absoluteProgress) => {
              progress.value = absoluteProgress;
            }}
            renderItem={({index, item, animationValue}) => {
              return (
                <CustomItem
                  key={index}
                  index={index}
                  item={item}
                  animationValue={animationValue}
                />
              );
            }}
          />
          <View style={[styles.pagination, {top: heightImg + 4}]}>
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
        </View>
        <HStack mh={32} mt={12}>
          <Button
            children={'BACK'}
            disabled={activeIndex === 0}
            onPress={onPrv}
          />
          <Text category="t3-sb">
            {`${activeIndex + 1} `}
            <Text category="t7-sb">{`/ ${data.length}`}</Text>
          </Text>
          <Button children={'START'} status="primary" />
        </HStack>
      </Content>
    </Container>
  );
});

export default Walkthroughs09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  pagination: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
