import * as React from 'react';
import {StyleSheet, ViewStyle, StyleProp, View, ColorValue} from 'react-native';
import {useLayout} from 'hooks';
import HStack from './HStack';
import Text from './Text';

interface IHeaderProps {
  style?: StyleProp<ViewStyle>;
  accessoryLeft?: JSX.Element;
  accessoryRight?: JSX.Element;
  accessoryCenter?: React.ReactNode;
  backgroundColor?: string | ColorValue;
  title?: string;
  level?: string;
}

const Header = React.memo(
  ({
    accessoryCenter,
    accessoryLeft,
    accessoryRight,
    title,
    style,
    backgroundColor,
    level,
  }: IHeaderProps) => {
    const {top} = useLayout();
    return (
      <HStack
        level={level}
        style={[
          styles.headerContainer,
          {
            paddingTop: top + 8,
          },
          style,
        ]}>
        {accessoryLeft}
        <View style={[styles.center]}>
          {title ? (
            <Text status="white" category="t6-m" center>
              {title}
            </Text>
          ) : (
            accessoryCenter
          )}
        </View>
        {accessoryRight}
      </HStack>
    );
  },
);
export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 12,
    alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    bottom: 12,
  },
});
