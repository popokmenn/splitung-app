import * as React from 'react';
import {FlatList, ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  Icon,
  ViewPager,
} from '@ui-kitten/components';

import {Container, HStack, NavigationAction, Text, VStack} from 'components';
import TabBar07 from './elements/TabBar07';
import {Images} from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Media07 = React.memo(() => {
  const {height, width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        style={[styles.topNavigation, {paddingTop: top + 8}]}
        accessoryLeft={<NavigationAction icon="back" status="white" size='medium'/>}
        accessoryRight={
          <NavigationAction icon="setting-outline" status="white" />
        }
      />
      <Layout level="5" style={styles.title}>
        <Text category="t3" status="white">
          {'Artist Live'}
        </Text>
      </Layout>
      <TabBar07
        style={styles.tabBar}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        tabs={['All', 'Happenning', 'Upcoming']}
      />
      <ViewPager
        style={styles.viewPager}
        selectedIndex={activeIndex}
        onSelect={setActiveIndex}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.content}
          renderItem={({item}) => {
            return (
              <ImageBackground
                borderRadius={24}
                style={{
                  width: 164 * (width / 375),
                  height: 240 * (height / 812),
                  marginHorizontal: 8,
                  marginBottom: 16,
                }}
                source={item.image}>
                <VStack style={styles.item}>
                  <HStack justify="flex-start">
                    <VStack level="12" border={4} mr={4}>
                      <Text
                        status="white"
                        category="s2-b"
                        marginHorizontal={8}
                        marginVertical={4}>
                        {item.time}
                      </Text>
                    </VStack>
                    <HStack level="6" border={4} itemsCenter>
                      <Icon pack="assets" name="eye" style={styles.iconEye} />
                      <Text status="white" category="s2-b" marginRight={4}>
                        {item.viewers}
                      </Text>
                    </HStack>
                  </HStack>
                  <HStack itemsCenter justify="flex-start">
                    <Avatar source={item.avatar} size="tiny" />
                    <Text category="s2-b" status="white" marginLeft={8}>
                      {item.name}
                    </Text>
                  </HStack>
                </VStack>
              </ImageBackground>
            );
          }}
        />
        <></>
        <></>
      </ViewPager>
    </Container>
  );
});

export default Media07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: 'background-basic-color-5',
  },
  title: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabBar: {
    marginTop: 16,
    marginBottom: 24,
  },
  content: {
    marginHorizontal: 8,
    paddingBottom: 40,
  },
  iconEye: {
    tintColor: 'text-white-color',
    width: 16,
    height: 16,
    margin: 4,
  },
  item: {
    padding: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
});
const data = [
  {
    name: 'Jon Martinez',
    avatar: Images.avatar['avatar-03'],
    viewers: '89k',
    time: '24:02',
    image: Images.media['song-01'],
  },
  {
    name: 'Jon Martinez',
    avatar: Images.avatar['avatar-04'],
    viewers: '89k',
    time: '40:02',
    image: Images.media['song-02'],
  },
  {
    name: 'Jon Martinez',
    avatar: Images.avatar['avatar-05'],
    viewers: '89k',
    time: '34:12',
    image: Images.media['song-03'],
  },
  {
    name: 'Jon Martinez',
    avatar: Images.avatar['avatar-06'],
    viewers: '89k',
    time: '04:22',
    image: Images.media['song-04'],
  },
  {
    name: 'Jon Martinez',
    avatar: Images.avatar['avatar-06'],
    viewers: '89k',
    time: '04:22',
    image: Images.media['song-04'],
  },
  {
    name: 'Jon Martinez',
    avatar: Images.avatar['avatar-06'],
    viewers: '89k',
    time: '04:22',
    image: Images.media['song-04'],
  },
  {
    name: 'Jon Martinez',
    avatar: Images.avatar['avatar-06'],
    viewers: '89k',
    time: '04:22',
    image: Images.media['song-04'],
  },
];
