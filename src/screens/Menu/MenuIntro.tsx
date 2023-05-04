import * as React from 'react';
import {FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';

import {Container} from 'components';
import {MenuStackParamList} from 'navigation/types';
import {useLayout} from 'hooks';

const MenuIntro = React.memo(() => {
  const {goBack, navigate} =
    useNavigation<NavigationProp<MenuStackParamList>>();
  const styles = useStyleSheet(themedStyles);
  const {width} = useLayout();
  const DATA: {screen: keyof MenuStackParamList}[] = [
    {
      screen: 'Menu01',
    },
    {
      screen: 'Menu02',
    },
    {
      screen: 'Menu03',
    },
    {
      screen: 'Menu04',
    },
    {
      screen: 'Menu05',
    },
    {
      screen: 'Menu06',
    },
    {
      screen: 'Menu07',
    },
    {
      screen: 'Menu08',
    },
    {
      screen: 'Menu09',
    },
    {
      screen: 'Menu10',
    },
    {
      screen: 'Menu11',
    },
    {
      screen: 'Menu12',
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Menu'}
        accessoryLeft={
          <TopNavigationAction
            onPress={goBack}
            icon={<Icon pack="assets" name="arrow-back" />}
          />
        }
      />
      <FlatList
        data={DATA}
        numColumns={2}
        contentContainerStyle={styles.content}
        renderItem={({item}) => {
          return (
            <Button
              style={[styles.item, {width: width / 2.5}]}
              children={item.screen}
              onPress={() => {
                navigate(item.screen);
              }}
            />
          );
        }}
      />
    </Container>
  );
});

export default MenuIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 40,
    alignItems: 'center',
  },
  item: {
    marginBottom: 24,
    marginHorizontal: 12,
    alignSelf: 'center',
  },
});
