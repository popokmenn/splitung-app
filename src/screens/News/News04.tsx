import * as React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  Input,
  Avatar,
} from '@ui-kitten/components';

import {Container, FocusAwareStatusBar, HStack, Text, VStack} from 'components';
import {Images} from 'assets/images';
import _ from 'lodash';
import Carousel from 'react-native-reanimated-carousel';

interface ICardProps {
  title: string;
  create_at: string;
  image: number;
  create_by: {
    avatar: number;
    name: string;
  };
}
const News04 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [search, setSearch] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState(0);

  const data: ICardProps[] = [
    {
      title: 'Living In The Now Use It To Enrich Your Life',
      create_at: '23 Aug 2021',
      image: Images.news['news-05'],
      create_by: {
        avatar: Images.avatar['avatar-04'],
        name: 'Christina Riley',
      },
    },
    {
      title: 'Living In The Now Use It To Enrich Your Life',
      create_at: '23 Aug 2021',
      image: Images.news['news-05'],
      create_by: {
        avatar: Images.avatar['avatar-04'],
        name: 'Christina Riley',
      },
    },
    {
      title: 'Living In The Now Use It To Enrich Your Life',
      create_at: '23 Aug 2021',
      image: Images.news['news-05'],
      create_by: {
        avatar: Images.avatar['avatar-04'],
        name: 'Christina Riley',
      },
    },
    {
      title: 'Living In The Now Use It To Enrich Your Life',
      create_at: '23 Aug 2021',
      image: Images.news['news-05'],
      create_by: {
        avatar: Images.avatar['avatar-04'],
        name: 'Christina Riley',
      },
    },
  ];
  const data_category = [
    {icon: 'travel', title: 'Travel'},
    {icon: 'food', title: 'Food'},
    {icon: 'health', title: 'Health'},
    {icon: 'car', title: 'Cars'},
    {icon: 'drink', title: 'Drink'},
  ];
  const widthImg = 310 * (width / 375);
  const heightImg = 185 * (height / 812);
  const colors = [
    '#00C48C',
    '#FFCF5C',
    '#0F4C81',
    '#FFA26B',
    '#FF647C50',
    '#FF647C',
  ];
  const sizeTag = 80 * (width / 375);
  return (
    <Container style={styles.container} level="6">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <Input
        placeholder="Type to search"
        status="info"
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
        accessoryRight={<Icon pack="assets" name="search" />}
      />
      <ScrollView>
        <Text
          category="t3"
          status="placeholder"
          marginBottom={20}
          marginLeft={24}
          marginTop={24}>
          Categories
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.contentTag}
          showsHorizontalScrollIndicator={false}>
          {data_category.map((item, i) => {
            let colours = _.shuffle(colors);
            return (
              <Layout
                key={i}
                style={{
                  width: sizeTag,
                  height: sizeTag,
                  backgroundColor: colours.pop(),
                  ...styles.tag,
                }}>
                <Icon pack="assets" name={item.icon} style={styles.icon} />
                <Text category="s1" status="white" marginTop={12}>
                  {item.title}
                </Text>
              </Layout>
            );
          })}
        </ScrollView>
        <Text
          category="t3"
          status="placeholder"
          marginBottom={20}
          marginLeft={24}>
          Recent posts
        </Text>
        <Carousel
          data={data}
          width={width}
          height={365 * (height / 812)}
          pagingEnabled
          mode="parallax"
          loop={false}
          style={styles.carousel}
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 48,
          }}
          renderItem={({item}) => {
            let colours = _.shuffle(colors);
            return (
              <Layout style={[styles.item, {width: widthImg}]}>
                <Layout
                  style={[styles.layoutImg, {backgroundColor: colours.pop()}]}>
                  <Image
                    source={item.image}
                    style={{width: widthImg, height: heightImg}}
                  />
                </Layout>
                <VStack mh={20} mb={30} mt={16}>
                  <HStack mb={12}>
                    <Text category="s2-sb" status="placeholder">
                      {item.create_at}
                    </Text>
                    <Icon
                      pack="assets"
                      name="bookmark"
                      style={styles.bookmark}
                    />
                  </HStack>
                  <Text category="t5" marginBottom={16}>
                    {item.title}
                  </Text>
                  <HStack itemsCenter justify="flex-start">
                    <Avatar source={item.create_by.avatar} size="40" />
                    <Text category="t7" status="info" marginLeft={8}>
                      {item.create_by.name}
                    </Text>
                  </HStack>
                </VStack>
                <Layout
                  style={[styles.indicator, {backgroundColor: colours.pop()}]}
                />
              </Layout>
            );
          }}
        />
      </ScrollView>
      <Layout style={[styles.bottom, {paddingBottom: bottom + 12}]} level="6">
        {DATA.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => {
                setActiveIndex(index);
              }}>
              <Icon
                pack="assets"
                name={item}
                style={[styles.iconBottom, isActive && styles.iconActive]}
              />
            </TouchableOpacity>
          );
        })}
      </Layout>
    </Container>
  );
});

export default News04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  searchBar: {
    marginHorizontal: 24,
    borderRadius: 8,
  },
  contentTag: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  item: {
    borderRadius: 8,
    marginLeft: 28,
  },
  layoutImg: {
    borderRadius: 8,
  },
  bookmark: {
    width: 24,
    height: 24,
    tintColor: 'text-placeholder-color',
  },
  carousel: {
    marginRight: 24,
  },
  indicator: {
    height: 6,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-white-color',
  },
  tag: {
    marginRight: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flexDirection: 'row',
    padding: 24,
    justifyContent: 'space-between',
  },
  iconBottom: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
    opacity: 0.5,
  },
  iconActive: {
    opacity: 1,
  },
});
const DATA = ['more', 'notification', 'profile', 'bookmark'];
