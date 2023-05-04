import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  Input,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import {Images} from 'assets/images';

const SignUp03 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} level="7">
      <HStack mh={16}>
        <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
          <Icon pack="assets" name="arrow-left" style={styles.icon} />
        </TouchableOpacity>
        <Icon pack="assets" name="logo" style={styles.logo} />
        <Text uppercase onPress={goBack} category="t7" status="primary">
          Sign In
        </Text>
      </HStack>

      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainer}>
        <Image
          source={Images.auth['sign-up-02']}
          style={{alignSelf: 'center', marginTop: 40, marginBottom: -4}}
        />
        <Layout style={styles.layout} level="1">
          <Text category="t1-sb">Join to Claka!</Text>
          <Text category="t5-sb" marginBottom={32}>
            Vacation Home Rental Success
          </Text>
          <Input
            placeholder="Username"
            style={styles.input}
            accessoryLeft={<Icon pack="assets" name="user" />}
          />
          <Input
            placeholder="Email"
            style={styles.input}
            accessoryLeft={<Icon pack="assets" name="email" />}
          />
          <Input
            placeholder="Password"
            style={styles.input}
            accessoryLeft={<Icon pack="assets" name="lock" />}
          />
          <Input
            placeholder="Re-Password"
            style={styles.input}
            accessoryLeft={<Icon pack="assets" name="lock" />}
          />
        </Layout>
      </Content>
    </Container>
  );
});

export default SignUp03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  icon: {
    tintColor: 'text-primary-color',
  },
  content: {
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flexGrow: 1,
  },
  layout: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 32,
  },
  input: {
    flex: 1,
    marginBottom: 16,
  },
  logo: {
    tintColor: 'text-primary-color',
    width: 32,
    height: 32,
    marginLeft: 24,
  },
});
