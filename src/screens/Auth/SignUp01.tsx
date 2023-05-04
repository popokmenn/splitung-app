import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  Input,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import ProgressStep from './elements/ProgressStep';
import {Images} from 'assets/images';

const SignUp01 = React.memo(() => {
  const {goBack} = useNavigation();
  const {bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const DATA = Array.from(Array(6).keys()).slice(0);
  const [activeIndex, setActiveIndex] = React.useState(3);

  return (
    <Container style={styles.container}>
      <HStack mh={16}>
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.7}
          style={styles.buttonBack}>
          <Icon pack="assets" name="arrow-left" />
        </TouchableOpacity>
        <ProgressStep tabs={DATA} activeStep={activeIndex} />
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.7}
          style={styles.buttonBack}>
          <Icon pack="assets" name="arrow-right" />
        </TouchableOpacity>
      </HStack>
      <Text status="brown" category="t7-sb" center marginTop={12}>
        Step <Text category="t7-b">03</Text>/06
      </Text>
      <Content>
        <Image
          source={Images.auth['sign-in-04']}
          //@ts-ignore
          style={styles.img}
        />
        <Text category="t3-sb" center marginBottom={8}>
          Phone Number
        </Text>
        <Text category="t7" center>
          Business Cards Does Your Business Information Stick
        </Text>
      </Content>
      <Layout
        level="5"
        style={[
          styles.layout,
          {
            paddingBottom: bottom + 40,
          },
        ]}>
        <Input placeholder="(+84)" style={styles.input} />
        <Button children={'CONTINUE'} status="primary" onPress={goBack} />
      </Layout>
    </Container>
  );
});

export default SignUp01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  buttonBack: {},
  img: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 32,
  },
  layout: {
    padding: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  input: {
    marginBottom: 24,
  },
});
