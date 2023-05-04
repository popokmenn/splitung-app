import * as React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Layout,
} from '@ui-kitten/components';

import {Container, HStack, NavigationAction, Text, VStack} from 'components';
import {DATA_MENU, DATA_SOCIAL} from 'constants/data';
import keyExtractor from 'utils/keyExtractor';

const Menu03 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        accessoryRight={
          <NavigationAction
            icon="arrow_right"
            status="white"
            backgroundColor={theme['background-basic-color-10']}
            marginBottom={32}
            style={styles.close}
          />
        }
      />
      <HStack>
        <VStack>
          <FlatList
            data={DATA_MENU}
            keyExtractor={keyExtractor}
            ListFooterComponent={() => {
              return <Layout style={styles.divider} level="2" />;
            }}
            renderItem={item => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  activeOpacity={0.7}
                  onPress={() => {
                    setActiveIndex(item.index);
                  }}>
                  {activeIndex === item.index && (
                    <View style={styles.indicator} />
                  )}
                  <Text
                    category="t4-sb"
                    uppercase
                    status="white"
                    marginLeft={activeIndex === item.index ? 36 : 40}>
                    {item.item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </VStack>
        <Layout level="6" style={styles.screen} />
      </HStack>
      <VStack mt={32} ml={40}>
        <Text category="t5" status="white" marginBottom={20}>
          Follow us
        </Text>
        <HStack justify="flex-start">
          {DATA_SOCIAL.map((item, i) => {
            return <Image source={item} key={i} style={{marginRight: 24}} />;
          })}
        </HStack>
      </VStack>
    </Container>
  );
});

export default Menu03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'color-brown-500',
    height: '100%',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  indicator: {
    width: 4,
    height: 20,
    backgroundColor: 'text-warning-color',
  },
  divider: {
    width: 32,
    height: 1,
    marginLeft: 40,
  },
  screen: {
    backgroundColor: 'text-warning-color',
    width: 60,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },close:{
    borderRadius:99
  }
});
