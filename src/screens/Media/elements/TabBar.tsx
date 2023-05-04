import {Text} from 'components';
import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp, ColorValue} from 'react-native';
import {Button, useTheme} from '@ui-kitten/components';
import {EvaSize} from '@ui-kitten/components/devsupport';

interface Props {
  tabs?: string[];
  style?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  backgroundTab?: string | ColorValue;
  backgroundTabActive?: string | ColorValue;
  onChangeTab: (index: number) => void;
  tabActive: number;
  uppercase?: boolean;
  capitalize?: boolean;
  status?: Array<string>;
  size?: EvaSize;
  unreadData?: string;

  category?:
    | 'h1'
    | 'h1-b'
    | 'h1-sb'
    | 'h2'
    | 'h2-b'
    | 'h2-sb'
    | 't1'
    | 't1-b'
    | 't1-sb'
    | 't2'
    | 't2-b'
    | 't2-sb'
    | 't3'
    | 't3-b'
    | 't3-sb'
    | 't4'
    | 't4-b'
    | 't4-sb'
    | 't5'
    | 't5-b'
    | 't5-sb'
    | 't6'
    | 't6-b'
    | 't6-sb'
    | 't7'
    | 't7-b'
    | 't7-sb'
    | 's1'
    | 's1-sb'
    | 's1-b'
    | 's2'
    | 's2-b'
    | 's2-sb'
    | 'c1'
    | 'label';
}
const TabBar = ({
  tabs,
  onChangeTab,
  style,
  tabStyle,
  size,
  capitalize,
  uppercase,
  backgroundTab,
  tabActive,
  status = ['white', 'basic'],
  backgroundTabActive,
  category = 's1-sb',
}: Props) => {
  const theme = useTheme();
  const _onChangeTab = React.useCallback(
    (number: number) => {
      onChangeTab(number);
    },
    [onChangeTab],
  );

  return (
    <View style={[styles.container, style, {backgroundColor: backgroundTab}]}>
      {tabs?.map((item, index) => {
        const backgroundColor = {
          backgroundColor:
            tabActive === index ? backgroundTabActive : undefined,
        };
        const tintColor = tabActive === index ? status[0] : status[1];
        return (
          <Button
            onPress={() => _onChangeTab(index)}
            key={index}
            style={[styles.tabStyle, backgroundColor, tabStyle]}
            size={size}
            children={props => {
              return (
                <Text
                  capitalize={capitalize}
                  uppercase={uppercase}
                  category={category}
                  status={tintColor}
                  center
                  children={item}
                />
              );
            }}
          />
        );
      })}
    </View>
  );
};
export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 24,
    marginTop: 32,
  },
  tabStyle: {
    height: 32,
    borderRadius: 24,
    justifyContent: 'center',
    flex: 1,
    borderWidth: 0,
  },
  noti: {
    position: 'absolute',
    right: 9,
    top: 9,
    borderRadius: 50,
  },
});
