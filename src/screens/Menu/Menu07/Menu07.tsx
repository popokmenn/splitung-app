import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  FocusAwareStatusBar,
  NavigationAction,
  Text,
} from 'components';
import {Images} from 'assets/images';

const Menu07 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const BG = ['1', '5', '6'];
  const DATA = [
    {id: '1', title: 'HOME PAGE', icon: 'home-menu'},
    {id: '2', title: 'Portfolios', icon: 'portfolios'},
    {id: '3', title: 'Message', icon: 'message-menu', message: 9},
    {id: '4', title: 'profile', icon: 'profile-menu'},
    {id: '5', title: 'settings', icon: 'settings-menu'},
    {id: '6', title: 'logout', icon: 'logout-menu'},
  ];
  const scale = (index: number) => {
    switch (index) {
      case 0:
        return 1;
      case 1:
        return 0.9;
      case 2:
        return 0.8;
      default:
        return 1;
    }
  };
  return (
    <ImageBackground
      source={Images.menu.menu07}
      imageStyle={{width: width, height: height}}
      style={styles.background}>
      <Container style={styles.container}>
        <FocusAwareStatusBar barStyle={'light-content'} />
        <View style={styles.content}>
          {BG.map((item, index) => {
            return (
              <View
                style={{
                  backgroundColor: theme[`background-button-color-${item}`],
                  height: 430 * (height / 812),
                  width: width - 32,
                  position: 'absolute',
                  zIndex: index * -1,
                  transform: [{translateY: index * 36}, {scale: scale(index)}],
                  borderRadius: 16,
                  marginHorizontal: 16,
                }}
                key={index}
              />
            );
          })}
          {DATA.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.button, {width: width - 32}]}>
                <Icon pack="assets" name={item.icon} style={styles.icon} />
                <Text
                  category="s1-sb"
                  capitalize
                  status="white"
                  marginLeft={24}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{marginTop: 60}}>
          <NavigationAction
            backgroundColor={theme['background-basic-color-1']}
            style={styles.navigation}

          />
        </View>
      </Container>
    </ImageBackground>
  );
});

export default Menu07;

const themedStyles = StyleService.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    marginVertical: 40,
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 24,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-white-color',
  },
  navigation: {
    alignSelf: 'center',
    borderRadius:99
  },
});
