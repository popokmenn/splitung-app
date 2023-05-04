import * as React from 'react';
import {FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {Layout, StyleService, useStyleSheet, Icon} from '@ui-kitten/components';

import {
  Container,
  Header,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import keyExtractor from 'utils/keyExtractor';
import ProgressBar from 'components/ProgressBar';
import TabBarCash from './elements/TabBarCash';

const Statics09 = React.memo(() => {
  const {top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setActiveTab] = React.useState(0);
  const ListHeaderComponent = () => {
    return (
      <HStack mv={16}>
        <VStack level="10" style={styles.card} mr={16}>
          <Text category="t7" status="white" marginBottom={32}>
            Income
          </Text>
          <Text category="t4-sb" status="white">
            $6,245.90
          </Text>
        </VStack>
        <VStack level="12" style={styles.card}>
          <Text category="t7" status="white" marginBottom={32}>
            Expense
          </Text>
          <Text category="t4-sb" status="white">
            $6,245.90
          </Text>
        </VStack>
      </HStack>
    );
  };
  return (
    <Container style={styles.container} level="3" useSafeArea={false}>
      <Header
        style={[styles.header, {paddingTop: top + 8}]}
        title="Cash Report"
        accessoryRight={
          <NavigationAction icon="add" status="white" size="medium" />
        }
        accessoryLeft={
          <NavigationAction icon="arrow-left" status="white" size="medium" />
        }
      />
      <FlatList
        data={sampleData}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.content}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({item}) => {
          return (
            <VStack level="1" border={16} mb={16} pv={12} ph={16}>
              <HStack mb={16}>
                <Text category="s1" status="info">
                  {item.date}
                </Text>
                <Icon pack="assets" name="arrow-right" style={styles.icon} />
              </HStack>
              <HStack mb={8} itemsCenter>
                <VStack style={{flex: 1}}>
                  <ProgressBar
                    progressColor={'#00C48C'}
                    didDone={item.incomeProgress}
                    containColor={'transparent'}
                    total={10}
                    style={styles.progressBar}
                    styleBar={styles.progressBar}
                  />
                </VStack>
                <Text category="s2-sb" status="sky">
                  {item.income}
                </Text>
              </HStack>
              <HStack itemsCenter>
                <VStack style={{flex: 1}}>
                  <ProgressBar
                    progressColor={'#00C48C'}
                    containColor={'transparent'}
                    didDone={item.expenseProgress}
                    total={10}
                    style={styles.progressBar}
                    styleBar={styles.progressBar}
                  />
                </VStack>
                <Text category="s2-sb" status="danger">
                  {item.expense}
                </Text>
              </HStack>
            </VStack>
          );
        }}
      />
      <Layout style={[styles.tabBar, {paddingBottom: bottom + 8}]}>
        <TabBarCash
          activeIndex={activeTab}
          setActiveIndex={setActiveTab}
          tabs={['Day', 'week', 'month', 'year']}
        />
      </Layout>
    </Container>
  );
});

export default Statics09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'background-basic-color-5',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 4,
  },
  progressBar: {
    height: 6,
  },
  content: {
    paddingHorizontal: 16,
  },
  icon: {
    width: 16,
    height: 16,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 24,
    paddingTop: 20,
  },
  tabBar: {
    paddingTop: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#00000070',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
const sampleData = [
  {
    date: 'December 2020',
    income: '$12,468.00',
    expense: '-$357.00',
    incomeProgress: 5,
    expenseProgress: 2,
  },
  {
    date: 'November 2020',
    income: '$9,468.00',
    expense: '-$257.00',
    incomeProgress: 7,
    expenseProgress: 1.2,
  },
  {
    date: 'Octorber 2020',
    income: '$10,468.00',
    expense: '-$157.00',
    incomeProgress: 8,
    expenseProgress: 2,
  },
  {
    date: 'September 2020',
    income: '$15,468.00',
    expense: '-$172.00',
    incomeProgress: 7,
    expenseProgress: 3,
  },
  {
    date: 'August 2020',
    income: '$15,468.00',
    expense: '-$172.00',
    incomeProgress: 10,
    expenseProgress: 2.5,
  },
];
