import * as React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Input,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';

const Media03 = React.memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const imageSizeStyles = imageSize({width: width, height: height});
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        level="7"
        title="Music"
        style={styles.header}
        accessoryLeft={
          <NavigationAction icon="more" status="white" size="large" />
        }
        accessoryRight={
          <Avatar source={Images.avatar['avatar-03']} size="tiny" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Input
          placeholder="Search artist, songs, playlist"
          status="primary"
          style={styles.input}
        />
        <Image
          source={Images.media.music}
          style={{
            width: width - 32,
            height: 220 * (height / 812),
            margin: 16,
          }}
        />
        <VStack mb={32}>
          <HStack mh={16} mb={18}>
            <Text category="t3-sb">Top Songs</Text>
            <Text status="info" category="t7-sb">
              View all
            </Text>
          </HStack>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DATA.map((item, i) => {
              return (
                <VStack ml={16} key={i}>
                  <Image source={item} style={imageSizeStyles.song} />
                </VStack>
              );
            })}
          </ScrollView>
        </VStack>
        <VStack>
          <HStack mh={16} mb={18}>
            <Text category="t3-sb">Feature Artist</Text>
            <Text status="info" category="t7-sb">
              View all
            </Text>
          </HStack>
          <ScrollView horizontal>
            {DATA_ARTIST.map((item, i) => {
              return (
                <VStack mr={4} ml={16} key={i}>
                  <Avatar source={item} size="medium" />
                </VStack>
              );
            })}
          </ScrollView>
        </VStack>
      </Content>
    </Container>
  );
});

export default Media03;
const imageSize = ({width, height}: {width: number; height: number}) => {
  return StyleSheet.create({
    song: {
      width: 120 * (width / 375),
      height: 120 * (width / 375),
      borderRadius: 8,
    },
  });
};
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  header: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 16,
  },
  input: {
    borderRadius: 6,
    marginTop: 16,
    marginHorizontal: 12,
  },
  content: {
    justifyContent: 'center',
  },
});
const DATA = [
  Images.media['song-01'],
  Images.media['song-02'],
  Images.media['song-03'],
];
const DATA_ARTIST = [
  Images.avatar['avatar-10'],
  Images.avatar['avatar-11'],
  Images.avatar['avatar-12'],
  Images.avatar['avatar-13'],
  Images.avatar['avatar-04'],
];
