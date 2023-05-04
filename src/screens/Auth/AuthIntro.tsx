import * as React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, Text} from 'components';
import {AuthStackParamList} from 'navigation/types';

interface IAuthIntroProps {
  screen: keyof AuthStackParamList;
}

const AuthIntro = React.memo(() => {
  const theme = useTheme();
  const {goBack, navigate} =
    useNavigation<NavigationProp<AuthStackParamList>>();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const DATA: IAuthIntroProps[] = [
    {
      screen: 'SignIn01',
    },
    {
      screen: 'SignIn02',
    },
    {
      screen: 'SignIn03',
    },
    {
      screen: 'SignUp01',
    },
    {
      screen: 'SignUp02',
    },
    {
      screen: 'SignUp03',
    },
    {
      screen: 'CreateAccount',
    },
    {
      screen: 'ForgotPassword',
    },
    {
      screen: 'KYC',
    },
    {
      screen: 'SetupInterest',
    },
    {
      screen: 'Verify',
    },
  ];
  return (
    <Container>
      <TopNavigation
        title={'Sign in - Sign up'}
        accessoryLeft={
          <TopNavigationAction
            onPress={goBack}
            icon={<Icon pack="assets" name="arrow-back" />}
          />
        }
        style={styles.topNavigation}
      />
      <FlatList
        data={DATA}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => {
          return (
            <Button
              children={item.screen}
              style={styles.button}
              onPress={() => {
                navigate(item.screen);
              }}
            />
          );
        }}
      />
    </Container>
  );
});

export default AuthIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  topNavigation: {
    marginBottom: 12,
  },
  button: {
    marginBottom: 12,
  },
});
