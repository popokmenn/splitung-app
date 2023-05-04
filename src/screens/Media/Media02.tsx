import * as React from 'react';
import {FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Button,
} from '@ui-kitten/components';

import {
  Container,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Media02 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        level="6"
        title="Notification"
        style={styles.topNavigation}
        accessoryLeft={<NavigationAction status="white" size="medium" />}
        accessoryRight={<NavigationAction icon="option" status="white" />}
      />
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => {
          return (
            <HStack
              mb={16}
              padding={16}
              level="1"
              border={16}
              justify="flex-start"
              opacity={item.read ? 0.5 : 1}>
              <Avatar source={item.avatar} size="40" />
              <VStack ml={16}>
                <Text
                  category="t7-sb"
                  marginBottom={8}
                  maxWidth={255 * (width / 375)}>
                  {item.title}
                </Text>
                <Text category="s1" status="brown" marginBottom={16}>
                  {item.create_at}
                </Text>
                {item.replyButton && (
                  <Button
                    children={'REPLY'}
                    size="small"
                    style={styles.button}
                    status="placeholder"
                  />
                )}
                {item.followButton && (
                  <Button
                    children={'FOLLOW'}
                    size="small"
                    style={styles.button}
                    status="placeholder"
                  />
                )}
              </VStack>
            </HStack>
          );
        }}
      />
    </Container>
  );
});

export default Media02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topNavigation: {
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingHorizontal: 4
  },
  contentContainer: {
    padding: 16,
  },
  button: {
    alignSelf: 'flex-start',
  },
});
const DATA = [
  {
    id: '1',
    title: 'Luke Casey like your project “Claka mobile app UI KIT” ',
    create_at: '48 min ago',
    avatar: Images.avatar['avatar-02'],
    read: false,
  },
  {
    id: '2',
    title: 'Luella Norton follow you ',
    create_at: '6 hour ago',
    avatar: Images.avatar['avatar-03'],
    followButton: true,
    read: false,
  },
  {
    id: '3',
    title: 'Luella Norton send you in a comment in project X',
    create_at: '2 days ago',
    avatar: Images.avatar['avatar-04'],
    replyButton: true,
    read: false,
  },
  {
    id: '4',
    title: 'Luella Norton send you in a comment in project X',
    create_at: '2 days ago',
    avatar: Images.avatar['avatar-05'],
    replyButton: true,
    read: true,
  },
  {
    id: '5',
    title: 'Luke Casey like your project “Claka mobile app UI KIT”',
    create_at: '48 min ago',
    avatar: Images.avatar['avatar-06'],
    read: true,
  },
];
