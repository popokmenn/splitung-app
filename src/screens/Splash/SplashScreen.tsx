import React from 'react';
import {Image, StyleSheet, FlatList, ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {ButtonIndicator, Container, Text} from 'components';
import {Icons} from 'assets/icons';
import {Images} from 'assets/images';
import {navigate} from 'navigation/RootNavigation';

const SplashScreen = React.memo(() => {
  const {height, width} = useLayout();

  const [activeButton, setActiveButton] = React.useState(0);

  const DATA = [
    {
      title: 'Splitung',
      onPress: () => {
        navigate('Splitung');
      },
    },
    {
      title: 'Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs');
      },
    },
    {
      title: 'Sign In - Sign Up',
      onPress: () => {
        navigate('Auth');
      },
    },
    {
      title: 'Menu',
      onPress: () => {
        navigate('Menu');
      },
    },
    {
      title: 'Profile',
      onPress: () => {
        navigate('Profile');
      },
    },
    {
      title: 'News',
      onPress: () => {
        navigate('News');
      },
    },
    {
      title: 'Media',
      onPress: () => {
        navigate('Media');
      },
    },
    {
      title: 'Statics',
      onPress: () => {
        navigate('Statics');
      },
    },
  ];
  const ListHeaderComponent = () => {
    return (
      <>
        <Image source={Icons.logo} style={styles.image} />
        <Text center category="t7-b" marginVertical={16}>
          Welcome to Claka
        </Text>
      </>
    );
  };
  return (
    <Container style={styles.container}>
      <ImageBackground
        source={Images.introBackground}
        style={{width: width, height: height}}>
        <FlatList
          data={DATA}
          ListHeaderComponent={ListHeaderComponent}
          scrollEventThrottle={16}
          renderItem={({item, index}) => {
            return (
              <ButtonIndicator
                style={styles.button}
                active={index === activeButton}
                title={item.title}
                onPress={() => {
                  item.onPress();
                  setActiveButton(index);
                }}
              />
            );
          }}
        />
      </ImageBackground>
    </Container>
  );
});

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 8,
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 12,
  },
});
