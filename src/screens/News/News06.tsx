import * as React from 'react';
import {Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import {Container, FocusAwareStatusBar, HStack, Text, VStack} from 'components';
import {Images} from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from 'screens/Walkthroughs/elements/Pagination';
import {useSharedValue} from 'react-native-reanimated';
import _ from 'lodash';

const News06 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const progress = useSharedValue(0);
  const modeConfig = {
    parallaxScrollingScale: 0.9,
    parallaxScrollingOffset: 50,
  };
  const ListHeaderComponent = () => (
    <Layout level="9" style={[styles.layoutHeader, {paddingTop: top + 8}]}>
      <Carousel
        width={width}
        data={DATA}
        height={284 * (height / 812)}
        mode="parallax"
        modeConfig={modeConfig}
        onProgressChange={(_, absoluteProgress) =>
          (progress.value = absoluteProgress)
        }
        renderItem={({item}) => {
          return (
            <VStack alignSelfCenter itemsCenter>
              <Image source={item.image} />
              <Text category="s2-sb" status="white" center marginTop={10}>
                {item.social}
              </Text>
              <Text
                category="t4-b"
                status="white"
                center
                marginHorizontal={36}
                marginVertical={8}>
                {item.title}
              </Text>
              <Text category="c1" status="white" center marginBottom={24}>
                By {item.create_by}
              </Text>
            </VStack>
          );
        }}
      />
      <HStack style={styles.pagination} level="10">
        {DATA.map((item, i) => {
          return (
            <Pagination
              backgroundColor={theme['background-basic-color-1']}
              index={i}
              key={i}
              animValue={progress}
              length={DATA.length}
              size={5}
            />
          );
        })}
      </HStack>
    </Layout>
  );
  return (
    <Container style={styles.container} useSafeArea={false} level="6">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <FlatList
        data={[0]}
        ListHeaderComponent={ListHeaderComponent}
        stickyHeaderIndices={[0]}
        renderItem={() => (
          <VStack mt={24}>
            <Text
              category="t5-b"
              status="white"
              marginBottom={16}
              marginLeft={16}>
              Editor choices
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {DATA_CONTENT.map((item, index) => {
                const colors = [
                  '#00C48C',
                  '#FFCF5C',
                  '#0F4C81',
                  '#FFA26B',
                  '#5C6BB2',
                  '#B9E5FB',
                ];
                let colours = _.shuffle(colors);
                const color = colours.pop();
                return (
                  <VStack
                    onPress={goBack}
                    key={index}
                    style={{
                      maxWidth: 160 * (width / 375),
                      marginHorizontal: 8,
                    }}>
                    <Layout
                      style={[styles.itemContent, {backgroundColor: color}]}>
                      <Image
                        source={item.image}
                        style={{
                          width: 160 * (width / 375),
                          height: 210 * (height / 812),
                        }}
                      />
                    </Layout>
                    <Text
                      category="s1-b"
                      status="white"
                      marginVertical={8}
                      left>
                      {item.title}
                    </Text>
                    <Text category="s2-b" status="white" opacity={0.5}>
                      {item.create_at}
                    </Text>
                  </VStack>
                );
              })}
            </ScrollView>
          </VStack>
        )}
      />
      <Layout style={[styles.bottom, {paddingBottom: bottom + 12}]} level="6">
        {BOTTOM.map((item, index) => {
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

export default News06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'background-basic-color-9',
  },
  layoutHeader: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  itemContent: {
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  pagination: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 99,
    marginBottom: 16,
  },
  bottom: {
    flexDirection: 'row',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
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
const BOTTOM = ['more', 'notification', 'profile', 'bookmark'];

const DATA = [
  {
    social: 'Spotlight',
    title: 'Bryce Canyon A Stunning Us Travel Destination',
    create_by: 'James Author',
    image: Images.news['news-07'],
  },
  {
    social: 'Spotlight',
    title: 'Bryce Canyon A Stunning Us Travel Destination',
    create_by: 'James Author',
    image: Images.news['news-07'],
  },
  {
    social: 'Spotlight',
    title: 'Bryce Canyon A Stunning Us Travel Destination',
    create_by: 'James Author',
    image: Images.news['news-07'],
  },
];
const DATA_CONTENT = [
  {
    title: '15 Tips To Increase Your Adwords Profits',
    create_at: '08 Feb 2020',
    image: Images.news['news-08'],
  },
  {
    title: 'Beyond The Naked Eye',
    create_at: '08 Feb 2020',
    image: Images.news['news-09'],
  },
  {
    title: 'Beyond The Naked Eye',
    create_at: '08 Feb 2020',
    image: Images.news['news-07'],
  },
  {
    title: 'Beyond The Naked Eye',
    create_at: '08 Feb 2020',
    image: Images.news['news-06'],
  },
  {
    title: 'Beyond The Naked Eye',
    create_at: '08 Feb 2020',
    image: Images.news['news-05'],
  },
  {
    title: 'Beyond The Naked Eye',
    create_at: '08 Feb 2020',
    image: Images.news['news-10'],
  },
];

