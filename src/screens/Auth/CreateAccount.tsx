import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Avatar,
  Input,
  RadioGroup,
  Radio,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text, VStack} from 'components';
import {DATA_USER} from 'constants/data';

const CreateAccount = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.contentContainer}>
        <View
          style={{
            height: 160 * (height / 812),
            backgroundColor: theme['text-danger-color'],
            ...styles.topNavigation,
            zIndex: -100,
            paddingTop: top + 12,
          }}>
          <HStack itemsCenter ml={16} justify="flex-start">
            <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
              <Icon pack="assets" name="arrow-left" style={styles.iconNav} />
            </TouchableOpacity>
            <Text status="white" uppercase category="t7-sb" marginLeft={8}>
              Create Account
            </Text>
          </HStack>
        </View>
        <Avatar
          source={{uri: DATA_USER[0].avatar.path}}
          size={'large'}
          //@ts-ignore
          style={styles.avatar}
        />
        <HStack mh={16}>
          <Input
            label="FIRST NAME"
            placeholder={'First name'}
            status="primary"
            style={styles.inputName}
          />
          <Input
            label="LAST NAME"
            placeholder={'First name'}
            status="primary"
            style={styles.inputName}
          />
        </HStack>
        <VStack mh={24}>
          <Text category="label" uppercase>
            Gender
          </Text>
          <RadioGroup
            style={styles.radioGroup}
            selectedIndex={selectedIndex}
            onChange={index => setSelectedIndex(index)}>
            <Radio>MALE</Radio>
            <Radio>FEMALE</Radio>
            <Radio>OTHER</Radio>
          </RadioGroup>
          <Input
            label="PHONE NUMBER"
            placeholder={'+84'}
            status="primary"
            style={styles.input}
          />
          <Input
            label="ADDRESS"
            placeholder={'Your Address'}
            status="primary"
            style={styles.input}
          />
          <Input
            label="BIO"
            placeholder={'Enter Your Bio'}
            status="primary"
            style={styles.input}
          />
        </VStack>
      </Content>
      <Button
        children="SIGN UP"
        status="primary"
        style={styles.button}
        onPress={goBack}
      />
    </Container>
  );
});

export default CreateAccount;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  topNavigation: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  iconNav: {
    tintColor: 'text-white-color',
  },
  avatar: {
    borderWidth: 4,
    borderColor: 'text-primary-color',
    marginTop: -40,
    alignSelf: 'center',
  },
  contentContainer: {
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  inputName: {
    flex: 1,
    borderRightWidth: 0,
    borderRadius: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  input: {
    borderRadius: 8,
    marginRight: 80,
    marginTop: 16,
  },
  button: {
    marginHorizontal: 40,
  },
});
