import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
  Avatar,
  Button,
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

const Profile02 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const DATA_USER = [
    Images.avatar['avatar-03'],
    Images.avatar['avatar-04'],
    Images.avatar['avatar-05'],
    Images.avatar['avatar-06'],
    Images.avatar['avatar-07'],
    Images.avatar['avatar-08'],
  ];
  const DATA_CARD = [
    {
      label: 'Illustration Collection #2',
      image: Images.profile['card-01'],
      color: '#0084F4',
    },
    {
      label: 'Illustration Collection #2',
      image: Images.profile['card-02'],
      color: '#FFA26B',
    },
    {
      label: 'Illustration Collection #2',
      image: Images.profile['card-03'],
      color: '#00C48C',
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        accessoryLeft={<NavigationAction icon="arrow-left" />}
        accessoryRight={
          <TouchableOpacity style={styles.buttonNotification}>
            <Icon
              pack="assets"
              name="notification"
              style={styles.notification}
            />
            <Layout level="12" style={styles.notificationDot} />
          </TouchableOpacity>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Layout level="2" style={styles.information}>
          <VStack justify="center" itemsCenter>
            <Avatar source={Images.avatar['avatar-02']} size="72" />
            <Text category="t5-sb" marginTop={8}>
              Nannie Williams
            </Text>
            <Text category="s1" status="brown">
              Senior Maketer
            </Text>
          </VStack>
          <Button
            children={'Upgrade Premium'}
            size="small"
            status="info"
            style={styles.upgrade}
          />
          <HStack mh={24} mt={20}>
            <VStack>
              <Text category="t4-sb">3.890</Text>
              <Text category="s2" status="brown">
                Follower
              </Text>
            </VStack>
            <VStack>
              <Text category="t4-sb">290</Text>
              <Text category="s2" status="brown">
                Project
              </Text>
            </VStack>
            <VStack>
              <Text category="t4-sb">10.890</Text>
              <Text category="s2" status="brown">
                Loves
              </Text>
            </VStack>
          </HStack>
        </Layout>
        <Layout style={styles.layout} level="1">
          <Text uppercase category="t7" marginLeft={32}>
            Our Clients (24)
          </Text>
          <Content horizontal contentContainerStyle={styles.contentAvatar}>
            {DATA_USER.map((item, i) => {
              return (
                <Avatar
                  source={item}
                  key={i}
                  size="small"
                  style={{marginRight: 24}}
                />
              );
            })}
          </Content>
          <Text uppercase category="t7" marginLeft={32} marginBottom={24}>
            {'LATEST WORKS'}
          </Text>
          <Content horizontal contentContainerStyle={styles.contentCard}>
            {DATA_CARD.map((item, i) => {
              return (
                <View
                  style={[styles.card, {backgroundColor: item.color}]}
                  key={i}>
                  <Image source={item.image} />
                  <Text category="s1" status="white" marginTop={24}>
                    {item.label}
                  </Text>
                </View>
              );
            })}
          </Content>
        </Layout>
      </Content>
    </Container>
  );
});

export default Profile02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: 'transparent',
  },
  content: {
    backgroundColor: 'transparent',
  },
  information: {
    paddingBottom: 64,
  },
  notificationDot: {
    width: 7,
    height: 7,
    position: 'absolute',
    borderRadius: 99,
    right: 0,
    top: 0,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  notification: {
    width: 16,
    height: 16,
  },
  buttonNotification: {
    marginRight: 16,
  },
  upgrade: {
    alignSelf: 'center',
    marginTop: 16,
  },
  layout: {
    flex: 1,
    paddingTop: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
  },
  contentAvatar: {
    paddingLeft: 32,
    marginTop: 12,
    marginBottom: 32,
  },
  contentCard: {
    paddingLeft: 32,
  },
  card: {
    borderRadius: 24,
    width: 144,
    height: 229,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
});
