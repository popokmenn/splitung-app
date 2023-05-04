import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  Button,
  Divider,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text, VStack} from 'components';
import {Images} from 'assets/images';
import {Icons} from 'assets/icons';

const SignIn02 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  return (
    <Container>
      <Content>
        <HStack ml={40}>
          <VStack>
            <Image
              source={Icons.logo}
              //@ts-ignore
              style={styles.logo}
            />
            <Text category="t1-sb" marginTop={32}>
              Welcome
            </Text>
          </VStack>
          <Image
            source={Images.auth['sign-in-02']}
            //@ts-ignore
            style={styles.background}
          />
        </HStack>
        <VStack mh={40}>
          <Text category="t3" marginBottom={24}>
            to Claka
          </Text>
          <Input placeholder="Username" status="primary" style={styles.input} />
          <Input
            placeholder="Password"
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
            children={'SIGN IN'}
            style={styles.buttonSignIn}
            status="primary"
            onPress={goBack}
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
        <HStack itemsCenter mh={40} mb={24}>
          <Divider style={styles.divider} />
          <Text>or</Text>
          <Divider style={styles.divider} />
        </HStack>
        <Button
          children={'SIGN IN WITH FACEBOOK'}
          status="secondary"
          style={styles.buttonSubmit}
        />
        <Button
          children={'SIGN IN WITH GOOGLE'}
          status="danger"
          style={styles.buttonSubmit}
        />
      </Content>
      <Text category="s1-sb" status="info" center>
        Don’t Have Account? Sign UP
      </Text>
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
    width: 48,
    height: 48,
    marginTop: 48,
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
