import {Text} from 'components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  Easing,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
interface CircleProps {
  value: number;
  stokeColor?: string;
  progressStokeColor?: string;
  d: number;
  fill: string;
}
export default function CircleProgressBar({
  value,
  progressStokeColor = '#FFFFFF',
  stokeColor = '#FFFFFF50',
  d,
  fill = 'transparent',
}: CircleProps) {
  const progress = useSharedValue(0);
  const CIRCLE_LENGTH = d * Math.PI - 44; // 2PI*R
  const R = CIRCLE_LENGTH / (2 * Math.PI);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  React.useEffect(() => {
    progress.value = withTiming(value / 100 > 0 ? value / 100 : 0, {
      duration: 2000,
      easing: Easing.bezier(0.1, 0.3, 0.5, 1),
    });
  }, [progress.value, value]);
  return (
    <View style={[styles.container, {width: d, height: d}]}>
      <Svg
        style={{
          position: 'absolute',
          width: d,
          height: d,
        }}>
        <Circle
          cx={d / 2}
          cy={d / 2}
          r={R}
          stroke={stokeColor}
          strokeWidth={d > 100 ? 6 : 2}
          strokeDasharray={CIRCLE_LENGTH}
        />
        <AnimatedCircle
          cx={d / 2}
          cy={d / 2}
          r={R}
          stroke={progressStokeColor}
          strokeWidth={d > 100 ? 6 : 2}
          fill={fill}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
        />
      </Svg>
      <Text
        category="s2-sb"
        style={{
          transform: [{rotateZ: '90deg'}],
        }}
        status="white">{`+${value}%`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotateZ: '270deg'}],
  },
});
