import * as React from 'react';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import {HStack, VStack} from 'components';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface IProgressStep {
  activeStep: number;
  tabs: number[];
}
const ProgressStep = React.memo(({activeStep, tabs}: IProgressStep) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const progress = useDerivedValue(() => {
    if (activeStep) {
      return withSpring(activeStep);
    } else {
      return withSpring(0);
    }
  });

  const styleAnimated = useAnimatedStyle(() => {
    const widthLine = interpolate(progress.value, tabs, [
      0,
      0,
      26,
      26 * 2,
      26 * 3,
      26 * 4,
    ]);
    return {
      width: withTiming(widthLine, {duration: 50, easing: Easing.circle}),
      backgroundColor: theme['text-info-color'],
      height: 1,
    };
  });

  return (
    <VStack style={styles.container}>
      <HStack itemsCenter style={styles.content}>
        {tabs.map((item, i) => {
          return (
            <Animated.View
              style={[
                styles.activeIndicator,
                {
                  backgroundColor:
                    activeStep <= i
                      ? theme['background-basic-color-2']
                      : theme['text-info-color'],
                },
              ]}
              key={i}
            />
          );
        })}
      </HStack>
      <Layout style={styles.divider} level="8">
        <Animated.View style={styleAnimated} />
      </Layout>
    </VStack>
  );
});

export default ProgressStep;

const themedStyles = StyleService.create({
  container: {
    alignSelf: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 99,
    marginHorizontal: 9,
  },
  divider: {
    height: 1,
    zIndex: -100,
    marginHorizontal: 9,
    marginTop: -4.5,
  },
});
