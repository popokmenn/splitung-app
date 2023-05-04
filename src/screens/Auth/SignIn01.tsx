import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  StyleService,
  useStyleSheet,
  ViewPager,
  Button,
  Divider,
  Input,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import TabBar from './elements/TabBar';
import {Icons} from 'assets/icons';

const SignIn01 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const SignInTab = () => {
    return (
      <View style={styles.containerTab}>
        <Text category="t3-sb" marginHorizontal={40} marginBottom={4}>
          Welcome to Claka!
        </Text>
        <Text category="t7" marginHorizontal={40}>
          Business Cards Does Your Business Information Stick
        </Text>
        <HStack mh={32} mv={24}>
          <Button
            children={'FACEBOOK'}
            status="secondary"
            style={styles.button}
            onPress={goBack}
          />
          <Button
            children={'GOOGLE'}
            status="danger"
            style={styles.button}
            onPress={goBack}
          />
        </HStack>
        <HStack itemsCenter mh={40} mb={24}>
          <Divider style={styles.divider} />
          <Text>or</Text>
          <Divider style={styles.divider} />
        </HStack>
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
        <Button
          onPress={goBack}
          children={'SIGN IN'}
          status="primary"
          style={styles.buttonSubmit}
        />
      </View>
    );
  };
  const SignUpTab = () => {
    return (
      <View style={styles.containerTab}>
        <Text category="t3-sb" marginHorizontal={40} marginBottom={4}>
          Welcome to Claka!
        </Text>
        <Text category="t7" marginHorizontal={40}>
          Business Cards Does Your Business Information Stick
        </Text>
        <HStack mh={32} mv={24}>
          <Button
            children={'FACEBOOK'}
            status="secondary"
            style={styles.button}
          />
          <Button children={'GOOGLE'} status="danger" style={styles.button} />
        </HStack>
        <HStack itemsCenter mh={40} mb={24}>
          <Divider style={styles.divider} />
          <Text>or</Text>
          <Divider style={styles.divider} />
        </HStack>
        <Input placeholder="Username" status="primary" style={styles.input} />
        <Input placeholder="Password" status="primary" style={styles.input} />
        <Button
          children={'SIGN IN'}
          status="primary"
          style={styles.buttonSubmit}
        />
      </View>
    );
  };
  return (
    <Container style={styles.container}>
      <Image source={Icons.logo}
      // @ts-ignore
      style={styles.logo} />
      <TabBar
        tabs={['Sign In', 'Sign Up']}
        selectedIndex={activeIndex}
        setSelectedIndex={setActiveIndex}
      />
      <Content style={styles.content}>
        <ViewPager selectedIndex={activeIndex} onSelect={setActiveIndex}>
          <SignInTab />
          <SignUpTab />
        </ViewPager>
      </Content>
      {activeIndex === 0 && (
        <Text uppercase category="s1-sb" center status="info">
          Forgot Password?
        </Text>
      )}
    </Container>
  );
});

export default SignIn01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
    marginLeft: 40,
    marginTop: 12,
    marginBottom: 32,
  },
  containerTab: {
    flex: 1,
    paddingTop: 24,
  },
  button: {
    flex: 1,
    marginHorizontal: 6,
  },
  content: {},
  divider: {
    width: 120,
  },
  input: {
    marginBottom: 16,
    marginHorizontal: 40,
  },
  buttonSubmit: {
    marginHorizontal: 40,
    marginTop: 8,
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: 'text-basic-color',
  },
});
