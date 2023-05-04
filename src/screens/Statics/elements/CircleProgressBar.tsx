import {Text} from 'components';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
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
  valueProgress: number;
  stokeColor?: string;
  progressStokeColor?: string;
  d: number;
  fill: string;
  style?: StyleProp<ViewStyle>;
}
export default function CircleProgressBar({
  value,
  valueProgress,
  progressStokeColor = '#FFFFFF',
  stokeColor = '#FFFFFF50',
  d,
  fill = 'transparent',
  style,
}: CircleProps) {
  const progress = useSharedValue(0);
  const CIRCLE_LENGTH = d * Math.PI - 44; // 2PI*R
  const R = CIRCLE_LENGTH / (2 * Math.PI);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  React.useEffect(() => {
    progress.value = withTiming(
      valueProgress / 100 > 0 ? valueProgress / 100 : 0,
      {
        duration: 2000,
        easing: Easing.bezier(0.1, 0.3, 0.5, 1),
      },
    );
  }, [progress.value, value]);
  return (
    <View style={[styles.container, style, {width: d, height: d}]}>
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
      <View
        style={{
          transform: [{rotateZ: '90deg'}],
        }}>
        <Text category="t1" status="secondary" center>
          {`${value}`}
          <Text category="t6" status="placeholder">
            mg/dl
          </Text>
        </Text>
        <Text category="s1-b" center>
          {'Today'}
        </Text>
      </View>
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
