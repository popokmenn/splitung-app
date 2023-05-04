import React, {memo} from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {useTheme, Icon, TopNavigationAction} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

import Text from './Text';

import {EvaStatus} from '@ui-kitten/components/devsupport';
import Color from 'utils/color';

interface NavigationActionProps {
  icon?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  onPress?: () => void;
  title?: string;
  titleStatus?: EvaStatus | 'body' | 'white';
  size?: 'giant' | 'large' | 'medium' | 'small'; // giant-58-icon-24 large-48-icon-24  medium-40-icon-24  small-32-icon-16
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  center?: boolean;
  status?: 'basic' | 'white' | 'primary' | 'placeholder' | 'black';
  backgroundColor?: string | ColorValue;
}

const NavigationAction = memo(
  ({
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    onPress,
    icon,
    title,
    size = 'large',
    titleStatus,
    disabled,
    center,
    style,
    status = 'basic',
    backgroundColor,
  }: NavigationActionProps) => {
    const themes = useTheme();

    const {goBack} = useNavigation();
    const _onPress = React.useCallback(() => {
      if (onPress) {
        onPress && onPress();
      } else {
        goBack();
      }
    }, [onPress, goBack]);

    const getStatus = React.useCallback(() => {
      switch (status) {
        case 'basic':
          return themes['text-basic-color'];
        case 'primary':
          return themes['text-info-color'];
        case 'white':
          return themes['text-white-color'];
        case 'placeholder':
          return '#FFFFFF50';
        case 'black':
          return Color.black;
        default:
          return themes['text-basic-color'];
      }
    }, [status]);
    const getSizeIcon = (
      size: 'giant' | 'large' | 'medium' | 'small',
    ): number => {
      switch (size) {
        case 'giant':
          return 48;
        case 'large':
          return 24;
        case 'medium':
          return 18;
        case 'small':
          return 12;
        default:
          return 24;
      }
    };
    const getPadding = (
      size: 'giant' | 'large' | 'medium' | 'small',
    ): number => {
      switch (size) {
        case 'giant':
          return 16;
        case 'large':
          return 10;
        case 'medium':
          return 4;
        case 'small':
          return 4;
        default:
          return 4;
      }
    };
    return title ? (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.7}
        onPress={_onPress}>
        <Text category="t7" status={titleStatus}>
          {title}
        </Text>
      </TouchableOpacity>
    ) : (
      <TopNavigationAction
        onPress={_onPress}
        disabled={disabled}
        activeOpacity={0.7}
        style={[
          styles.container,
          {
            marginBottom: marginBottom,
            marginTop: marginTop,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginVertical: marginVertical,
            backgroundColor: backgroundColor,
            padding: getPadding(size),
            borderRadius: 8,
          },
          style,
        ]}
        icon={props => (
          <Icon
            {...props}
            pack="assets"
            name={icon || 'shape-close'}
            style={[
              {
                height: getSizeIcon(size),
                width: getSizeIcon(size),
                tintColor: getStatus(),
              },
            ]}
          />
        )}
      />
    );
  },
);

export default NavigationAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
});
