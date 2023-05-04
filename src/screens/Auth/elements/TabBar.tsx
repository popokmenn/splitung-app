import * as React from 'react';
import {StyleService, useStyleSheet, useTheme} from '@ui-kitten/components';

import {HStack, Text, VStack} from 'components';

interface ITabBarProps {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  tabs: string[];
}
const TabBar = React.memo(
  ({tabs, selectedIndex, setSelectedIndex}: ITabBarProps) => {
    const theme = useTheme();
    const styles = useStyleSheet(themedStyles);
    return (
      <HStack>
        {tabs.map((tabs, index) => {
          const isActive = index === selectedIndex;
          return (
            <VStack
              key={index}
              style={styles.button}
              onPress={() => {
                setSelectedIndex(index);
              }}>
              <Text
                center
                uppercase
                status={isActive ? 'basic' : 'placeholder'}
                category="s1-sb"
                marginBottom={12}>
                {tabs}
              </Text>
              <VStack style={isActive && styles.indicator} />
              <VStack style={styles.divider} />
            </VStack>
          );
        })}
      </HStack>
    );
  },
);

export default TabBar;

const themedStyles = StyleService.create({
  button: {
    flex: 1,
  },
  indicator: {
    height: 6,
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    backgroundColor: 'background-basic-color-7',
    marginHorizontal: 40,
    marginBottom: -2,
  },
  divider: {
    height: 1,
    backgroundColor: 'background-basic-color-2',
    marginTop: 1,
  },
});
