import * as React from 'react';
import {Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, HStack} from 'components';
import TabBar from './elements/TabBar';
import {Images} from 'assets/images';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

const Media01 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const refCarousel = React.useRef<ICarouselInstance>(null);
  const [activeIndex, setActiveIndex] = React.useState(1);
  return (
    <Container style={styles.container}>
      <HStack
        style={styles.topNavigation}
        pt={top + 8}
        pb={12}
        level="5"
        itemsCenter>
        <NavigationAction icon="arrow-left" status="white" />
        <Text category="t6-sb" status="white">
          Choose your Plan
        </Text>
        <HStack>
          <NavigationAction icon="notification" status="white" />
          <Layout style={styles.notificationIndicator} level="12" />
        </HStack>
      </HStack>
      <Content>
        <TabBar
          tabs={['Basic', 'Standard', 'Premium']}
          tabActive={activeIndex}
          onChangeTab={setActiveIndex}
          status={['white', 'placeholder']}
          backgroundTab={theme['background-basic-color-2']}
          backgroundTabActive={theme['color-primary-100']}
          style={styles.tabBar}
        />
        <Carousel
          data={DATA}
          ref={refCarousel}
          width={width}
          height={492 * (height / 812)}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 70,
          }}
          onSnapToItem={e => setActiveIndex(e)}
          defaultIndex={1}
          renderItem={({item, index}) => {
            return (
              <Layout
                key={index}
                style={{
                  backgroundColor: item.backgroundColor,
                  width: width - 96,
                  ...styles.item,
                }}>
                <Image source={item.image} />
                <Text category="h1" status="white" marginTop={16}>
                  {item.price}
                </Text>
                <Text
                  status="white"
                  opacity={0.7}
                  category="s2-b"
                  marginBottom={40}>
                  per Month
                </Text>
                {item.description.map((item, i) => {
                  return (
                    <Text
                      center
                      category="t7-b"
                      status="white"
                      marginBottom={24}>
                      {item}
                    </Text>
                  );
                })}
              </Layout>
            );
          }}
        />
      </Content>
      <Button
        children={'UPGRADE NOW'}
        status="secondary"
        style={styles.button}
      />
    </Container>
  );
});

export default Media01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  topNavigation: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  notificationIndicator: {
    width: 8,
    height: 8,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'text-white-color',
    position: 'absolute',
    right: 20,
    top: 12,
  },
  tabBar: {
    margin: 24,
  },
  item: {
    marginLeft: 48,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
    paddingBottom: 16,
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 24,
    marginBottom: 8,
  },
});
const DATA = [
  {
    id: '0',
    price: '$39.99',
    description: [
      '24h Call Doctor',
      '16 Book Appointment',
      '32 Expert Doctors',
      '24/7 Access Medical',
      'Generic Drugs',
    ],
    image: Images.media.plan,
    backgroundColor: '#FFCF5C',
  },
  {
    id: '1',
    price: '$68.00',
    description: [
      '24h Call Doctor',
      '16 Book Appointment',
      '32 Expert Doctors',
      '24/7 Access Medical',
      'Generic Drugs',
    ],
    image: Images.media.plan,
    backgroundColor: '#00C48C',
  },
  {
    id: '1',
    price: '$10.00',
    description: [
      '24h Call Doctor',
      '16 Book Appointment',
      '32 Expert Doctors',
      '24/7 Access Medical',
      'Generic Drugs',
    ],
    image: Images.media.plan,
    backgroundColor: '#FFA26B',
  },
];
