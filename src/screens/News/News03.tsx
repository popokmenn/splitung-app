import * as React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Input,
  Icon,
} from '@ui-kitten/components';

import {Container, FocusAwareStatusBar, HStack, Text} from 'components';
import {Images} from 'assets/images';
import _ from 'lodash';
import Carousel from 'react-native-reanimated-carousel';

interface ICardProps {
  title: string;
  describe: string;
  create_at: string;
  image: number;
}

const News03 = React.memo(() => {
  const {height, width, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [search, setSearch] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState(0);

  const data = [
    {
      title: 'Make Money Online Through Advertising',
      describe:
        'I want to talk about to things that are quite important to me. There are love and one my personal inadequacies. The thing is that I’m quite fond of love, I think that it’s a pretty all right deal...',
      create_at: '23 Aug 2020',
      image: Images.news['news-05'],
    },
    {
      title: 'Make Money Online Through Advertising',
      describe:
        'I want to talk about to things that are quite important to me. There are love and one my personal inadequacies. The thing is that I’m quite fond of love, I think that it’s a pretty all right deal...',
      create_at: '23 Aug 2020',
      image: Images.news['news-04'],
    },
    {
      title: 'Make Money Online Through Advertising',
      describe:
        'I want to talk about to things that are quite important to me. There are love and one my personal inadequacies. The thing is that I’m quite fond of love, I think that it’s a pretty all right deal...',
      create_at: '23 Aug 2020',
      image: Images.news['news-01'],
    },
    {
      title: 'Make Money Online Through Advertising',
      describe:
        'I want to talk about to things that are quite important to me. There are love and one my personal inadequacies. The thing is that I’m quite fond of love, I think that it’s a pretty all right deal...',
      create_at: '23 Aug 2020',
      image: Images.news['news-02'],
    },
  ];
  const colors = ['#00C48C', '#FFCF5C', '#0F4C81', '#FFA26B'];
  const renderChildItem = ({item}: {item: ICardProps}) => {
    let colours = _.shuffle(colors);
    const color = colours.pop();
    return (
      <Layout
        style={{borderRadius: 16, width: width - 52, marginLeft: 24, flex: 1}}>
        <Layout
          level="7"
          style={{
            backgroundColor: color,
            borderRadius: 16,
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{width: 215 * (width / 375), height: 170 * (height / 812)}}
          />
        </Layout>
        <Text category="t3" marginHorizontal={24} marginTop={24}>
          {item.title}
        </Text>
        <Text category="s1-sb" status="brown" marginHorizontal={24}>
          {item.create_at}
        </Text>
        <Text category="t7" marginHorizontal={24} marginBottom={40}>
          {item.describe}
        </Text>
        <Layout style={styles.tag} level="5">
          <Text category="s2" status="white">
            HOTEL
          </Text>
        </Layout>
      </Layout>
    );
  };

  const renderItem = () => {
    return (
      <Carousel
        data={data}
        renderItem={renderChildItem}
        width={width}
        pagingEnabled={true}
        snapEnabled={true}
        windowSize={width}
        height={510 * (height / 812)}
        mode="parallax"
        loop={false}
        style={{}}
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 40,
        }}
      />
    );
  };
  const ListHeaderComponent = () => {
    return (
      <HStack mh={24} mb={24}>
        <View>
          <Text category="t3" status="white">
            Today Post
          </Text>
          <Text category="s2" opacity={0.5} status="white">
            London, 10 Mar 2017
          </Text>
        </View>
        <Image
          source={Images.news.light}
          // @ts-ignore
          style={styles.light}
        />
      </HStack>
    );
  };
  return (
    <Container style={styles.container} level="10">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <Input
        placeholder="What do you want to read?"
        status="info"
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
        accessoryLeft={<Icon pack="assets" name="search" />}
      />
      <FlatList
        data={[0]}
        renderItem={renderItem}
        snapToStart
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Layout style={[styles.bottom, {paddingBottom: bottom + 12}]} level="5">
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
                style={[styles.icon, isActive && styles.iconActive]}
              />
            </TouchableOpacity>
          );
        })}
      </Layout>
    </Container>
  );
});

export default News03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  searchBar: {
    borderWidth: 0,
    borderRadius: 6,
    marginHorizontal: 16,
  },
  contentContainerStyle: {
    paddingVertical: 24,
  },
  tag: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    position: 'absolute',
    bottom: 0,
    left: 24,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  light: {
    width: 52,
    height: 52,
  },
  bottom: {
    flexDirection: 'row',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
    opacity: 0.5,
  },
  iconActive: {
    opacity: 1,
  },
});
const DATA = ['more', 'profile', 'bookmark'];
