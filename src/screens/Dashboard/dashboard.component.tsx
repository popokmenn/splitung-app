import * as React from 'react';
import {View} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text} from 'components';
import Color from 'utils/color';
import TabBar from './elements/TabBar';
import {navigate} from 'navigation/RootNavigation';

const Dashboard = React.memo(() => {
  const {height, top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const heightCard = 151 * (height / 812);

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="2" />
      <Content level="2">
        <Text
          style={{textAlign: 'left', fontWeight: 'bold', color: Color.black}}
          category="t5-b"
          status="white"
          marginLeft={30}
          marginTop={20}
          marginBottom={-20}>
          Summary
        </Text>
        <Content
          contentContainerStyle={{
            ...styles.content,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 24,
            width: '100%',
          }}>
          <Layout
            level="1"
            style={[
              styles.progressCard,
              {
                width: '100%',
                height: heightCard,
                backgroundColor: Color.primary,
                marginBottom: 10,
              },
            ]}>
            <Text
              style={{fontWeight: 'bold', color: Color.black}}
              category="t4"
              status="white">
              My Debts
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 39,
                marginTop: 40,
                color: Color.black,
              }}
              category="t1-sb"
              status="white">
              Rp. 10.000,00
            </Text>
          </Layout>
        </Content>
        <HStack style={{paddingHorizontal: 24}}>
          {DATA.map((item, i) => (
            <Layout
              key={i}
              level={item.layout}
              style={[
                styles.progressCard,
                {
                  width: '48%',
                  height: heightCard,
                  // marginRight: 10,
                  backgroundColor: item.color,
                },
              ]}>
              <Text
                style={{fontWeight: 'bold', color: Color.black}}
                category="s2-sb"
                status="white">
                {item.label}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: Color.black}}
                category="t4"
                status="white">
                {item.value}
              </Text>
            </Layout>
          ))}
        </HStack>
        <Text
          style={{textAlign: 'left', fontWeight: 'bold', color: Color.black}}
          category="t5-b"
          status="white"
          marginLeft={30}
          marginTop={20}
          marginBottom={10}>
          History
        </Text>
        <TabBar
          style={styles.tabBar}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          tabs={['Transaction', 'Debts', 'Receivables']}
        />
        <View style={{justifyContent: 'center', display: 'flex'}}>
          <HStack style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <View
              style={{
                width: 30,
                height: 10,
                marginLeft: 24,
                marginVertical: 15,
                borderRadius: 10,
                backgroundColor: Color.primary,
              }}
            />
            <Text
              category="s2-sb"
              style={{fontWeight: '500', marginLeft: 5, color: Color.black}}>
              Paid
            </Text>

            <View
              style={{
                width: 30,
                height: 10,
                marginLeft: 24,
                marginVertical: 15,
                borderRadius: 10,
                backgroundColor: Color.danger,
              }}
            />
            <Text
              category="s2-sb"
              style={{fontWeight: '500', marginLeft: 5, color: Color.black}}>
              Unpaid
            </Text>
          </HStack>
        </View>
        <View style={styles.historyItem}>
          <HStack
            style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Text
              category="s2-sb"
              style={{fontWeight: 'bold', marginLeft: 20, color: Color.black}}>
              Lunch <Text category="s2-sb">at</Text> Solaria
            </Text>
            <Text category="s2-sb" style={{marginLeft: 10, color: Color.black}}>
              2023-03-01
            </Text>
            <Text
              category="s2-sb"
              style={{fontWeight: 'bold', marginLeft: 10, color: Color.black}}>
              Pay to <Text category="s2-sb">Abel</Text>
            </Text>
            <View
              style={{
                backgroundColor: Color.primary,
                width: 20,
                height: 50,
                borderBottomEndRadius: 10,
                borderTopEndRadius: 10,
              }}
            />
          </HStack>
        </View>
        <View style={styles.historyItem}>
          <HStack
            style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Text
              category="s2-sb"
              status="white"
              style={{fontWeight: 'bold', marginLeft: 20, color: Color.black}}>
              Lunch{' '}
              <Text category="s2-sb" status="white">
                at
              </Text>{' '}
              Solaria
            </Text>
            <Text category="s2-sb" style={{marginLeft: 10}}>
              2023-03-01
            </Text>
            <Text
              category="s2-sb"
              status="white"
              style={{fontWeight: 'bold', marginLeft: 10, color: Color.black}}>
              Pay to{' '}
              <Text category="s2-sb" status="white">
                Abel
              </Text>
            </Text>
            <View
              style={{
                backgroundColor: Color.danger,
                width: 20,
                height: 50,
                borderBottomEndRadius: 10,
                borderTopEndRadius: 10,
              }}
            />
          </HStack>
        </View>
      </Content>
      <Button
        children={'Add Cost'}
        status="primary"
        style={styles.buttonSubmit}
        onPress={() => navigate('Cost')}
      />
    </Container>
  );
});

export default Dashboard;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  historyItem: {
    height: 50,
    borderRadius: 10,
    marginHorizontal: 24,
    display: 'flex',
    marginBottom: 10,
    backgroundColor: Color.white,
  },
  tabBar: {
    marginHorizontal: 24,
    borderRadius: 10,
  },
  buttonSubmit: {
    margin: 24,
    width: 350,
    borderRadius: 10,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Color.secondary,
  },
  header: {
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    // backgroundColor: Color.white,
    color: Color.black,
  },
  avatar: {
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'text-white-color',
    marginRight: 24,
    marginTop: 12,
  },
  content: {
    marginTop: 24,
  },
  progressCard: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 24,
  },
  contentCard: {
    paddingHorizontal: 32,
  },
  category: {
    padding: 24,
    paddingBottom: 0,
    margin: 24,
    borderRadius: 24,
  },
  progressBar: {
    marginTop: 20,
  },
  layoutIcon: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 56,
    backgroundColor: 'white',
  },
  indicator: {
    height: 4,
    width: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 16,
  },
  iconBottom: {
    width: 24,
    height: 24,
  },
});
const DATA = [
  {
    label: 'My Receivables',
    value: '$10,246',
    progress: 30 / 100,
    layout: '12',
    color: Color.tertiary,
  },
  {
    label: 'Total',
    value: '$9,246',
    progress: 30 / 100,
    layout: '12',
    color: Color.white,
  },
];
