import * as React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
  Input,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text, VStack} from 'components';
import {Images} from 'assets/images';

const SignUp02 = React.memo(() => {
  const {goBack} = useNavigation();
  const {top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Content>
        <Layout level="9" style={[styles.layout, {paddingTop: top + 8}]}>
          <TopNavigation
            appearance="control"
            accessoryLeft={
              <HStack itemsCenter>
                <Icon pack="assets" name="arrow-left" style={styles.iconBack} />
                <Text status="primary" marginLeft={4} category="t7">
                  SIGN UP
                </Text>
              </HStack>
            }
          />
          <Image
            source={Images.auth['sign-up-01']}
            // @ts-ignore
            style={styles.img}
          />
        </Layout>
        <VStack mh={40} mt={20}>
          <Text category="t3-sb" marginBottom={8}>
            Sign Up to Claka
          </Text>
          <Text category="t7" marginBottom={32}>
            Business Cards Does Your Business Information Stick
          </Text>
          <Input placeholder="Username" style={styles.input} />
          <Input placeholder="Email" style={styles.input} />
          <Input placeholder="Password" style={styles.input} />
          <Input placeholder="Re-Password" style={styles.input} />
          <Button
            children={'SIGN UP'}
            onPress={goBack}
            status="primary"
            style={styles.buttonSubmit}
          />
        </VStack>
      </Content>
    </Container>
  );
});

export default SignUp02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  layout: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  iconBack: {
    width: 16,
    height: 16,
    tintColor: 'text-primary-color',
  },
  img: {
    alignSelf: 'center',
    marginBottom: -4,
  },
  input: {
    marginBottom: 16,
  },
  buttonSubmit: {
    marginTop: 16,
  },
});
