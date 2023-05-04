import * as React from 'react';
import {TouchableOpacity} from 'react-native';
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

const Profile10 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(3);
  const DATA = [
    {
      title: 'Notification',
      icon: 'notification',
      label: 'Enable',
      color: '#0F4C81',
    },
    {
      title: 'My Orders',
      icon: 'order',
      label: '3 Waiting',
      color: '#0084F4',
    },
    {
      title: 'Address Shipping',
      icon: 'location',
      label: '2 Address',
      color: '#00C48C',
    },
    {
      title: 'Payments',
      icon: 'credit-card',
      label: 'Add to card or bank',
      color: '#FFA26B',
    },
    {
      title: 'Wishlist',
      icon: 'wishlist',
      label: '3 Product items',
      color: '#FF647C',
    },
  ];
  const DATA_BOTTOM_BAR = [
    {
      icon: 'searchBottom',
    },
    {
      icon: 'filter',
    },
    {
      icon: 'heart',
    },
    {
      icon: 'profile',
    },
  ];
  return (
    <Container style={styles.container} level="2" useSafeArea={false}>
      <TopNavigation
        style={[styles.topNavigation, {paddingTop: top + 8}]}
        accessoryLeft={
          <HStack>
            <NavigationAction icon="more" />
            <Text category="t3" marginTop={4}>
              Profile
            </Text>
          </HStack>
        }
        accessoryRight={<NavigationAction icon="option" />}
      />
      <Content level="2" contentContainerStyle={styles.content}>
        <HStack level="1" style={styles.card} itemsCenter>
          <HStack justify="flex-start">
            <Avatar source={Images.avatar['avatar-05']} size="medium" />
            <VStack justify="center" ml={16}>
              <Text category="t5-sb" marginBottom={8}>
                Gordon Rivera
              </Text>
              <Text category="t7">Balance: $330.00</Text>
            </VStack>
          </HStack>
          <Icon pack="assets" name="arrow-right" />
        </HStack>
        {DATA.map((item, i) => {
          return (
            <HStack key={i} style={styles.item} itemsCenter>
              <HStack justify="flex-start">
                <Layout
                  style={[styles.layoutIcon, {backgroundColor: item.color}]}>
                  <Icon pack="assets" name={item.icon} style={styles.icon} />
                </Layout>
                <VStack justify="center" ml={16}>
                  <Text category="t7-b">{item.title}</Text>
                  <Text category="s1">{item.label}</Text>
                </VStack>
              </HStack>
              <Icon pack="assets" name="arrow-right" />
            </HStack>
          );
        })}
      </Content>
      <Layout style={[styles.bottomBar, {paddingBottom: bottom + 16}]}>
        {DATA_BOTTOM_BAR.map((item, i) => {
          return (
            <TouchableOpacity onPress={() => setActiveIndex(i)}>
              <Icon
                pack="assets"
                name={item.icon}
                style={[
                  styles.iconInactive,
                  activeIndex === i && styles.iconActive,
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </Layout>
    </Container>
  );
});

export default Profile10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  content: {
    padding: 24,
  },
  card: {
    borderRadius: 16,
    padding: 16,
  },
  item: {
    marginTop: 32,
  },
  icon: {
    tintColor: 'text-white-color',
    width: 24,
    height: 24,
  },
  layoutIcon: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  bottomBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  iconActive: {
    tintColor: 'text-info-color',
    width: 24,
    height: 24,
  },
  iconInactive: {
    tintColor: '#ABA4AC',
    width: 24,
    height: 24,
  },
});
