import * as React from 'react';
import {Image, FlatList, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

import {Container, HStack, NavigationAction, Text, VStack} from 'components';
import {Images} from 'assets/images';

const Statics05 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeBottom, setActiveBottom] = React.useState(3);

  return (
    <Container style={styles.container} level="3" useSafeArea={false}>
      <TopNavigation
        style={[styles.header, {paddingTop: top + 8}]}
        accessoryLeft={
          <NavigationAction icon="option" status="white" size="medium" />
        }
        accessoryRight={
          <VStack>
            <NavigationAction
              icon="notification"
              status="white"
              size="medium"
            />
            <Layout level="12" style={styles.dot} />
          </VStack>
        }
      />
      <Layout level="5" style={styles.title}>
        <Text category="t3-sb" status="white">
          Claka Trade
        </Text>
      </Layout>
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({item}) => {
          return (
            <HStack
              level="1"
              border={16}
              mb={24}
              mh={24}
              padding={16}
              itemsCenter>
              <HStack>
                <Image source={item.logo} />
                <VStack ml={12}>
                  <Text category="t7-m" marginBottom={4}>
                    {item.name}
                  </Text>
                  <Text
                    category="s1"
                    status={item.positive ? 'success' : 'danger'}>
                    {item.amount}
                  </Text>
                </VStack>
              </HStack>
              <Image
                source={Images.static.graphic}
                style={{
                  tintColor: item.positive
                    ? theme['text-success-color']
                    : theme['text-danger-color'],
                }}
              />
            </HStack>
          );
        }}
      />
      <HStack style={[styles.bottomTab, {paddingBottom: bottom + 8}]} level="1">
        {BOTTOM.map((item, i) => {
          const isActive = i === activeBottom;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setActiveBottom(i);
              }}>
              <Icon
                pack="assets"
                name={item}
                style={[styles.icon, isActive && styles.activeBottomIcon]}
              />
            </TouchableOpacity>
          );
        })}
      </HStack>
    </Container>
  );
});

export default Statics05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'background-basic-color-5',
  },
  title: {
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    paddingTop: 24,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'background-basic-color-1',
    position: 'absolute',
    top: 4,
    right: 12,
  },
  bottomTab: {
    paddingHorizontal: 40,
    paddingTop: 12,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#ABA4AC',
  },
  activeBottomIcon: {
    tintColor: '#0F4C81',
  },
});
const BOTTOM = ['heart-beat', 'credit-card', 'heart', 'profile'];

const data = [
  {
    logo: Images.static.bitcoin,
    name: 'Bitcoin (BTC)',
    amount: '$345.00 (-2%)',
    positive: false,
  },
  {
    logo: Images.static.ripper,
    name: 'Ripper',
    amount: '$43.00 (+4%)',
    positive: true,
  },
  {
    logo: Images.static.litecoin,
    name: 'Litecoin',
    amount: '$12.00 (-2%)',
    positive: false,
  },
  {
    logo: Images.static.cardano,
    name: 'Cardano',
    amount: '$35.00 (-2%)',
    positive: false,
  },
  {
    logo: Images.static.binance,
    name: 'Binance',
    amount: '$45.00 (-2%)',
    positive: false,
  },
  {
    logo: Images.static.byte,
    name: 'Bytecoin',
    amount: '$345.00 (-2%)',
    positive: false,
  },
];
