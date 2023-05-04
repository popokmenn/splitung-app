import * as React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
  Avatar,
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
import RateStar from './elements/RateStar';
interface ICardProps {
  title: string;
  value: string;
}
const Profile09 = React.memo(() => {
  const {height, width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const widthCard = 148 * (width / 375);
  const heightCard = 100 * (height / 812);

  const DATA = [
    {
      title: 'Dealing With Technical Support 10 Useful Tips',
      date: '10 Mar 2020',
      img: Images.profile['profile-01'],
    },
    {
      title: 'Protective Preventative Maintenance',
      date: '10 Mar 2020',
      img: Images.profile['profile-02'],
    },
  ];
  const Card = ({title, value}: ICardProps) => {
    return (
      <Layout
        level="1"
        style={[styles.card, {width: widthCard, height: heightCard}]}>
        <Text category="s2" status="brown">
          {title}
        </Text>
        <Text category="t4" status="basic">
          {value}
        </Text>
      </Layout>
    );
  };
  return (
    <Container style={styles.container} level="2" useSafeArea={false}>
      <TopNavigation
        style={[styles.topNavigation, {paddingTop: top + 12}]}
        accessoryRight={<NavigationAction icon="option" />}
        accessoryLeft={<NavigationAction icon="arrow-back" />}
      />
      <Layout level="1" style={styles.header}>
        <VStack>
          <Text category="t6-sb">Frances Hughes</Text>
          <Text category="s2-sb" status="brown" marginBottom={8}>
            UI/UX Designer
          </Text>
          <HStack justify="flex-start" itemsCenter>
            <RateStar rate="5.0" />
            <Text category="s2" status="brown" marginLeft={4}>
              (369 Reviewer)
            </Text>
          </HStack>
        </VStack>
        <Avatar source={Images.avatar['avatar-09']} shape="rounded" />
      </Layout>
      <Content level="2" contentContainerStyle={styles.content}>
        <View style={styles.cardField}>
          <Card title="Total Project" value="24" />
          <Card title="Total Project" value="24" />
          <Card title="Total Project" value="24" />
          <Card title="Total Project" value="24" />
        </View>
        <HStack mh={32} mb={16}>
          <Text category="t7-sb" uppercase>
            Latest Works
          </Text>
          <Text category="t7-sb" status="info">
            ALL
          </Text>
        </HStack>
        <ScrollView
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentWork}>
          {DATA.map((item, i) => {
            return (
              <View
                style={[
                  styles.item,
                  {
                    width: 240 * (width / 375),
                  },
                ]}>
                <Image source={item.img} />
                <Text marginHorizontal={16} marginTop={16}>
                  {item.title}
                </Text>
                <Text
                  marginHorizontal={16}
                  marginTop={8}
                  category="s2-sb"
                  status="brown">
                  {item.date}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </Content>
    </Container>
  );
});

export default Profile09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {},
  award: {
    width: 16,
    height: 16,
  },
  header: {
    paddingHorizontal: 32,
    paddingBottom: 26,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  cardField: {
    marginTop: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  card: {
    borderRadius: 16,
    marginBottom: 16,
    marginHorizontal: 8,
    justifyContent: 'center',
    padding: 24,
  },
  content: {},
  item: {
    marginRight: 16,
    backgroundColor: 'background-basic-color-1',
    borderRadius: 16,
    paddingBottom: 16,
  },
  contentWork: {
    backgroundColor: 'transparent',
    paddingHorizontal: 32,
  },
});
