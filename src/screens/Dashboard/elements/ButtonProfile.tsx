import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Layout, StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import {HStack, Text} from 'components';

interface IButtonProfileProps {
  icon: string;
  title: string;
  onPress?(): void;
  iconColor?: string;
}

const ButtonProfile = ({
  title,
  icon,
  onPress,
  iconColor,
}: IButtonProfileProps) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity
      style={styles.buttonProfile}
      activeOpacity={0.7}
      onPress={onPress}>
      <HStack justify="flex-start" itemsCenter>
        <Layout level="2" style={styles.layoutIcon}>
          <Icon
            pack="assets"
            name={icon}
            style={{tintColor: iconColor, width: 24, height: 24}}
          />
        </Layout>
        <Text marginLeft={16} category="t7-b">
          {title}
        </Text>
      </HStack>
      <Icon pack="assets" name="arrow-right" />
    </TouchableOpacity>
  );
};

export default ButtonProfile;

const themedStyles = StyleService.create({
  buttonProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'background-basic-color-1',
    padding: 10,
    paddingRight: 16,
    marginBottom: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  layoutIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});
