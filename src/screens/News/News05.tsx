import * as React from 'react';
import {View, Image, SectionList} from 'react-native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Avatar,
} from '@ui-kitten/components';

import {
  Container,
  FocusAwareStatusBar,
  Header,
  NavigationAction,
  Text,
} from 'components';
import {Images} from 'assets/images';
import keyExtractor from 'utils/keyExtractor';
import _ from 'lodash';

const News05 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const ListHeaderComponent = () => (
    <Text category="t3-sb" marginHorizontal={8} marginTop={16}>
      Popular posts
    </Text>
  );
  return (
    <Container style={styles.container} useSafeArea={false}>
      <FocusAwareStatusBar barStyle={'light-content'} />
      <Header
        style={styles.topNavigation}
        accessoryLeft={
          <NavigationAction icon="more" status="white" size="large" />
        }
        title="New Feed"
        accessoryRight={
          <Avatar source={Images.avatar['avatar-03']} size="tiny" />
        }
      />
      <SectionList
        sections={DATA}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={ListHeaderComponent}
        renderSectionHeader={({section: {date}}) => (
          <Text
            category="s2-sb"
            marginLeft={8}
            marginTop={4}
            status="placeholder"
            marginBottom={16}>
            {date}
          </Text>
        )}
        renderItem={({item}) => {
          let colours = _.shuffle(colors);
          return (
            <View style={styles.item}>
              <Layout
                style={{backgroundColor: colours.pop(), ...styles.layoutImg}}>
                <Image source={item.image} />
                <Layout style={styles.tag} level="10">
                  <Text category="s2-b" status="white">
                    Beauty
                  </Text>
                </Layout>
              </Layout>
              <Text center category="t5-sb" marginBottom={12} marginHorizontal={8}>
                {item.title}
              </Text>
              <Text center category="t7" status="platinum">
                By <Text status="basic">{item.create_by}</Text>
              </Text>
            </View>
          );
        }}
      />
    </Container>
  );
});

export default News05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    alignItems: 'center',
    backgroundColor: 'background-basic-color-7',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  layoutImg: {
    borderRadius: 5,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 24,
  },
  tag: {
    position: 'absolute',
    bottom: -12,
    alignSelf: 'center',
    borderRadius: 99,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
});
const colors = [
  '#00C48C',
  '#FFCF5C',
  '#0F4C81',
  '#FFA26B',
  '#FF647C50',
  '#FF647C',
];
const DATA = [
  {
    date: '24 Jun 2017',
    data: [
      {
        image: Images.news['news-10'],
        title: 'Cosmetic Surgery Abroad Making The Right Choice',
        create_by: 'James Author',
      },
      {
        image: Images.news['news-07'],
        title: 'Cosmetic Surgery Abroad Making The Right Choice',
        create_by: 'James Author',
      },
      {
        image: Images.news['news-08'],
        title: 'Cosmetic Surgery Abroad Making The Right Choice',
        create_by: 'James Author',
      },
    ],
  },
  {
    date: '20 Jun 2017',
    data: [
      {
        image: Images.news['news-05'],
        title: 'Cosmetic Surgery Abroad Making The Right Choice',
        create_by: 'James Author',
      },
      {
        image: Images.news['news-07'],
        title: 'Cosmetic Surgery Abroad Making The Right Choice',
        create_by: 'James Author',
      },
      {
        image: Images.news['news-06'],
        title: 'Cosmetic Surgery Abroad Making The Right Choice',
        create_by: 'James Author',
      },
    ],
  },
];
