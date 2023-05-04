import * as React from 'react';
import {ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

import {Container, NavigationAction, Text} from 'components';
import {Images} from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Menu05 = () => {
  const theme = useTheme();
  const {height, width} = useLayout();
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
    <ImageBackground
      source={Images.menu.menu05}
      imageStyle={{width: width, height: height}}
      style={styles.background}>
      <Container style={styles.container}>
        <TopNavigation
          style={styles.topNavigation}
          accessoryLeft={<Icon pack="assets" name="logo" style={styles.logo} />}
          accessoryRight={
            <NavigationAction
              icon="arrow_right"
              status="white"
              style={styles.close}
              backgroundColor={theme['background-basic-color-10']}
            />
          }
        />
        <FlatList
          data={DATA}
          contentContainerStyle={styles.content}
          keyExtractor={keyExtractor}
          scrollEventThrottle={16}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  ...styles.item,
                  backgroundColor:
                    theme[`background-button-color-${index + 1}`],
                }}>
                <Icon pack="assets" name={item.icon} style={styles.icon} />
                {item.message && (
                  <Layout style={styles.mess} level="5">
                    <Text category="t7" status="white">
                      {item.message}
                    </Text>
                  </Layout>
                )}
                <Text
                  marginBottom={32}
                  category="t7-sb"
                  capitalize
                  status="white">
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </Container>
    </ImageBackground>
  );
};

export default Menu05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingBottom: 0,
  },
  topNavigation: {
    alignItems: 'center',
  },
  background: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
    marginLeft: 24,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 72,
  },
  item: {
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  icon: {
    marginTop: 40,
    width: 40,
    height: 40,
    marginBottom: 32,
    tintColor: 'text-white-color',
  },
  mess: {
    borderRadius: 99,
    paddingHorizontal: 5,
    position: 'absolute',
    top: 12,
    right: 12,
  },
  close:{
    borderRadius:99
  }
});
