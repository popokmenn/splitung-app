import * as React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';

import {
  Container,
  Content,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import TabBarEarning from './elements/TabBarEarning';
import {VictoryLine, VictoryScatter, VictoryGroup} from 'victory-native';
import keyExtractor from 'utils/keyExtractor';

const Statics07 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeMonth, setActiveMonth] = React.useState(0);
  const refMonth = React.useRef<FlatList>(null);
  React.useEffect(() => {
    refMonth.current?.scrollToIndex({
      index: activeMonth,
      animated: true,
      viewPosition: 1,
    });
  }, [refMonth, activeMonth]);
  const prvMonth = () => {
    if (activeMonth == 0) {
      setActiveMonth(11);
    } else {
      setActiveMonth(activeMonth - 1);
    }
  };
  const nextMonth = () => {
    if (activeMonth < 11) {
      setActiveMonth(activeMonth + 1);
    } else {
      setActiveMonth(activeMonth + 1);
    }
  };
  return (
    <Container style={styles.container} useSafeArea={false} level="3">
      <Header
        style={[styles.header, {paddingTop: top + 8}]}
        title="Earnings"
        accessoryRight={
          <NavigationAction icon="notification" status="white" size="medium" />
        }
        accessoryLeft={
          <NavigationAction icon="arrow-left" status="white" size="medium" />
        }
      />
      <TabBarEarning
        tabs={['All', 'week', 'month', 'year']}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        style={styles.tabBar}
      />
      <Content level="3" contentContainerStyle={styles.content}>
        <VStack border={16} pv={22} level="9" itemsCenter mb={24}>
          <Text status="white" category="t7" marginBottom={8}>
            Total value of your sales
          </Text>
          <Text status="white" category="h2">
            $6,245.90
          </Text>
        </VStack>

        <VStack
          level="1"
          padding={16}
          border={16}
          itemsCenter
          maxWidth={width - 32}>
          <HStack itemsCenter mb={24}>
            <TouchableOpacity style={styles.button} onPress={nextMonth}>
              <Icon pack="assets" name="arrow-left" />
            </TouchableOpacity>
            <FlatList
              horizontal
              ref={refMonth}
              data={data_month}
              keyExtractor={keyExtractor}
              renderItem={({item}) => {
                return (
                  <VStack style={{width: 246 * (width / 375)}}>
                    <Text category="t7-m" status="brown" center>
                      {item}
                    </Text>
                  </VStack>
                );
              }}
            />
            <TouchableOpacity style={styles.button} onPress={prvMonth}>
              <Icon pack="assets" name="arrow-right" />
            </TouchableOpacity>
          </HStack>
          <HStack>
            <VStack>
              <Text category="label" status="placeholder">
                200
              </Text>
              <Text category="label" status="placeholder">
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
            <VictoryGroup
              data={sampleData}
              height={96}
              width={270 * (width / 375)}
              padding={{left: 8, right: 4, top: 4, bottom: 4}}>
              <VictoryLine
                style={{
                  data: {
                    stroke: '#0084F4',
                    strokeWidth: 2,
                  },
                }}
              />
              <VictoryScatter
                maxBubbleSize={6}
                minBubbleSize={6}
                style={{
                  data: {fill: '#FFFFFF', stroke: '#0084F4', strokeWidth: 2},
                }}
              />
            </VictoryGroup>
          </HStack>
          <HStack style={{width: 270 * (width / 375)}} ml={26} mr={4}>
            {data.map((item, i) => {
              return (
                <Text key={i} category="label" status="placeholder" uppercase>
                  {item.name.charAt(0)}
                </Text>
              );
            })}
          </HStack>
        </VStack>
        <VStack level="1" border={16} padding={16} mt={24}>
          {data.map((item, i) => {
            return (
              <HStack key={i} mb={i !== data.length - 1 ? 24 : 0}>
                <Text category="s1-b">{item.name}</Text>
                <Text category="s1-sb" status="placeholder">
                  {item.value}
                </Text>
              </HStack>
            );
          })}
        </VStack>
      </Content>
    </Container>
  );
});

export default Statics07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'background-basic-color-5',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    paddingHorizontal: 24,
  },
  tabBar: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  button: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'background-basic-color-3',
    borderRadius: 99,
  },
});
const sampleData = [
  {x: 1, y: 10},
  {x: 2, y: 50},
  {x: 3, y: 25},
  {x: 4, y: 100},
  {x: 5, y: 90},
  {x: 6, y: 120},
  {x: 7, y: 45},
];
const data = [
  {name: 'Sunday', value: '$200.00'},
  {name: 'Monday', value: '$204.60'},
  {name: 'Tuesday', value: '$200.00'},
  {name: 'Wednesday', value: '$200.00'},
  {name: 'Thursday', value: '$200.00'},
  {name: 'Friday', value: '$200.00'},
  {name: 'Saturday', value: '$200.00'},
];
const data_month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
