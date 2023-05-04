import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
  Input,
  Icon,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, NavigationAction, Text} from 'components';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Menu09 = React.memo(() => {
  const theme = useTheme();
  const {dispatch} = useNavigation();
  const {width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeButton, setActiveButton] = React.useState(0);
  const Screen = () => {
    return (
      <Container style={styles.containerScreen}>
        <TopNavigation
          appearance="control"
          accessoryLeft={
            <NavigationAction
              backgroundColor={theme['background-basic-color-1']}
              style={{borderRadius:99}}
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
  const drawerContent = (props: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView
        {...props}
        horizontal
        scrollEnabled={false}
        style={[styles.content, {marginBottom: bottom + 8}]}>
        <Layout
          style={{
            ...styles.layoutDrawer,
            width: width - 72,
            marginTop: -top - 8,
          }}>
          <Input
            style={{...styles.input, marginTop: top + 8}}
            accessoryLeft={<Icon pack="assets" name="search" />}
            placeholder="Type something"
          />
          <View>
            {DATA.map((item, i) => {
              const isActive = activeButton === i;
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.button}
                  onPress={() => {
                    setActiveButton(i);
                  }}>
                  <View style={styles.layoutIcon}>
                    <Layout
                      style={{
                        backgroundColor: item.color,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        borderRadius: 16,
                        opacity: isActive ? 1 : 0.2,
                      }}
                    />
                    <Icon
                      pack="assets"
                      name={item.icon}
                      style={[
                        styles.icon,
                        {tintColor: item.color},
                        isActive && styles.activeIcon,
                      ]}
                    />
                  </View>
                  <Text category="t7-sb" marginLeft={16}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Button children="JOIN NOw" status="primary" />
        </Layout>
        <Layout style={{...styles.backdrop, marginTop: -top - 8}} level="1" />
        <NavigationAction
          style={styles.buttonCloseDrawer}
          onPress={() => {
            dispatch(DrawerActions.closeDrawer());
          }}
        />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      screenOptions={{
        overlayColor: 'transparent',
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: width,
          backgroundColor: 'transparent',
        },
      }}>
      <Drawer.Screen name="Screen" component={Screen} />
    </Drawer.Navigator>
  );
});

export default Menu09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  containerDrawer: {
    flex: 1,
    borderBottomRightRadius: 24,
  },
  buttonCloseDrawer: {
    alignSelf: 'flex-start',
    marginRight: 24,
  },
  layoutDrawer: {
    flex: 1,
    borderBottomRightRadius: 16,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  backdrop: {
    width: 22,
    opacity: 0.6,
    borderBottomRightRadius: 16,
    marginLeft: -12,
    marginBottom: 12,
  },
  button: {
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginBottom: 24,
  },
  layoutIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  activeIcon: {
    tintColor: 'text-white-color',
  },
  containerScreen: {
    flex: 1,
    backgroundColor: 'background-button-color-6',
  },
  openMenu: {
    marginTop: 80,
    marginHorizontal: 60,
  },
});
const DATA = [
  {
    id: '1',
    title: 'Home Page',
    icon: 'home',
    color: '#0084F4',
  },
  {
    id: '2',
    title: 'Shortcode',
    icon: 'short-code',
    color: '#00C48C',
  },
  {
    id: '3',
    title: 'Page',
    icon: 'page',
    color: '#FFA26B',
  },
  {
    id: '4',
    title: 'Features',
    icon: 'features',
    color: '#FF647C',
  },
  {
    id: '5',
    title: 'Portfolios',
    icon: 'portfolios',
    color: '#FFCF5C',
  },
  {
    id: '6',
    title: 'Extra Shop',
    icon: 'extra-shop',
    color: '#4B66EA',
  },
];
