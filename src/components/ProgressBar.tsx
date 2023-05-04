import * as React from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';
import {useTheme, Layout} from '@ui-kitten/components';

interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  didDone: number;
  total: number;
  styleBar?: StyleProp<ViewStyle>;
  progressColor?: string;
  containColor?: string;
}

const ProgressBar = ({
  style,
  didDone,
  total,
  styleBar,
  progressColor,
  containColor,
}: ProgressBarProps) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState<number>(1);
  const progress = useSharedValue(didDone / total);

  const slider = useDerivedValue(() => {
    return progress.value * width;
  });

  const styleSlider = useAnimatedStyle(() => {
    return {
      width: withTiming(slider.value, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });
  const onLayout = React.useCallback(({nativeEvent}: LayoutChangeEvent) => {
    setWidth(prev => {
      if (prev !== nativeEvent.layout.width) {
        return nativeEvent.layout.width;
      }
      return prev;
    });
  }, []);

  return (
    <View style={{minWidth: 100}}>
      <Layout
        level="2"
        style={[
          styles.container,

          style,
          {
            backgroundColor: containColor
              ? containColor
              : theme['background-basic-color-8'],
          },
        ]}
        onLayout={onLayout}>
        <Animated.View
          style={[
            {
              height: 8,
              backgroundColor: progressColor
                ? progressColor
                : theme['text-info-color'],
              borderRadius: 8,
            },
            styleBar,
            styleSlider,
          ]}>
        </Animated.View>
      </Layout>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: 8,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressText: {
    fontSize: 32,
    lineHeight: 40,
    color: '#F0DF67',
    alignSelf: 'center',
  },
});
