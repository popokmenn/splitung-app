import * as React from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {Text} from 'components';

interface TabBar07Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  tabs: Array<string>;
  style?: StyleProp<ViewStyle>;
}
const TabBar07 = React.memo(
  ({activeIndex, setActiveIndex, tabs, style}: TabBar07Props) => {
    const styles = useStyleSheet(themedStyles);

    return (
      <View style={[style, styles.container]}>
        {tabs.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <TouchableOpacity
              onPress={() => {
                setActiveIndex(i);
              }}
              key={i}
              style={[styles.button, isActive && styles.activeButton]}>
              <Text category="s2-sb" status={isActive ? 'white' : 'placeholder'}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  },
);

export default TabBar07;

const themedStyles = StyleService.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: 'background-basic-color-2',
    paddingVertical: 11,
    paddingHorizontal: 28,
    borderRadius: 99,
  },
  activeButton: {
    backgroundColor: 'background-basic-color-5',
  },
});
