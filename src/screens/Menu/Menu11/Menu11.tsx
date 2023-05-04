import * as React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
  Avatar,
  Divider,
} from '@ui-kitten/components';

import {
  Container,
  FocusAwareStatusBar,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {Images} from 'assets/images';
import {DATA_USER} from 'constants/data';

const Drawer = createDrawerNavigator();
const Menu11 = React.memo(() => {
  const theme = useTheme();
  const {dispatch} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeButton, setActiveButton] = React.useState(0);
  const Screen = () => {
    const isDrawerOpen = useDrawerStatus() === 'open';
    return (
      <Container style={styles.containerScreen}>
        <FocusAwareStatusBar
          barStyle={isDrawerOpen ? 'light-content' : 'dark-content'}
        />
        <TopNavigation
          appearance="control"
          accessoryLeft={
            <NavigationAction
              marginTop={12}
              style={{borderRadius:99}}
              backgroundColor={theme['background-basic-color-1']}
            />
          }
        />
        <Button
          style={styles.openMenu}
          children={'Open Menu'}
          onPress={() => {
            dispatch(DrawerActions.openDrawer());
          }}
        />
      </Container>
    );
  };
  const drawerContent = () => {
    return (
      <ImageBackground
        source={Images.menu.menu11}
        style={{width: width, height: height}}>
        <DrawerContentScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <VStack ml={16}>
            <TopNavigation
              style={styles.topNavigation}
              appearance="control"
              accessoryLeft={
                <Avatar source={{uri: DATA_USER[0].avatar.path}} size="small" />
              }
              accessoryRight={
                <NavigationAction
                style={{borderRadius:99}}
                  onPress={() => dispatch(DrawerActions.closeDrawer())}
                  icon="arrow_right"
                  status="white"
                  backgroundColor={theme['background-button-color-1']}
                />
              }
            />
            <Text category="t5-b" status="white" marginTop={12}>
              {'Douglas Hopkins'}
            </Text>
            <Text category="s2" status="placeholder" marginTop={4}>
              {'Balance: $128.00'}
            </Text>
          </VStack>
          <Layout level="5" style={[styles.layout, {paddingTop: top}]}>
            {DATA.map((item, i) => {
              const isActive = activeButton === i;
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.buttonDrawer}
                  onPress={() => {
                    setActiveButton(i);
                  }}>
                  <Text
                    capitalize
                    category="t5-sb"
                    status={isActive ? 'white' : 'placeholder'}>
                    {item.title}
                  </Text>
                  {isActive && <Divider style={styles.divider} />}
                </TouchableOpacity>
              );
            })}
          </Layout>
        </DrawerContentScrollView>
      </ImageBackground>
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {width: width},
      }}>
      <>
        <Drawer.Screen component={Screen} name="Screen" />
      </>
    </Drawer.Navigator>
  );
});

export default Menu11;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  containerScreen: {
    flex: 1,
  },
  openMenu: {
    marginHorizontal: 60,
  },
  topNavigation: {
    marginTop: 8,
  },
  buttonDrawer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 16,
    marginLeft: 32,
  },
  divider: {
    width: 80,
  },
  layout: {
    paddingBottom: 32,
    marginRight: 24,
    borderTopRightRadius: 24,
  },
});
const DATA = [
  {
    id: '1',
    title: 'Home Page',
  },
  {
    id: '2',
    title: 'About us',
  },
  {
    id: '3',
    title: 'Profile',
  },
  {
    id: '5',
    title: 'Message',
  },
  {
    id: '6',
    title: 'Settings',
  },
  {
    id: '1s',
    title: 'Logout',
  },
];
