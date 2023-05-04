import * as React from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {HStack, Text} from 'components';

interface TabBarStaticsProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  tabs: Array<string>;
  style?: StyleProp<ViewStyle>;
}
const TabBarStatics = React.memo(
  ({activeIndex, setActiveIndex, tabs, style}: TabBarStaticsProps) => {
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
                  category="t5"
                  capitalize
                  marginBottom={11}
                  status={'white'}
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

export default TabBarStatics;

const themedStyles = StyleService.create({
  container: {
    backgroundColor: '#FFFFFF10',
    borderRadius: 6,
    padding: 4,
  },
  button: {
    paddingTop: 11,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginHorizontal: 2,
    flex: 1,
  },
  activeButton: {
    backgroundColor: 'background-basic-color-5',
    borderRadius: 6,
  },
});
