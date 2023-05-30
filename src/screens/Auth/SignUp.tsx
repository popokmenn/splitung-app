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
import {navigate} from 'navigation/RootNavigation';
import {_register} from './service/auth';

const SignUp = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [registerData, setRegisterData] = React.useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  const reg = async () => {
    const res = await _register(registerData);
    if (!res.isError) {
      setRegisterData({
        username: '',
        password: '',
        email: '',
        phone: '',
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
            <Text category="t2-sb">Register</Text>
            <Text category="t3" marginBottom={24}>
              to Splitung
            </Text>
          </VStack>
        </HStack>
        <VStack mh={40}>
          <Input
            onChangeText={i => setRegisterData({...registerData, email: i})}
            placeholder="Email"
            status="primary"
            keyboardType="email-address"
            style={styles.input}
            value={registerData.email}
          />
          <Input
            onChangeText={i => setRegisterData({...registerData, phone: i})}
            placeholder="Phone"
            status="primary"
            keyboardType="phone-pad"
            style={styles.input}
            value={registerData.phone}
          />
          <Input
            onChangeText={i => setRegisterData({...registerData, username: i})}
            placeholder="Username"
            status="primary"
            style={styles.input}
            value={registerData.username}
          />
          <Input
            placeholder="Password"
            status="primary"
            style={styles.input}
            onChangeText={i => setRegisterData({...registerData, password: i})}
            secureTextEntry={secureTextEntry}
            value={registerData.password}
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
            children={'SIGN UP'}
            style={styles.buttonSignIn}
            status="primary"
            onPress={() => {
              reg();
            }}
          />
        </HStack>
      </Content>
      <TouchableOpacity onPress={() => navigate('SignIn')}>
        <Text category="s1-sb" status="info" center>
          Already Have Account? Sign In
        </Text>
      </TouchableOpacity>
    </Container>
  );
});

export default SignUp;

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
