import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, Text} from 'components';
import {Images} from 'assets/images';

const ForgotPassword = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const email = 'timistudio9999@gmail.com';
  const phoneNumber = '+84982468213';
  return (
    <Container>
      <TopNavigation
        accessoryLeft={<Icon name={'logo'} pack="assets" style={styles.logo} />}
        accessoryRight={
          <TouchableOpacity style={styles.buttonClose} onPress={goBack}>
            <Icon pack="assets" name="close" />
          </TouchableOpacity>
        }
      />

      <Content contentContainerStyle={styles.contentContainer}>
        <Image
          source={Images.auth['forgot-password']}
          //@ts-ignore
          style={styles.img}
        />
        <Text category="t3-sb" marginBottom={8} center>
          Forgot Password?
        </Text>
        <Text category="t7" center marginBottom={40}>
          Do not worry! We will help you recover your password 🔑
        </Text>
        <Layout style={styles.card} level="2">
          <Text category="label">Send Your Email ✉️</Text>
          <Text
            category="s1"
            status="placeholder"
            marginTop={8}
            marginBottom={4}>
            We will send new password your email:
          </Text>
          <Text category="s1">
            {email.slice(0, 5) + email.slice(8).replace(/.(?=...)/g, '*')}
          </Text>
        </Layout>
        <Layout style={styles.card} level="2">
          <Text category="label">Send Your Phone Number 📲</Text>
          <Text
            category="s1"
            status="placeholder"
            marginTop={8}
            marginBottom={4}>
            We will send new password your phone:
          </Text>
          <Text category="s1">
            {phoneNumber.slice(0, 5) +
              phoneNumber.slice(5).replace(/.(?=...)/g, '*')}
          </Text>
        </Layout>
      </Content>
      <Text onPress={goBack} status="info" center category="label">
        Don’t Have Account? Sign UP
      </Text>
    </Container>
  );
});

export default ForgotPassword;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 32,
  },
  buttonClose: {
    borderRadius: 99,
    width: 32,
    height: 32,
    backgroundColor: 'text-danger-color',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  logo: {
    width: 32,
    height: 32,
    marginLeft: 16,
  },
  img: {
    alignSelf: 'center',
    marginBottom: 32,
  },
  card: {
    borderRadius: 6,
    padding: 24,
    marginBottom: 24,
  },
});
