import * as React from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {HStack, Text} from 'components';

interface TabBarCashProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  tabs: Array<string>;
  style?: StyleProp<ViewStyle>;
}
const TabBarCash = React.memo(
  ({activeIndex, setActiveIndex, tabs, style}: TabBarCashProps) => {
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
                style={[styles.button, isActive && styles.activeButton]}>
                <Text
                  category="s2-b"
                  capitalize
                  marginBottom={11}
                  style={{color: isActive ? '#FFFFFF' : '#696969'}}
                  opacity={isActive ? 1 : 0.5}>
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

export default TabBarCash;

const themedStyles = StyleService.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 4,
    marginLeft: 20,
    marginRight: 22,
  },
  button: {
    paddingTop: 11,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginHorizontal: 2,
    width: 74,
    height: 40,
    borderRadius: 99,
    backgroundColor: 'background-basic-color-3',
  },
  activeButton: {
    backgroundColor: 'background-basic-color-5',
  },
});
