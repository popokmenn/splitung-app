import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {Layout, StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import {
  Container,
  Content,
  Header,
  HStack,
  IDivider,
  NavigationAction,
  Text,
} from 'components';
import TabBar from './elements/TabBar';
import {VictoryBar} from 'victory-native';
const Statics01 = React.memo(() => {
  const {height, width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
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
        <Layout level="13" style={styles.card}>
          <Text category="t4" status="white" marginTop={20}>
            Good Healh 👍
          </Text>
          <Text category="t7" status="white" marginTop={10}>
            Keep track it everyday!
          </Text>
        </Layout>

        <Layout style={styles.cardChart}>
          <HStack itemsCenter mb={32}>
            <HStack itemsCenter>
              <Icon pack="assets" name="glueco" style={styles.icon} />
              <Text category="s1" marginLeft={4}>
                Glueco{' '}
                <Text category="s1" status="placeholder">
                  (mg/Dl)
                </Text>
              </Text>
            </HStack>
            <Icon pack="assets" name="edit" style={styles.icon} />
          </HStack>
          <HStack>
            <View>
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
            </View>
            <VictoryBar
              padding={{left: 12, right: 20}}
              width={width - 64}
              maxDomain={{y: 100}}
              height={100 * (height / 812)}
              style={{
                data: {
                  fill: ({datum}) => '#0084F4',
                  fillOpacity: 0.7,
                  width: 8,
                },
                parent: {},
              }}
              cornerRadius={{top: 4, bottom: 4}}
              x={d => d.name}
              y={d => d.y}
              alignment="middle"
              data={data}
            />
          </HStack>
          <HStack ml={26}>
            {data.map((item, i) => {
              return (
                <Text category="label" status="placeholder" key={i}>
                  {item.name.charAt(0)}
                </Text>
              );
            })}
          </HStack>
          <IDivider />
          <HStack>
            <TouchableOpacity style={styles.button}>
              <Text category="s1-sb" status="placeholder">
                See Details
              </Text>
            </TouchableOpacity>
            <IDivider appearance="primary" />
            <TouchableOpacity style={styles.button}>
              <Text category="s1-sb" status="secondary">
                Set Goals
              </Text>
            </TouchableOpacity>
          </HStack>
        </Layout>
        <Layout style={styles.cardChart}>
          <HStack itemsCenter mb={32}>
            <HStack itemsCenter>
              <Icon pack="assets" name="weight" style={styles.icon} />
              <Text category="s1" marginLeft={4}>
                Weight{' '}
                <Text category="s1" status="placeholder">
                  (kg)
                </Text>
              </Text>
            </HStack>
            <Icon pack="assets" name="edit" style={styles.icon} />
          </HStack>
          <HStack>
            <View>
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
            </View>
            <VictoryBar
              padding={{left: 12, right: 20}}
              width={width - 64}
              maxDomain={{y: 100}}
              height={100 * (height / 812)}
              style={{
                data: {
                  fill: ({datum}) => '#0084F4',
                  fillOpacity: 0.7,
                  width: 8,
                },
                parent: {},
              }}
              cornerRadius={{top: 4, bottom: 4}}
              x={d => d.name}
              y={d => d.y}
              alignment="middle"
              data={data}
            />
          </HStack>
          <HStack ml={26}>
            {data.map((item, i) => {
              return (
                <Text category="label" status="placeholder" key={i}>
                  {item.name.charAt(0)}
                </Text>
              );
            })}
          </HStack>
          <IDivider />
          <HStack>
            <TouchableOpacity style={styles.button}>
              <Text category="s1-sb" status="placeholder">
                See Details
              </Text>
            </TouchableOpacity>
            <IDivider appearance="primary" />
            <TouchableOpacity style={styles.button}>
              <Text category="s1-sb" status="secondary">
                Set Goals
              </Text>
            </TouchableOpacity>
          </HStack>
        </Layout>
      </Content>
    </Container>
  );
});

export default Statics01;

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
  tabBar: {
    marginVertical: 24,
  },
  card: {
    borderRadius: 16,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  cardChart: {
    borderRadius: 16,
    marginVertical: 16,
    padding: 16,
    paddingBottom: 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
const data = [
  {x: 1, y: 10, name: 'Sun'},
  {x: 2, y: 25, name: 'Mon'},
  {x: 3, y: 30, name: 'Tue'},
  {x: 4, y: 20, name: 'Wed'},
  {x: 5, y: 30, name: 'Thu'},
  {x: 6, y: 80, name: 'Fri'},
  {x: 7, y: 60, name: 'Sat'},
];
