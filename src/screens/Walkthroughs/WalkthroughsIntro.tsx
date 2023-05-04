import React from 'react';
import {Image, StyleSheet, FlatList, ImageBackground} from 'react-native';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';

import {ButtonIndicator, Container} from 'components';
import {navigate} from 'navigation/RootNavigation';
import {Images} from 'assets/images';
import {Icons} from 'assets/icons';

const WalkthroughsIntro = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();

  const [activeButton, setActiveButton] = React.useState(0);

  const DATA = [
    {
      title: '01_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs01');
      },
    },
    {
      title: '02_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs02');
      },
    },
    {
      title: '03_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs03');
      },
    },
    {
      title: '04_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs04');
      },
    },
    {
      title: '05_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs05');
      },
    },
    {
      title: '06_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs06');
      },
    },
    {
      title: '07_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs07');
      },
    },
    {
      title: '08_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs08');
      },
    },
    {
      title: '09_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs09');
      },
    },
    {
      title: '10_Walkthroughs',
      onPress: () => {
        navigate('Walkthroughs10');
      },
    },
  ];
  const ListHeaderComponent = () => {
    return (
      <>
        <Image source={Icons.logo} style={styles.logo} />
      </>
    );
  };
  return (
    <Container>
      <ImageBackground
        source={Images.introBackground}
        style={{width: width, height: height}}>
        <TopNavigation
          accessoryLeft={
            <TopNavigationAction
              onPress={goBack}
              icon={<Icon pack="assets" name="arrow-back" />}
            />
          }
        />
        <FlatList
          data={DATA}
          scrollEventThrottle={16}
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={styles.contentContainer}
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

export default WalkthroughsIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingLeft: 48,
    paddingRight: 32,
    paddingBottom: 40,
  },
  button: {
    marginBottom: 12,
  },
  logo: {
    width: 48,
    height: 48,
    marginBottom: 12,
  },
});
