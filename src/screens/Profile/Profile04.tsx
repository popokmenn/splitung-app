import * as React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  Icon,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';

const Profile04 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const heightImg = 224 * (height / 812);
  return (
    <Container style={styles.container} level="1">
      <Layout style={styles.background} level="10">
        <ImageBackground
          source={Images.profile['bg-04']}
          style={{width: width - 48, height: heightImg}}
        />
      </Layout>
      <TopNavigation
        appearance="control"
        accessoryLeft={<NavigationAction icon="search" status="white" />}
        accessoryRight={<NavigationAction icon="option" status="white" />}
      />
      <Content style={[styles.content, {marginTop: heightImg / 2 + 24}]} >
        <VStack itemsCenter mb={16}>
          <Avatar source={Images.avatar['avatar-09']} size="large" />
          <Text category="t5-b" marginTop={8}>
            Mabelle Hamilton
          </Text>
          <Text category="s1-sb">Sr. Speaker</Text>
        </VStack>
        <HStack mb={24} mh={width / 4}>
          <TouchableOpacity style={styles.button}>
            <Icon pack="assets" name="phone" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon pack="assets" name="warning-mess" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon pack="assets" name="information" style={styles.icon} />
          </TouchableOpacity>
        </HStack>
        <Layout
          style={[
            styles.layoutMap,
            {height: 110 * (height / 812), width: width - 64},
          ]}
          level="2">
          <Icon pack="assets" name="small-location" style={styles.icon} />
        </Layout>
        <VStack mh={32} mt={24}>
          <Text category="t5-sb" marginBottom={8}>
            About Me 👋
          </Text>
          <Text category="t7">
            Adwords Keyword research for beginners When you embark on your first
            PPC journey, you need to keep a small number of keywords at first.
            Keyword lists that are thousands of words long should be
          </Text>
        </VStack>
      </Content>
    </Container>
  );
});

export default Profile04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  background: {
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  content: {
    backgroundColor: 'transparent',
  },
  button: {
    borderRadius: 16,
    width: 40,
    height: 40,
    backgroundColor: '#F7F8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  layoutMap: {
    marginHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
