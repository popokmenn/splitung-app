import * as React from 'react';
import {View, Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';
import TabBar from './elements/TabBar';
import {VictoryBar} from 'victory-native';

const Statics03 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <HStack pt={top + 8} itemsCenter>
        <NavigationAction icon="arrow-left" />
        <Image source={Images.static.runner} />
        <NavigationAction
          icon="my-location"
          backgroundColor={theme['background-basic-color-7']}
          status="white"
        />
      </HStack>
      <Content contentContainerStyle={styles.content}>
        <Text center>Today</Text>
        <Text center status="info" style={styles.medal}>
          3,248
          <Text category="t7" status="placeholder">
            Steps
          </Text>
        </Text>
        <Text category="s2" status="secondary" center>
          (AVG: 80m/s)
        </Text>
        <HStack level="7" border={16} ph={24} pv={20} mt={28}>
          <VStack>
            <Text category="t4-sb" status="white">
              Good Runner 👍
            </Text>
            <Text category="t7-m" status="white">
              You got gold medal!
            </Text>
          </VStack>
          <Text style={styles.medal}>🏅</Text>
        </HStack>
        <TabBar
          style={styles.tabBar}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          tabs={['day', 'week', 'month', 'year']}
        />
        <Layout style={styles.chart}>
          <VictoryBar
            padding={{left: 32, right: 6}}
            width={width - 60}
            maxDomain={{y: 265}}
            height={265 * (height / 812)}
            style={{
              data: {
                fill: ({datum}) =>
                  datum.y >= 212
                    ? '#0084F4'
                    : datum.y >= 265 / 2
                    ? '#FFCF5C'
                    : '#FF647C',
                width: 12,
              },
              parent: {
                backgroundColor: 'transparent',
              },
            }}
            cornerRadius={{top: 2, bottom: 2}}
            x={d => d.name}
            y={d => d.y}
            alignment="middle"
            data={data}
          />
          <View style={styles.chartEst}>
            <VictoryBar
              padding={{left: 32, right: 6}}
              width={width - 60}
              maxDomain={{y: 212}}
              height={212 * (height / 812)}
              style={{
                data: {
                  fill: ({datum}) => '#0084F420',
                  fillOpacity: 0.8,
                  width: 12,
                },
                parent: {
                  backgroundColor: 'transparent',
                },
              }}
              cornerRadius={{top: 2, bottom: 2}}
              x={d => d.name}
              y={d => d.y}
              alignment="middle"
              data={data_est}
            />
          </View>
        </Layout>
        <HStack mh={30} mt={4}>
          {data.map((item, i) => {
            return (
              <Text category="label" status="placeholder" key={i}>
                {item.name.charAt(0)}
              </Text>
            );
          })}
        </HStack>
      </Content>
    </Container>
  );
});

export default Statics03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  medal: {
    fontSize: 48,
    lineHeight: 58,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 24,
  },
  tabBar: {
    marginTop: 36,
  },
  chart: {
    marginTop: 24,
  },
  chartEst: {
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
const data = [
  {x: 1, y: 53, name: 'Sun', islow: true},
  {x: 2, y: 90, name: 'Mon'},
  {x: 3, y: 170, name: 'Tue'},
  {x: 4, y: 70, name: 'Wed'},
  {x: 5, y: 140, name: 'Thu'},
  {x: 6, y: 265, name: 'Fri'},
  {x: 7, y: 212, name: 'Sat'},
];
const data_est = [
  {x: 1, y: 212, name: 'Sun'},
  {x: 2, y: 212, name: 'Mon'},
  {x: 3, y: 212, name: 'Tue'},
  {x: 4, y: 212, name: 'Wed'},
  {x: 5, y: 212, name: 'Thu'},
  {x: 6, y: 212, name: 'Fri'},
  {x: 7, y: 212, name: 'Sat'},
];
