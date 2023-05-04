import * as React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Avatar,
  Icon,
  Layout,
} from '@ui-kitten/components';

import {
  Container,
  FocusAwareStatusBar,
  NavigationAction,
  Text,
} from 'components';
import {DATA_USER} from 'constants/data';
import keyExtractor from 'utils/keyExtractor';

const Menu06 = React.memo(() => {
  const theme = useTheme();
  const {height} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const DATA = [
    {id: '1', title: 'HOME PAGE', icon: 'home-menu'},
    {id: '2', title: 'Portfolios', icon: 'portfolios'},
    {id: '3', title: 'Message', icon: 'message-menu', message: 9},
    {id: '4', title: 'profile', icon: 'profile-menu'},
    {id: '5', title: 'settings', icon: 'settings-menu'},
    {id: '6', title: 'logout', icon: 'logout-menu'},
  ];
  return (
    <Container style={styles.container} level="7">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryLeft={<NavigationAction icon="more" status="white" />}
        accessoryRight={
          <Avatar source={{uri: DATA_USER[0].avatar.path}} size="small" />
        }
      />
      <FlatList
        data={DATA}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.item,
                {
                  height: 152 * (height / 812),
                  backgroundColor:
                    theme[`background-button-color-${index + 1}`],
                },
              ]}>
              <Icon pack="assets" name={item.icon} style={styles.icon} />
              <Text
                category="t5-sb"
                status="white"
                capitalize
                marginBottom={40}
                marginLeft={24}>
                {item.title}
              </Text>
              {item.message && (
                <Layout style={styles.mess} level="5">
                  <Text category="s1" status="white">
                    {item.message}
                  </Text>
                </Layout>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
});

export default Menu06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingBottom: 8,
  },
  contentContainer: {
    paddingTop: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginBottom: -40,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-white-color',
    marginBottom: 40,
  },
  mess: {
    marginBottom: 52,
    paddingHorizontal: 5,
    borderRadius: 99,
    marginLeft: 4,
  },
});
