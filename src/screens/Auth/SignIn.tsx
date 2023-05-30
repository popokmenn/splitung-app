import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text, VStack} from 'components';
import {Icons} from 'assets/icons';
import {navigate, navigationRef} from 'navigation/RootNavigation';
import { _login } from './service/auth';
import { _storeJwtInLocalStorage } from 'utils/jwt';

const SignIn02 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });
  const login = async () => {
    const res = await _login(loginData);
    if (res.status === 200) {
      _storeJwtInLocalStorage(res.data.token)
      navigate('Dashboard')
      navigationRef.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      });
    }
  };

  return (
    <Container>
      <Content>
        <HStack ml={40} mt={150}>
          <VStack>
            <Image
              source={Icons.splitung}
              //@ts-ignore
              style={styles.logo}
            />
            <Text category="t2-sb">Welcome</Text>
            <Text category="t3" marginBottom={24}>
              to Splitung
            </Text>
          </VStack>
        </HStack>
        <VStack mh={40}>
          <Input
            onChangeText={i => setLoginData({...loginData, email: i})}
            placeholder="Email"
            value={loginData.email}
            keyboardType='email-address'
            status="primary"
            style={styles.input}
          />
          <Input
            onChangeText={i => setLoginData({...loginData, password: i})}
            placeholder="Password"
            value={loginData.password}
            status="primary"
            style={styles.input}
            secureTextEntry={secureTextEntry}
            accessoryRight={
              <TouchableOpacity
                onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <Icon
                  pack="assets"
                  name={secureTextEntry ? 'eye' : 'close-eye'}
                  style={styles.icon}
                />
              </TouchableOpacity>
            }
          />
        </VStack>
        <HStack mt={8}>
          <Button
            disabled={loginData.password.length < 3 || loginData.email.length < 3}
            children={'SIGN IN'}
            style={styles.buttonSignIn}
            status="primary"
            onPress={() => login()}
          />
          <TouchableOpacity style={styles.buttonFaceid}>
            <Icon pack="assets" name="face-id" style={styles.iconFaceid} />
          </TouchableOpacity>
        </HStack>
        <Text
          category="s1-sb"
          onPress={goBack}
          center
          status="info"
          marginVertical={24}>
          Forgot password?
        </Text>
      </Content>
      <TouchableOpacity onPress={() => navigate('CreateAccount')}>
        <Text category="s1-sb" status="info" center>
          Don’t Have Account? Sign Up
        </Text>
      </TouchableOpacity>
    </Container>
  );
});

export default SignIn02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  background: {
    alignSelf: 'flex-end',
  },
  logo: {
    width: 68,
    height: 48,
    objectFit: 'cover',
  },
  input: {
    flex: 1,
    marginBottom: 16,
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: 'text-basic-color',
  },
  iconFaceid: {
    width: 24,
    height: 24,
  },
  buttonFaceid: {
    backgroundColor: 'background-basic-color-5',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
  },
  buttonSignIn: {
    flex: 1,
    marginLeft: 40,
    marginRight: 20,
  },
  divider: {
    width: 120,
  },
  buttonSubmit: {
    flex: 1,
    marginHorizontal: 40,
    marginBottom: 24,
  },
});
