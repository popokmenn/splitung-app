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
  Icon,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, NavigationAction, VStack} from 'components';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import DrawerTab from './DrawerTab';

const Drawer = createDrawerNavigator();
const Menu10 = React.memo(() => {
  const theme = useTheme();
  const {dispatch} = useNavigation();
  const {width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeButton, setActiveButton] = React.useState(1);
  const Screen = () => {
    return (
      <Container style={styles.containerScreen}>
        <TopNavigation
          appearance="control"
          accessoryLeft={
            <NavigationAction
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

  const renderContent = () => {
    switch (activeButton) {
      case 0:
        return <DrawerTab data={DATA_OPTION_2} />;
      case 1:
        return <DrawerTab data={DATA_OPTION_1} />;
      case 2:
        return <DrawerTab data={DATA_OPTION_2} />;
      case 3:
        return <DrawerTab data={DATA_OPTION_1} />;
      case 4:
        return <DrawerTab data={DATA_OPTION_2} />;
      case 5:
        return <DrawerTab data={DATA_OPTION_2} />;

      default:
        return <></>;
    }
  };
  const drawerContent = (props: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView
        {...props}
        horizontal
        scrollEnabled={false}
        style={styles.content}>
        <Layout
          style={{
            ...styles.layoutDrawer,
            width: width - 64,
          }}>
          <VStack>
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
                          opacity: isActive ? 1 : 0.15,
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
                  </TouchableOpacity>
                );
              })}
            </View>
            <View>
              <Icon pack="assets" name="fb" style={styles.socialIcon} />
              <Icon pack="assets" name="google" style={styles.socialIcon} />
              <Icon pack="assets" name="twitter" style={styles.socialIcon} />
              <Icon pack="assets" name="instagram" style={styles.socialIcon} />
            </View>
          </VStack>
          <View style={{width: 247 * (width / 375), height: '100%', flex: 1}}>
            {renderContent()}
          </View>
        </Layout>
        <Button
          accessoryLeft={() => (
            <Icon
              pack="assets"
              name="arrow_right"
              style={[styles.activeIcon, styles.icon]}
            />
          )}
          status="primary"
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

export default Menu10;

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
  },
  buttonCloseDrawer: {
    alignSelf: 'flex-start',
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  layoutDrawer: {
    flex: 1,
    paddingBottom: 32,
    paddingTop: 24,
    flexDirection: 'row',
  },
  button: {
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
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
    marginHorizontal: 80,
  },
  socialIcon: {
    tintColor: 'text-brown-color',
    width: 24,
    height: 24,
    marginHorizontal: 24,
    marginVertical: 12,
  },
});
const DATA_OPTION_1 = [
  {title: 'Walkthroughs', number: 10},
  {title: 'Sign In & Sign Up', number: 10},
  {title: 'Navigation', number: 12},
  {title: 'Profile', number: 10},
  {title: 'Socials', number: 10},
  {title: 'Multimedia', number: 10},
  {title: 'Ecommerce', number: 10},
  {title: 'Statics', number: 12},
];
const DATA_OPTION_2 = [
  {title: 'Splash', number: 10},
  {title: 'Intro', number: 10},
  {title: 'Message', number: 12},
  {title: 'Home Page', number: 10},
  {title: 'Settings', number: 10},
];
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
