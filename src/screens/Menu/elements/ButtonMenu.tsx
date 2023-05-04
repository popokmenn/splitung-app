import * as React from 'react';
import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
} from '@ui-kitten/components';

import {HStack, Text} from 'components';

interface IButtonMenuProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  icon: string;
  status: 'basic' | 'success' | 'warning' | 'danger' | 'info' | 'yellow';
  message?: string;
}

const ButtonMenu = React.memo(
  ({title, style, icon, status, message}: IButtonMenuProps) => {
    const theme = useTheme();
    const styles = useStyleSheet(themedStyles);

    const getColor = () => {
      switch (status) {
        case 'basic':
          return theme['background-basic-color-5'];
        case 'success':
          return theme['background-basic-color-9'];
        case 'warning':
          return '#FFA26B';
        case 'danger':
          return theme['text-danger-color'];
        case 'info':
          return theme['color-blue-sky-400'];
        case 'yellow':
          return theme['text-warning-color'];
        default:
          return 'transparent';
      }
    };
    return (
      <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]}>
        <HStack itemsCenter>
          <View style={{...styles.iconContain, backgroundColor: getColor()}}>
            <Icon pack="assets" name={icon} style={styles.icon} />
          </View>
          <Text category="t7-sb" uppercase status="white">
            {title}
          </Text>
        </HStack>
        <HStack itemsCenter justify="space-between">
          {message && (
            <View style={styles.message}>
              <Text category="s1-b" center status='white'>
                {message}
              </Text>
            </View>
          )}
          <Icon pack="assets" name="arrow-right" style={styles.icon} />
        </HStack>
      </TouchableOpacity>
    );
  },
);

export default ButtonMenu;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContain: {
    padding: 12,
    borderRadius: 16,
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-white-color',
  },
  message: {
    width: 32,
    height: 24,
    borderRadius: 24,
    backgroundColor: 'color-blue-sky-400',
    justifyContent: 'center',
    marginRight:12
  },
});
