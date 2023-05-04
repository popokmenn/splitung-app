import * as React from 'react';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {VictoryArea} from 'victory-native';
import {Slider} from '@miblanchard/react-native-slider';
const Statics06 = React.memo(() => {
  const {height, width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} level="3" useSafeArea={false}>
      <TopNavigation
        style={[styles.header, {paddingTop: top + 8}]}
        accessoryLeft={
          <NavigationAction icon="option" status="white" size="medium" />
        }
        accessoryRight={
          <VStack>
            <NavigationAction
              icon="notification"
              status="white"
              size="medium"
            />
            <Layout level="12" style={styles.dot} />
          </VStack>
        }
      />
      <Layout level="5" style={styles.title}>
        <Text category="t3-sb" status="white">
          Your Wallet
        </Text>
      </Layout>
      <Content level="3" contentContainerStyle={styles.content}>
        <VStack border={16} mv={16} level="1">
          <VStack margin={16}>
            <Text category="h2">
              $45.90
              <Text category="t5" status="sky">
                (+2%)
              </Text>
            </Text>
            <Text category="t7-m">Your balancce</Text>
            <Text category="s1" status="placeholder">
              03 Feb 2019
            </Text>
          </VStack>
          <VictoryArea
            padding={{left: 0, right: 0, bottom: 0}}
            width={width - 32}
            maxDomain={{y: 195 * (height / 812)}}
            minDomain={{y: 0}}
            interpolation="natural"
            height={195 * (height / 812)}
            data={sampleData}
            style={{
              data: {fill: '#0084F4'},
              parent: {},
            }}
          />
        </VStack>
        <VStack border={16} level="1" padding={16}>
          <Text category="t3-sb" marginBottom={20}>
            Transaction
          </Text>
          {transaction_sample.map((item, i) => {
            return (
              <VStack key={i} pb={6} mb={8}>
                <HStack mb={10}>
                  <Text category="s1">{item.name}</Text>
                  <Text category="s1" status="placeholder">
                    {item.value}
                  </Text>
                </HStack>
                <Slider
                  value={item.progress}
                  maximumValue={10}
                  minimumTrackTintColor={item.color}
                  thumbTintColor={item.color}
                  renderThumbComponent={() => {
                    return (
                      <VStack
                        style={[styles.thumb, {backgroundColor: item.color}]}>
                        <VStack style={styles.insite} level="1" />
                      </VStack>
                    );
                  }}
                  maximumTrackTintColor={`${item.color}20`}
                />
              </VStack>
            );
          })}
        </VStack>
      </Content>
    </Container>
  );
});

export default Statics06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'background-basic-color-5',
  },
  title: {
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'background-basic-color-1',
    position: 'absolute',
    top: 4,
    right: 12,
  },
  content: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insite: {
    width: 6,
    height: 6,
    borderRadius: 99,
  },
});
const sampleData = [
  {x: 1, y: 112},
  {x: 2, y: 140},
  {x: 3, y: 50},
  {x: 4, y: 80},
  {x: 5, y: 100},
  {x: 6, y: 185},
  {x: 7, y: 180},
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
