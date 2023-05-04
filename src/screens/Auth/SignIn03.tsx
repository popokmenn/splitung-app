import * as React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
  Input,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import {Images} from 'assets/images';

const SignIn03 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={
          <HStack onPress={goBack}>
            <Icon pack="assets" name="arrow-left" />
            <Text category="t7">Sign in</Text>
          </HStack>
        }
        accessoryRight={<Icon pack="assets" name="logo" style={styles.logo} />}
      />
      <Content>
        <Image
          source={Images.auth['sign-in-03']}
          // @ts-ignore
          style={styles.image}
        />
        <Text category="t3-sb" center marginVertical={8}>
          Welcome back
        </Text>
        <Text category="t7" status="brown" center marginBottom={28}>
          Stu Unger Rise And Fall Of A Poker Genius
        </Text>
        <Layout style={styles.layout} level="7">
          <Input placeholder="Username" status="primary" style={styles.input} />
          <Input
            placeholder="Password"
            status="primary"
            style={styles.input}
            secureTextEntry={true}
          />
          <HStack itemsCenter mh={24} mt={24}>
            <Text category="s1" status="primary">
              Forgot Password?
            </Text>
            <Button children={'SIGN IN'} status="secondary" onPress={goBack} />
          </HStack>
        </Layout>
      </Content>
      <Text status="info" category="s1" center>
        Don’t Have Account? Sign UP
      </Text>
    </Container>
  );
});

export default SignIn03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  image: {
    alignSelf: 'center',
  },
  layout: {
    borderRadius: 16,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  input: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 24,
  },
});
