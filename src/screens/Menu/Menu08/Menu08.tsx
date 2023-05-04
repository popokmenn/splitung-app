import * as React from 'react';
import {
  Image,
  FlatList,
  ImageBackground,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, NavigationAction, Text} from 'components';
import {Icons} from 'assets/icons';
import {Images} from 'assets/images';

const Menu08 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const DATA = [
    {id: '1', title: 'HOME PAGE', icon: 'home-menu'},
    {id: '2', title: 'Portfolios', icon: 'portfolios'},
    {id: '3', title: 'Message', icon: 'message-menu', message: 9},
    {id: '4', title: 'profile', icon: 'profile-menu'},
    {id: '5', title: 'settings', icon: 'settings-menu'},
  ];

  const ButtonIndicator = ({
    active,
    style,
    title,
    onPress,
  }: {
    active: boolean;
    style?: StyleProp<ViewStyle>;
    title?: string;
    onPress?: () => void;
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.button}>
        <Text category="t4-b" uppercase status={active ? 'secondary' : 'basic'}>
          {title}
        </Text>
        {active && <Layout style={styles.indicator} level="5" />}
      </TouchableOpacity>
    );
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <ImageBackground
        source={Images.introBackground}
        style={{width: width, height: height}}>
        <>
          <TopNavigation
            style={{marginTop: top + 8}}
            accessoryLeft={
              <Image
                source={Icons.logo}
                //@ts-ignore
                style={styles.image}
              />
            }
            accessoryRight={<NavigationAction />}
          />
          <FlatList
            data={DATA}
            contentContainerStyle={styles.contentContainer}
            scrollEventThrottle={16}
            renderItem={({item, index}) => {
              return (
                <ButtonIndicator
                  style={styles.button}
                  active={index === activeIndex}
                  title={item.title}
                  onPress={() => {
                    setActiveIndex(index);
                  }}
                />
              );
            }}
          />
          <Text
            status="placeholder"
            category="t4"
            style={styles.logout}
            onPress={goBack}>
            Logout
          </Text>
        </>
      </ImageBackground>
    </Container>
  );
});

export default Menu08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  image: {
    marginLeft: 32,
    width: 48,
    height: 48,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginBottom: 20,
    paddingVertical: 6,
  },
  indicator: {
    height: 4,
    width: 32,
    borderRadius: 24,
  },
  contentContainer: {
    paddingHorizontal: 32,
    paddingTop: 60,
  },
  logout: {
    position: 'absolute',
    bottom: 48,
    left: 48,
    zIndex: 100,
  },
});
