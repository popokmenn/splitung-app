import * as React from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {HStack, Text} from 'components';

interface TabBarProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  tabs: Array<string>;
  style?: StyleProp<ViewStyle>;
}
const TabBarEarning = React.memo(
  ({activeIndex, setActiveIndex, tabs, style}: TabBarProps) => {
    const styles = useStyleSheet(themedStyles);

    const _onPress = (index: number) => () => {
      setActiveIndex(index);
    };
    return (
      <View style={[style, styles.container]}>
        <HStack>
          {tabs.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <TouchableOpacity
                key={i}
                onPress={_onPress(i)}
                activeOpacity={0.7}
                style={[styles.button, isActive && styles.activeButton]}>
                <Text
                  category="s2-sb"
                  uppercase
                  status={isActive ? 'primary' : 'placeholder'}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </HStack>
      </View>
    );
  },
);

export default TabBarEarning;

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
    borderRadius: 99,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeButton: {
    backgroundColor: 'background-basic-color-7',
    borderRadius: 99,
  },
});
