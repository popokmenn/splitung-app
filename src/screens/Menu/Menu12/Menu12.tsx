import * as React from 'react';
import {TouchableOpacity} from 'react-native';
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
  Content,
  FocusAwareStatusBar,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {DATA_USER} from 'constants/data';

const Drawer = createDrawerNavigator();

const Menu12 = React.memo(() => {
  const theme = useTheme();
  const {goBack, dispatch} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
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
  const ButtonDrawer = ({
    title,
    number,
    onPress,
  }: {
    title: string;
    number?: number;
    onPress?(): void;
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.buttonDrawer}>
        <Text status="white" category="s1-sb">
          {title}
        </Text>
        {number && (
          <Layout style={styles.iconNumber} level="9">
            <Text status="white" category="s1-b">
              {number}
            </Text>
          </Layout>
        )}
      </TouchableOpacity>
    );
  };
  const contentDrawer = (props: DrawerContentComponentProps) => {
    return (
      <HStack>
        <VStack
          level="6"
          pt={top + 8}
          ph={24}
          pb={bottom + 12}
          style={{height: height}}>
          <VStack>
            <Avatar source={{uri: DATA_USER[0].avatar.path}} size="small" />
            <Text status="white" category="s1-b" marginTop={12}>
              William Dennis
            </Text>
            <Text status="placeholder" category="s2-b" marginTop={4}>
              Balance: $128.0.0
            </Text>
          </VStack>
          <Divider style={styles.divider} />
          <ButtonDrawer title={'WOMEN'} />
          <ButtonDrawer title={'MEN'} />
          <ButtonDrawer title={'KIDS'} />
          <Divider style={styles.divider} />
          <ButtonDrawer title={'Cart'} number={3} />
          <ButtonDrawer title={'Wish list'} />
          <ButtonDrawer title={'Track Order'} />
          <ButtonDrawer title={'My Account'} />
          <ButtonDrawer title={'Term'} />
          <Divider style={styles.divider} />
          <ButtonDrawer title={'Sign Out'} />
        </VStack>
        <VStack style={{flex: 1}}>
          <Layout level="12" style={{flex: 0.4, alignItems: 'flex-end'}}>
            <NavigationAction
              marginTop={top + 12}
              backgroundColor={theme['background-basic-color-1']}
              style={{borderRadius:99}}
            />
          </Layout>
          <Layout level="10" style={{flex: 1}}>
            {DATA.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  activeOpacity={0.7}
                  style={styles.buttonCategory}>
                  <Text category="s1-sb" status="white">
                    {item.title}
                  </Text>
                  <Text category="s2-sb" status="white" opacity={0.5}>
                    {item.amount}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </Layout>
        </VStack>
      </HStack>
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={contentDrawer}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: width, height: height, backgroundColor: 'yellow'},
      }}>
      <Drawer.Screen name="Screen" component={Screen} />
    </Drawer.Navigator>
  );
});

export default Menu12;

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
  contentDrawer: {
    flex: 1,
  },
  divider: {
    marginVertical: 32,
    width: 48,
  },
  iconNumber: {
    width: 24,
    height: 24,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDrawer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
const DATA = [
  {title: 'Bags', amount: 120},
  {title: 'Back Pack', amount: 34},
  {title: 'Coat', amount: 102},
  {title: 'Dress', amount: 130},
  {title: 'Jean', amount: 90},
  {title: 'Jacket', amount: 30},
  {title: 'Hats', amount: 14},
  {title: 'T-shirt', amount: 103},
  {title: 'Underwear', amount: 120},
  {title: 'Accessories', amount: 110},
];
