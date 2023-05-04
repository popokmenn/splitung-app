import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

import {Text} from 'components';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import {useBoolean} from 'hooks';

interface ButtonIndicatorProps {
  title: string;
  onPress?(): void;
  active: boolean;
  style?: StyleProp<ViewStyle>;
}

const ButtonIndicator = ({
  title,
  onPress,
  active,
  style,
}: ButtonIndicatorProps) => {
  const theme = useTheme();
  const [focus, {toggle, on, off}] = useBoolean(false);
  const styles = useStyleSheet(themedStyles);
  return (
    <TouchableOpacity
      onFocus={on}
      onBlur={off}
      onPressIn={on}
      onPressOut={off}
      style={[styles.button, focus && styles.activeButton, style]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text category="t7-sb" status="secondary">
        {title}
      </Text>
      {active && (
        <Layout
          style={[
            styles.indicator,
            {backgroundColor: theme['color-primary-400']},
          ]}
        />
      )}
    </TouchableOpacity>
  );
};
export default ButtonIndicator;

const themedStyles = StyleService.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  activeButton: {
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: 'color-primary-400',
    borderRadius: 99,
  },
  indicator: {
    height: 4,
    width: 40,
    borderRadius: 12,
  },
});
