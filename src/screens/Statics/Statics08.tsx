import * as React from 'react';
import {View} from 'react-native';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet, Divider} from '@ui-kitten/components';

import {
  Container,
  Content,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import TabBarStatics from './elements/TabBarStatics';
import {VictoryPie} from 'victory-native';
import ProgressBar from 'components/ProgressBar';

const Statics08 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const sizeChart = 200 * (width / 375);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header
        style={[styles.header, {paddingTop: top + 8}]}
        title="Statics"
        accessoryRight={
          <NavigationAction icon="notification" status="white" size="medium" />
        }
        accessoryLeft={
          <NavigationAction icon="arrow-left" status="white" size="medium" />
        }
      />
      <TabBarStatics
        tabs={['year', 'month', 'day']}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        style={styles.tabBar}
      />
      <Content contentContainerStyle={styles.content}>
        <HStack justify="center">
          <VictoryPie
            colorScale={[
              '#00C48C',
              '#FFA26B',
              '#FF647C',
              '#FFCF5C',
              '#0F4C81',
              '#0084F4',
            ]}
            data={sampleData}
            style={{parent: {marginTop: -44}}}
            animate={true}
            padding={{left: 0, right: 0}}
            radius={sizeChart / 1.4}
            labels={[]}
            innerRadius={130 * (width / 375)}
          />
          <View style={styles.chartText}>
            <Text category="t5-b" status="placeholder" center>
              TOTAL
            </Text>
            <Text category="t3-b" status="white" center>
              $28,900
            </Text>
          </View>
        </HStack>
        {transaction_sample.map((item, i) => {
          return (
            <VStack key={i} ml={24} mb={24}>
              <HStack mb={12}>
                <Text category="s1" status="white">
                  {item.name}
                </Text>
                <Text
                  category="s1-b"
                  style={{color: item.color}}
                  marginRight={24}>
                  {item.progress * 10}%
                </Text>
              </HStack>
              <VStack ml={24}>
                <HStack mb={20} mr={24}>
                  <Text category="s1" status="white" opacity={0.5}>
                    {item.value}
                  </Text>
                  <ProgressBar
                    didDone={item.progress}
                    total={10}
                    style={styles.progressBar}
                    styleBar={styles.progressBar}
                    progressColor={item.color}
                  />
                </HStack>
                <Divider style={styles.divider} />
              </VStack>
            </VStack>
          );
        })}
      </Content>
    </Container>
  );
});

export default Statics08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'color-brown-500',
  },
  header: {
    backgroundColor: 'background-basic-color-5',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  tabBar: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  content: {
    flexGrow: 1,
    paddingTop: 32,
    paddingBottom: 49,
  },
  chartText: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 32,
  },
  progressBar: {
    height: 4,
  },
  divider: {
    backgroundColor: '#D8D8D820',
  },
});
const sampleData = [
  {x: 1, y: 80},
  {x: 2, y: 50},
  {x: 3, y: 55},
  {x: 4, y: 100},
  {x: 5, y: 90},
  {x: 6, y: 120},
];
const transaction_sample = [
  {name: '🍔 Food & Drink', value: '$204.60', color: '#0084F4', progress: 6},
  {name: '⚽ Entertainment', value: '$204.60', color: '#00C48C', progress: 4},
  {name: '🌇 Travel', value: '$204.60', color: '#FFA26B', progress: 5},
  {
    name: '🐻 Animals & Nature',
    value: '$204.60',
    color: '#FF647C',
    progress: 4.5,
  },
];
