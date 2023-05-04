import * as React from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {HStack, Text} from 'components';

interface TabBar08Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  tabs: Array<string>;
  style?: StyleProp<ViewStyle>;
}
const TabBar08 = React.memo(
  ({activeIndex, setActiveIndex, tabs, style}: TabBar08Props) => {
    const styles = useStyleSheet(themedStyles);

    const _onPress = (index: number) => () => {
      setActiveIndex(index);
    };
    return (
      <View style={[style, styles.container]}>
        <HStack mh={16}>
          {tabs.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <TouchableOpacity
                key={i}
                onPress={_onPress(i)}
                style={styles.button}>
                <Text
                  category="s2-sb"
                  uppercase
                  marginBottom={11}
                  status={isActive ? 'basic' : 'placeholder'}>
                  {item}
                </Text>
                <Layout level={isActive ? '7' : '1'} style={styles.indicator} />
              </TouchableOpacity>
            );
          })}
        </HStack>
        <Divider />
      </View>
    );
  },
);

export default TabBar08;

const themedStyles = StyleService.create({
  container: {
    justifyContent: 'space-between',
  },
  button: {
    paddingTop: 11,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  indicator: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 4,
    width: '70%',
  },
});
