import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageRequireSource,
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
  Icon,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  FocusAwareStatusBar,
  HStack,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';
import {Icons} from 'assets/icons';
import keyExtractor from 'utils/keyExtractor';
import _ from 'lodash';

interface ICardProps {
  title: string;
  kind: string;
  image: ImageRequireSource;
  create_by: string;
}

const News02 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const colors = ['#00C48C', '#FFCF5C', '#0F4C81', '#FFA26B'];
  const renderItem = React.useCallback(({item}: {item: ICardProps}) => {
    let colours = _.shuffle(colors);
    const color = colours.pop();
    const widthItem = 307 * (width / 375);
    const heightItem = 222 * (height / 812);
    return (
      <Layout style={[styles.item, {backgroundColor: color}]}>
        <HStack justify="flex-start" mb={48}>
          <Layout level="10" style={styles.kind}>
            <Text status="white" category="s2-sb">
              {item.kind}
            </Text>
          </Layout>
          <Text category="s2-sb" status="white" marginLeft={12}>
            {item.create_by}
          </Text>
        </HStack>
        <Image
          source={item.image}
          style={{width: widthItem, height: heightItem}}
        />
        <Text category="t3-sb" status="white" marginTop={64}>
          {item.title}
        </Text>
      </Layout>
    );
  }, []);
  return (
    <Container style={styles.container} level="6">
      <FocusAwareStatusBar barStyle={'light-content'} />
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryLeft={
          <VStack  onPress={goBack}>
            <Text category="s1-b" status="white" opacity={0.5}>
              24 Jun 2017
            </Text>
            <Text category="t3-sb" status="white" marginTop={4}>
              Featured posts
            </Text>
          </VStack>
        }
        accessoryRight={
          <Avatar
            source={{uri: ''}}
            defaultSource={Images.avatar['avatar-05']}
            size="medium"
            //@ts-ignore
            style={styles.avatar}
          />
        }
      />
      <FlatList
        data={DATA_CARD}
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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

export default News02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  avatar: {
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'text-white-color',
  },
  topNavigation: {
    marginHorizontal: 20,
    marginBottom: 8,
  },
  content: {
    marginTop: 16,
    marginHorizontal: 16,
    paddingBottom: 16,
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
  item: {
    padding: 12,
    marginBottom: 24,
    borderRadius: 16,
  },
  kind: {
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderRadius: 99,
  },
});
const DATA_CARD = [
  {
    title: 'Truck Side Advertising Isn T It Time',
    kind: 'Beauty',
    image: Images.news['news-01'],
    create_by: 'By James Author',
  },
  {
    title: 'Truck Side Advertising Isn T It Time',
    kind: 'Beauty',
    image: Images.news['news-02'],
    create_by: 'By James Author',
  },
  {
    title: 'Truck Side Advertising Isn T It Time',
    kind: 'Beauty',
    image: Images.news['news-01'],
    create_by: 'By James Author',
  },
];
const DATA = ['more', 'notification', 'profile', 'bookmark'];
