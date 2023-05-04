import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet, Avatar, Icon} from '@ui-kitten/components';
import dataMusic from './data/playlist.json';
import {
  Container,
  Content,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {useCurrentTrack, useOnTogglePlayback} from './hooks';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {QueueInitialTracksService, SetupService} from '../../services';
import Carousel from 'react-native-reanimated-carousel';
import {Images} from 'assets/images';
import {useNavigation} from '@react-navigation/native';
const Media04 = React.memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const {goBack} = useNavigation();
  //Music
  const onTogglePlayback = useOnTogglePlayback();
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  const track = useCurrentTrack();
  const [isPlayerReady, setIsPlayerReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function run() {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);
      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await QueueInitialTracksService();
      }
      TrackPlayer.getBufferedPosition;
    }
    run();
  }, []);
  const progress = useProgress();
  return (
    <Container style={styles.container}>
      <Header
        level="7"
        title="Music"
        style={[styles.header]}
        accessoryLeft={
          <NavigationAction
            icon="arrow-back"
            status="white"
            size="large"
            onPress={() => {
              goBack();
              TrackPlayer.pause();
            }}
          />
        }
        accessoryRight={
          <Avatar source={Images.avatar['avatar-03']} size="tiny" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Carousel
          style={styles.carousel}
          data={dataMusic}
          width={width}
          height={220 * (height / 812)}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 24,
          }}
          onSnapToItem={() => {}}
          renderItem={({item}) => {
            return (
              <VStack mh={16}>
                <Image
                  source={{uri: item.artwork}}
                  defaultSource={Images.media.music}
                  style={{
                    width: width - 32,
                    height: 220 * (height / 812),
                    borderRadius: 8,
                  }}
                />
              </VStack>
            );
          }}
        />
        <Text category="t5-sb" status="basic" marginTop={24} center>
          {track?.title}
        </Text>
        <Text category="t7-sb" opacity={0.5} marginTop={4} center>
          {track?.artist}
        </Text>
        <VStack mt={80} mh={16}>
          <Image
            source={Images.media.beat}
            style={{width: 327 * (width / 375), height: 108 * (height / 812)}}
          />
        </VStack>
        <HStack mh={16} mt={14} mb={32}>
          <Text category="s2-sb" center>
            {new Date(progress.position * 1000).toISOString().slice(14, 19)}
          </Text>
          <Text category="s2-sb" center>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .slice(14, 19)}
          </Text>
        </HStack>
        <HStack>
          <NavigationAction icon="repeat" size="large" />
          <NavigationAction icon="rewind" size="large" />
          <TouchableOpacity onPress={onTogglePlayback} activeOpacity={0.7}>
            <Icon
              pack="assets"
              name={isPlaying ? 'pause' : 'play'}
              style={sizeStyles.play}
            />
          </TouchableOpacity>
          <NavigationAction icon="forward" size="large" />
          <NavigationAction icon="upload" size="large" />
        </HStack>
      </Content>
    </Container>
  );
});

export default Media04;

const sizeStyles = StyleSheet.create({
  play: {
    width: 56,
    height: 56,
  },
});
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    paddingRight: 24,
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    paddingTop: 24,
  },
});
