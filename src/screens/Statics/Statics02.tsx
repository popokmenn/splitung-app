import * as React from 'react';
import {View} from 'react-native';
import {useLayout} from 'hooks';
import {
  Divider,
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
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
import CircleProgressBar from './elements/CircleProgressBar';
import TabBar from './elements/TabBar';
import {VictoryBar} from 'victory-native';

const Statics02 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);

  const Item = ({
    name,
    date,
    value,
    isActive,
  }: {
    name: string;
    date: string;
    value: number;
    isActive?: boolean;
  }) => {
    return (
      <View
        style={{
          width: 148 * (width / 375),
          padding: 16,
        }}>
        <Text category="t7-m" uppercase>
          {name}
        </Text>
        <Text marginBottom={12} category="label" status="placeholder">
          {date}
        </Text>
        <Text category="t4-sb" status={!isActive ? 'basic' : 'secondary'}>
          {value}
          <Text category="s1-sb" status="brown">
            mg/dl
          </Text>
        </Text>
      </View>
    );
  };
  return (
    <Container style={styles.container} useSafeArea={false} level="3">
      <Header
        style={[styles.topNavigation, {paddingTop: top + 8}]}
        level="5"
        title="Test Indicators"
        accessoryLeft={
          <NavigationAction
            icon="option"
            size="medium"
            status="white"
            marginBottom={4}
          />
        }
        accessoryRight={
          <NavigationAction
            icon="setting-outline"
            size="medium"
            status="white"
          />
        }
      />
      <Content level="3" contentContainerStyle={styles.content}>
        <TabBar
          style={styles.tabBar}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          tabs={['day', 'week', 'month', 'year']}
        />
        <Layout style={styles.cardChart}>
          <CircleProgressBar
            value={89}
            valueProgress={30}
            d={120}
            style={styles.progressBar}
            fill={theme[`background-basic-color-1`]}
            stokeColor={theme[`background-basic-color-3`]}
            progressStokeColor={theme[`background-basic-color-5`]}
          />
          <Layout style={styles.chart}>
            <HStack>
              <VStack justify="space-between">
                <Text category="label" status="placeholder">
                  150
                </Text>
                <Text category="label" status="secondary">
                  100
                </Text>
                <Text category="label" status="placeholder">
                  50
                </Text>
                <Text category="label" status="placeholder">
                  10
                </Text>
                <Text category="label" status="placeholder">
                  0
                </Text>
              </VStack>
              <VictoryBar
                padding={{left: 12, right: 20}}
                width={width - 64}
                maxDomain={{y: 150}}
                height={150 * (height / 812)}
                style={{
                  data: {
                    fill: ({datum}) => '#0084F4',
                    fillOpacity: 0.7,
                    width: 8,
                  },
                  parent: {},
                }}
                cornerRadius={{top: 2, bottom: 2}}
                x={d => d.name}
                y={d => d.y}
                alignment="middle"
                data={data}
              />
            </HStack>
            <HStack ml={26} mr={16}>
              {data.map((item, i) => {
                return (
                  <Text category="label" status="placeholder" key={i}>
                    {item.name.charAt(0)}
                  </Text>
                );
              })}
            </HStack>
          </Layout>
        </Layout>
        <Layout style={styles.goalCard}>
          <Item name="goal" value={69} date={'16 NOV 2020'} />
          <Item name="progress" value={72} date={'16 NOV 2020'} />
          <Item name="min" value={25} date={'16 NOV 2020'} />
          <Item name="max" value={96} date={'16 NOV 2020'} isActive />
          <Divider style={styles.dividerVer} />
          <Divider style={styles.dividerHoz} />
        </Layout>
      </Content>
    </Container>
  );
});

export default Statics02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 4,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  cardChart: {
    alignItems: 'center',
    borderRadius: 16,
  },
  tabBar: {
    marginVertical: 24,
  },
  progressBar: {
    marginTop: 24,
    marginBottom: 20,
  },
  chart: {
    marginHorizontal: 16,
  },
  goalCard: {
    borderRadius: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    marginTop: 24,
  },
  dividerHoz: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
  },
  dividerVer: {
    height: '90%',
    width: 1,
    position: 'absolute',
    alignSelf: 'center',
  },
});
const data = [
  {x: 1, y: 20, name: 'Sun'},
  {x: 2, y: 45, name: 'Mon'},
  {x: 3, y: 55, name: 'Tue'},
  {x: 4, y: 30, name: 'Wed'},
  {x: 5, y: 50, name: 'Thu'},
  {x: 6, y: 130, name: 'Fri'},
  {x: 7, y: 120, name: 'Sat'},
];
