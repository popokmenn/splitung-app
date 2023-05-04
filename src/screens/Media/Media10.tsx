import * as React from 'react';
import {View, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet, Input, Icon} from '@ui-kitten/components';

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

const Media10 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false} level="3">
      <Header
        style={styles.header}
        title="Photo Album"
        accessoryLeft={<NavigationAction icon="close" status="white" />}
        accessoryRight={
          <NavigationAction icon="heart" size="medium" status="white" />
        }
      />
      <Content level="3" contentContainerStyle={styles.content}>
        <Input
          style={styles.input}
          placeholder="Search something"
          status="primary"
          size="medium"
          accessoryRight={() => (
            <Icon pack="assets" name="search" style={styles.icon} />
          )}
        />
        <Image
          source={Images.media['song-04']}
          borderRadius={12}
          style={{
            width: width - 32,
            height: 180 * (height / 812),
            marginHorizontal: 16,
            marginBottom: 24,
          }}
        />
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <VStack>
                <HStack mb={16} mh={16}>
                  <Text category="t7-m">{item.title}</Text>
                  <Text category="s1-sb" status="info">
                    {item.data.length} Photos
                  </Text>
                </HStack>
                <Content horizontal contentContainerStyle={styles.contentPhoto}>
                  {item.data &&
                    item.data.map((item, i) => {
                      return (
                        <View key={i}>
                          <Image
                            source={item}
                            borderRadius={8}
                            style={{
                              width: 80 * (width / 375),
                              height: 120 * (height / 812),
                              marginRight: 8,
                              marginBottom: 24,
                            }}
                          />
                        </View>
                      );
                    })}
                </Content>
              </VStack>
            );
          }}
        />
      </Content>
    </Container>
  );
});

export default Media10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'background-basic-color-10',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'color-placeholder-100',
  },
  input: {
    borderWidth: 0,
    borderRadius: 8,
    marginVertical: 16,
  },
  content: {
    paddingBottom: 40,
  },
  contentPhoto: {
    paddingHorizontal: 16,
  },
});
const data = [
  {
    title: 'Travel',
    data: [
      Images.media['song-01'],
      Images.media['song-02'],
      Images.media['song-03'],
      Images.media['song-04'],
      Images.media.stream,
    ],
  },
  {
    title: 'Lifestyle',
    data: [
      Images.media.stream,
      Images.media['song-04'],
      Images.media['song-03'],
      Images.media['song-02'],
      Images.media['song-01'],
    ],
  },
  {
    title: 'Favorites',
    data: [
      Images.media['song-03'],
      Images.media['song-04'],
      Images.media.stream,
      Images.media['song-01'],
      Images.media['song-02'],
    ],
  },
];
