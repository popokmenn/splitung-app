import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Divider,
  Avatar,
  Icon,
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
import {VictoryBar, VictoryCandlestick} from 'victory-native';
import {Images} from 'assets/images';
import TabBar from './elements/TabBar';

const Statics04 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeBottom, setActiveBottom] = React.useState(0);

  return (
    <Container style={styles.container}>
      <Header
        level="7"
        style={styles.header}
        title="Bitcoin"
        accessoryLeft={<NavigationAction icon="arrow-left" status="white" />}
        accessoryRight={
          <Avatar source={Images.avatar['avatar-03']} size="tiny" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <HStack ph={24} mb={12}>
          <VStack>
            <Text category="h2">$9,125.34</Text>
            <Text category="s2" status="sky">
              +$24.35 (0.25%)
            </Text>
          </VStack>
          <Icon pack="assets" name="plus" />
        </HStack>
        <HStack mb={24}>
          <VictoryCandlestick
            data={data}
            padding={{left: 20, right: 4}}
            wickStrokeWidth={1}
            width={340 * (width / 375)}
            height={204 * (height / 812)}
            candleWidth={7}
            candleColors={{positive: '#00C48C', negative: '#FF647C'}}
            style={{
              data: {
                strokeWidth: 0,
              },
              parent: {},
            }}
          />
          <VStack mh={12}>
            {dataLabel.map((item, i) => {
              return (
                <Text key={i} status="brown" category="label">
                  {item}
                </Text>
              );
            })}
          </VStack>
        </HStack>
        <Divider />
        <VStack mh={16}>
          <Text category="s2" status="brown" marginBottom={16} marginTop={24}>
            Volumn
          </Text>
          <HStack>
            <VictoryBar
              padding={{left: 4, right: 4}}
              width={width - 60}
              maxDomain={{y: 80}}
              height={80 * (height / 812)}
              style={{
                data: {
                  fill: ({datum}) => (datum.positive ? '#00C48C' : '#FF647C'),
                  width: 7,
                  opacity: 0.4,
                },
                parent: {
                  backgroundColor: 'transparent',
                  alignSelf: 'flex-end',
                  marginBottom: 8,
                },
              }}
              cornerRadius={{top: 2, bottom: 2}}
              x={d => d.name}
              y={d => d.y}
              alignment="middle"
              data={data_volume}
            />
            <VStack>
              {dataVolumeLabelY.map((item, i) => {
                return (
                  <Text category="label" status="brown" key={i}>
                    {item}
                  </Text>
                );
              })}
            </VStack>
          </HStack>
          <HStack mr={40}>
            {dataVolumeLabelX.map((item, i) => {
              return (
                <Text status="placeholder" category="label" key={i}>
                  {item}
                </Text>
              );
            })}
          </HStack>
        </VStack>
        <TabBar
          style={styles.tabBar}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          tabs={['1d', '1w', '1M', '3M', '6M', '1Y', '5Y']}
        />
      </Content>
      <HStack style={styles.bottomTab}>
        {BOTTOM.map((item, i) => {
          const isActive = i === activeBottom;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setActiveBottom(i);
              }}>
              <Icon
                pack="assets"
                name={item}
                style={[styles.icon, isActive && styles.activeBottomIcon]}
              />
            </TouchableOpacity>
          );
        })}
      </HStack>
    </Container>
  );
});

export default Statics04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingRight: 16,
  },
  content: {
    paddingTop: 24,
  },
  tabBar: {
    marginTop: 24,
  },
  bottomTab: {
    marginHorizontal: 48,
    paddingBottom: 12,
    paddingTop: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#ABA4AC',
  },
  activeBottomIcon: {
    tintColor: '#0F4C81',
  },
});
const BOTTOM = ['heart-beat', 'credit-card', 'heart', 'profile'];

const data = [
  {x: new Date(2016, 6, 1), open: 10, close: 18, high: 20, low: 10},
  {x: new Date(2016, 6, 2), open: 12, close: 15, high: 22, low: 5},
  {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
  {x: new Date(2016, 6, 4), open: 18, close: 14, high: 18, low: 12},
  {x: new Date(2016, 6, 5), open: 20, close: 28, high: 32, low: 18},

  {x: new Date(2016, 6, 6), open: 21, close: 28, high: 32, low: 19},
  {x: new Date(2016, 6, 7), open: 10, close: 15, high: 20, low: 5},
  {x: new Date(2016, 6, 8), open: 15, close: 20, high: 22, low: 10},
  {x: new Date(2016, 6, 9), open: 20, close: 10, high: 25, low: 10},
  {x: new Date(2016, 6, 10), open: 12, close: 8.5, high: 14, low: 8.5},

  {x: new Date(2016, 6, 11), open: 20, close: 28, high: 32, low: 20},
  {x: new Date(2016, 6, 12), open: 10, close: 15, high: 20, low: 5},
  {x: new Date(2016, 6, 13), open: 15, close: 20, high: 22, low: 10},
  {x: new Date(2016, 6, 14), open: 17, close: 11, high: 21.5, low: 9},
  {x: new Date(2016, 6, 15), open: 13, close: 11, high: 15, low: 7},

  {x: new Date(2016, 6, 16), open: 21, close: 28, high: 32, low: 19},
  {x: new Date(2016, 6, 17), open: 10, close: 15, high: 20, low: 5},
  {x: new Date(2016, 6, 18), open: 15, close: 22, high: 22, low: 10},
  {x: new Date(2016, 6, 19), open: 20, close: 10, high: 25, low: 10},
];
const data_volume = [
  {x: 1, y: 30, positive: true},
  {x: 2, y: 80, positive: false},
  {x: 3, y: 70, positive: false},
  {x: 4, y: 27, positive: true},
  {x: 5, y: 20, positive: true},
  {x: 6, y: 40, positive: true},
  {x: 7, y: 48, positive: true},
  {x: 8, y: 20, positive: true},
  {x: 9, y: 30, positive: false},
  {x: 10, y: 35, positive: false},
  {x: 11, y: 40, positive: true},
  {x: 12, y: 15, positive: true},
  {x: 13, y: 20, positive: true},
  {x: 14, y: 30, positive: true},
  {x: 15, y: 50, positive: false},
  {x: 16, y: 60, positive: false},
  {x: 17, y: 30, positive: true},
  {x: 18, y: 20, positive: true},
  {x: 19, y: 10, positive: false},
  {x: 20, y: 20, positive: true},
  {x: 21, y: 30, positive: false},
  {x: 22, y: 40, positive: true},
];
const dataLabel = [9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1];
const dataVolumeLabelY = ['5m', '4m', '3m', '2m', '1m'];
const dataVolumeLabelX = ['1', '7', '14', '21', '28'];
