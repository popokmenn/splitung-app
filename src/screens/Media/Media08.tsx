import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Avatar,
  Divider,
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
import TabBar08 from './elements/TabBar08';
import {Images} from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Media08 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        style={[styles.topNavigation, {paddingTop: top + 8}]}
        accessoryLeft={<NavigationAction icon="back" status="white" size='medium'/>}
        accessoryRight={<NavigationAction icon="search" status="white" />}
      />
      <Layout level="7" style={styles.title}>
        <Text category="t3" status="white">
          {'Artist Live'}
        </Text>
      </Layout>
      <TabBar08
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        tabs={['Trending', 'New', 'Popular', 'Recommend']}
      />
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => {
          return <Divider style={styles.divider} />;
        }}
        renderItem={({item}) => {
          return (
            <VStack mt={24}>
              <HStack ml={24} mr={16} mb={16}>
                <Avatar source={item.avatar} size="medium" />
                <VStack>
                  <HStack>
                    <Text category="s1-sb" status="basic">
                      {item.name}
                    </Text>
                    <TouchableOpacity style={styles.buttonFollow}>
                      <Text uppercase category="s2" status="white">
                        {'Follow'}
                      </Text>
                    </TouchableOpacity>
                  </HStack>
                  <Text category="s1" status="placeholder">
                    {item.nominee}
                  </Text>
                  <Text category="s1" status="platinum">
                    {item.views} View • {item.follower} Follower • {item.video}{' '}
                    Video
                  </Text>
                </VStack>
              </HStack>
              <Content horizontal contentContainerStyle={styles.contentStream}>
                {item.streamVideo &&
                  item.streamVideo.map((streamVideo, index) => {
                    return (
                      <ImageBackground
                        borderRadius={8}
                        source={streamVideo.image}
                        style={{
                          width: 120 * (width / 375),
                          height: 176 * (height / 812),
                          marginRight: 12,
                        }}>
                        <HStack
                          ph={4}
                          pv={2}
                          style={styles.layoutViewer}
                          level="6"
                          itemsCenter>
                          <Icon pack="assets" name="eye" style={styles.eye} />
                          <Text status="white" category="s1-b">
                            {streamVideo.viewers}
                          </Text>
                        </HStack>
                      </ImageBackground>
                    );
                  })}
              </Content>
            </VStack>
          );
        }}
      />
    </Container>
  );
});

export default Media08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: 'background-basic-color-7',
  },
  contentContainer: {
    paddingBottom: 60,
  },
  title: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  layoutViewer: {
    position: 'absolute',
    zIndex: 100,
    bottom: 8,
    left: 8,
    borderRadius: 4,
  },
  divider: {
    marginBottom: 24,
    marginLeft: 24,
  },
  contentStream: {
    paddingLeft: 24,
  },
  eye: {
    tintColor: '#FFF',
    width: 12,
    height: 12,
    marginRight: 4,
  },
  buttonFollow: {
    backgroundColor: 'background-basic-color-5',
    width: 67,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
const data = [
  {
    avatar: Images.avatar['avatar-02'],
    name: 'Eliza Lamb',
    nominee: 'Streamer',
    views: '2.6M',
    follower: '7M',
    video: '12',
    streamVideo: [
      {viewers: '89k', image: Images.media['song-01']},
      {viewers: '89k', image: Images.media['song-02']},
      {viewers: '89k', image: Images.media['song-03']},
    ],
  },
  {
    avatar: Images.avatar['avatar-03'],
    name: 'Eliza Lamb',
    nominee: 'Streamer',
    views: '2.6M',
    follower: '7M',
    video: '12',
    streamVideo: [
      {viewers: '89k', image: Images.media['song-01']},
      {viewers: '89k', image: Images.media['song-04']},
      {viewers: '89k', image: Images.media['song-02']},
    ],
  },
  {
    avatar: Images.avatar['avatar-04'],
    name: 'Eliza Lamb',
    nominee: 'Streamer',
    views: '2.6M',
    follower: '7M',
    video: '12',
    streamVideo: [
      {viewers: '89k', image: Images.media['song-01']},
      {viewers: '89k', image: Images.media['song-03']},
      {viewers: '89k', image: Images.media['song-04']},
    ],
  },
];
