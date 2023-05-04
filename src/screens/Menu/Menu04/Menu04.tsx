import * as React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Avatar,
  Input,
  Icon,
  Divider,
} from '@ui-kitten/components';

import {Container, HStack, NavigationAction, Text, VStack} from 'components';
import {DATA_USER} from 'constants/data';
import keyExtractor from 'utils/keyExtractor';

const Menu04 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const DATA = [
    {id: '1', title: 'HOME PAGE', icon: 'home-menu'},
    {id: '2', title: 'Portfolios', icon: 'portfolios'},
    {id: '3', title: 'Message', icon: 'message-menu', message: 3},
    {id: '4', title: 'profile', icon: 'profile-menu'},
    {id: '5', title: 'settings', icon: 'settings-menu'},
    {id: '6', title: 'logout', icon: 'logout-menu'},
  ];
  return (
    <Container level="11" style={styles.container}>
      <HStack ml={32}>
        <HStack itemsCenter mt={18}>
          <Avatar
            source={{uri: DATA_USER[0].avatar.path}}
            //@ts-ignore
            style={styles.avatar}
          />
          <VStack ml={8}>
            <Text category="t7-b" status="white">
              Mabel Thomas
            </Text>
            <Text category="s2" status="placeholder">
              Freelancer
            </Text>
          </VStack>
        </HStack>
        <NavigationAction
          icon="shape-close"
          status="white"
          style={styles.close}
          backgroundColor={theme['background-basic-color-10']}
        />
      </HStack>
      <Input
        status="transparent"
        placeholder="Type something...."
        accessoryLeft={() => (
          <Icon pack="assets" name="search" style={styles.iconSearch} />
        )}
        style={styles.input}
        textStyle={styles.textInput}
      />
      <FlatList
        data={DATA}
        contentContainerStyle={styles.content}
        keyExtractor={keyExtractor}
        numColumns={2}
        ListHeaderComponent={() => (
          <Divider appearance="primary" style={styles.divider} />
        )}
        renderItem={item => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.item,
                item.index < 4 && styles.borderBottom,
                item.index % 2 !== 0 && styles.borderLeft,
              ]}>
              <Icon pack="assets" name={item.item.icon} style={styles.icon} />
              <Text category="t7-sb" uppercase status="white">
                {item.item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
});

export default Menu04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  input: {
    backgroundColor: '#ffffff30',
    borderRadius: 8,
    borderWidth: 0,
    marginTop: 24,
    paddingHorizontal: 32,
  },
  textInput: {
    color: 'text-white-color',
  },
  iconSearch: {
    tintColor: '#FFFFFF',
  },
  content: {
    alignItems: 'center',
    flexGrow: 1,
    marginTop: 40,
  },
  item: {
    width: 294 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  borderBottom: {
    borderBottomWidth: 0.6,
    borderColor: 'background-basic-color-5',
  },
  borderLeft: {
    borderLeftWidth: 0.6,
    borderColor: 'background-basic-color-5',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 24,
  },
  divider: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    width: 10,
    zIndex: 100,
  },
  close:{
    borderRadius:99,
    alignSelf: 'center',
  }
});
