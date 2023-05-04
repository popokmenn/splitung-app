import * as React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Avatar,
  Icon,
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
import CircleProgressBar from './elements/CircleProgressBar';
import ProgressBar from './elements/ProgressBar';
import _ from 'lodash';
const Profile05 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const widthCard = 124 * (width / 375);
  const heightCard = 151 * (height / 812);

  const colors = [
    '#0084F4',
    '#00C48C',
    '#FFA26B',
    '#1A051D',
    '#0F4C81',
    '#6D5F6F',
  ];
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="9">
        <HStack style={{alignItems: 'flex-start'}}>
          <NavigationAction icon="option" status="white" />
          <Avatar
            defaultSource={Images.avatar['avatar-05']}
            size="small"
            //@ts-ignore
            style={styles.avatar}
          />
        </HStack>
        <Text category="t1-sb" marginLeft={32} marginBottom={6} status="white">
          $ 128,456.99
        </Text>
        <Text category="s1-sb" marginLeft={32} status="white">
          Balance
        </Text>
      </Layout>
      <Content contentContainerStyle={styles.content} level="2">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentCard}>
          {DATA.map((item, i) => (
            <Layout
              key={i}
              level={item.layout}
              style={[
                styles.progressCard,
                {
                  width: widthCard,
                  height: heightCard,
                },
              ]}>
              <CircleProgressBar
                value={30}
                d={52}
                fill={theme[`background-basic-color-${item.layout}`]}
              />
              <Text category="t4" status="white" marginTop={16}>
                {item.value}
              </Text>
              <Text category="s2-sb" status="white">
                {item.label}
              </Text>
            </Layout>
          ))}
        </ScrollView>
        <Layout style={styles.category}>
          <Text category="t7-sb" marginBottom={24}>
            Top Categories
          </Text>
          {DATA_CATEGORY.map((item, i) => {
            let colours = _.shuffle(colors);
            const color = colours.pop();
            return (
              <HStack key={i} mb={32} itemsCenter justify="flex-start">
                <Layout style={styles.layoutIcon} level="2">
                  <Icon
                    pack="assets"
                    name={item.icon}
                    style={{tintColor: color}}
                  />
                </Layout>
                <VStack ml={12} style={{flex: 1}} justify="space-between">
                  <HStack>
                    <Text category="s2-sb">{item.title}</Text>
                    <Text status="danger" category="s2-sb">
                      {item.value}
                    </Text>
                  </HStack>
                  <ProgressBar
                    style={styles.progressBar}
                    didDone={1}
                    total={10}
                    progressColor={color}
                    containColor={'#F7F8F9'}
                  />
                </VStack>
              </HStack>
            );
          })}
        </Layout>
        <Button
          children={'SIGN UP'}
          status="primary"
          style={styles.buttonSubmit}
        />
      </Content>
    </Container>
  );
});

export default Profile05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatar: {
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'text-white-color',
    marginRight: 24,
    marginTop: 12,
  },
  content: {
    marginTop: 24,
  },
  progressCard: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 24,
    marginRight: 16,
  },
  contentCard: {
    paddingHorizontal: 32,
  },
  category: {
    padding: 24,
    paddingBottom: 0,
    margin: 24,
    borderRadius: 24,
  },
  progressBar: {
    marginTop: 20,
  },
  layoutIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 56,
    backgroundColor: 'white',
  },
  indicator: {
    height: 4,
    width: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 16,
  },
  iconBottom: {
    width: 24,
    height: 24,
  },
});
const DATA = [
  {
    label: 'Income',
    value: '$10,246',
    progress: 30 / 100,
    layout: '10',
  },
  {
    label: 'Spend',
    value: '$9,246',
    progress: 30 / 100,
    layout: '12',
  },
  {
    label: 'Saving',
    value: '$946',
    progress: 30 / 100,
    layout: '7',
  },
];
const DATA_CATEGORY = [
  {
    title: 'Food & Drink',
    icon: 'cup-of-tea',
    value: '-$345.00',
    progress: 30,
  },
  {
    title: 'Restaurant',
    icon: 'tree',
    value: '-$86.00',
    progress: 50,
  },
  {
    title: 'Activity',
    icon: 'combined',
    value: '-$345.00',
    progress: 20,
  },
];
const BOTTOM = ['credit-card', 'heart', 'personal'];
