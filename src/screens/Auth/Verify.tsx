import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import {Images} from 'assets/images';
import InputCodeOtp from './elements/InputCodeOtp';

const Verify = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);
  const [code, setCode] = React.useState('');

  return (
    <Container>
      <TopNavigation
        accessoryLeft={
          <HStack>
            <TouchableOpacity onPress={goBack}>
              <Icon name="arrow-left" pack="assets" />
            </TouchableOpacity>
            <Icon pack="assets" name="logo" />
          </HStack>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.auth.verify}
          // @ts-ignore
          style={styles.img}
        />
        <Text category="t3-sb" marginTop={16} marginBottom={8}>
          Verify Email!
        </Text>
        <Text category="t7" lineHeight={24}>
          Please enter the number code send your email xxx@company.com ✉️
        </Text>
        <InputCodeOtp
          style={styles.enterCode}
          {...{code, setCode}}
          codeLength={5}
          autoFocus
        />
        <Button children={'CONFIRM'} status="primary" onPress={goBack} />
        <Text category="label" status="info" center marginTop={24}>
          Resend Code!
        </Text>
      </Content>
      <Text category="label" status="info" center onPress={goBack}>
        Change Your Mail!
      </Text>
    </Container>
  );
});

export default Verify;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  img: {
    alignSelf: 'center',
  },
  content: {
    marginHorizontal: 40,
  },
  enterCode: {
    marginVertical: 32,
  },
});
