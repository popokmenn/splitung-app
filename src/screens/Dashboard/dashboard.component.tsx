import * as React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayout } from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Avatar,
  Button,
} from '@ui-kitten/components';

import { Container, Content, HStack, NavigationAction, Text } from 'components';
import { Images } from 'assets/images';
import CircleProgressBar from './elements/CircleProgressBar';
import _ from 'lodash';
import Color from 'utils/color';
import TabBar from './elements/TabBar';
const Dashboard = React.memo(() => {
  const theme = useTheme();
  const { height, width, top } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const widthCard = 124 * (width / 375);
  const heightCard = 151 * (height / 812);

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, { paddingTop: top + 8 }]} level="9" />
      <Content
        level="2">
        <Text
          style={{ textAlign: 'left', fontWeight: 'bold' }}
          category="t5-b"
          status="black"
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
          }}>
          <Layout
            level="1"
            style={[
              styles.progressCard,
              {
                width: 330,
                height: heightCard,
                backgroundColor: Color.primary,
                marginBottom: 10,
              },
            ]}>
            <Text style={{ fontWeight: 'bold' }} category="t4" status="black">
              My Debts
            </Text>
            <Text
              style={{ fontWeight: 'bold', fontSize: 39, marginTop: 40 }}
              category="t1-sb"
              status="black">
              Rp. 10.000,00
            </Text>
          </Layout>
        </Content>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentCard}>
          {DATA.map((item, i) => (
            <Layout
              key={i}
              level={item.layout}
              style={[
                styles.progressCard,
                {
                  width: 160,
                  height: heightCard,
                  marginRight: 10,
                  backgroundColor: item.color,
                },
              ]}>
              <Text style={{ fontWeight: 'bold' }} category="s2-sb" status="black">
                {item.label}
              </Text>
              <Text style={{ fontWeight: 'bold' }} category="t4" status="black">
                {item.value}
              </Text>
            </Layout>
          ))}
        </ScrollView>
        <Text
          style={{ textAlign: 'left', fontWeight: 'bold' }}
          category="t5-b"
          status="black"
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
        <View style={{ justifyContent: 'center', display: 'flex' }}>
          <HStack style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{
              width: 30,
              height: 10,
              marginLeft: 24,
              marginVertical: 15,
              borderRadius: 10,
              backgroundColor: Color.primary
            }}></View>
            <Text category="s2-sb" style={{ fontWeight: '500', marginLeft: 5 }}>Paid</Text>

            <View style={{
              width: 30,
              height: 10,
              marginLeft: 24,
              marginVertical: 15,
              borderRadius: 10,
              backgroundColor: Color.danger
            }}></View>
            <Text category="s2-sb" style={{ fontWeight: '500', marginLeft: 5 }}>Unpaid</Text>
          </HStack>
        </View>
        <View style={styles.historyItem}>
          <HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Text category="s2-sb" style={{ fontWeight: 'bold', marginLeft: 20 }}>Lunch <Text category="s2-sb">at</Text> Solaria</Text>
            <Text category="s2-sb" style={{ marginLeft: 10 }}>2023-03-01</Text>
            <Text category="s2-sb" style={{ fontWeight: 'bold', marginLeft: 10 }}>Pay to <Text category="s2-sb">Abel</Text></Text>
            <View style={{
              backgroundColor: Color.primary,
              width: 20,
              height: 50,
              borderBottomEndRadius: 10,
              borderTopEndRadius: 10,
            }}></View>
          </HStack>
        </View>
        <View style={styles.historyItem}>
          <HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Text category="s2-sb" style={{ fontWeight: 'bold', marginLeft: 20 }}>Lunch <Text category="s2-sb">at</Text> Solaria</Text>
            <Text category="s2-sb" style={{ marginLeft: 10 }}>2023-03-01</Text>
            <Text category="s2-sb" style={{ fontWeight: 'bold', marginLeft: 10 }}>Pay to <Text category="s2-sb">Abel</Text></Text>
            <View style={{
              backgroundColor: Color.danger,
              width: 20,
              height: 50,
              borderBottomEndRadius: 10,
              borderTopEndRadius: 10,
            }}></View>
          </HStack>
        </View>
      </Content>
      <Button
        children={'Add Cost'}
        status="primary"
        style={styles.buttonSubmit}
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
    backgroundColor: Color.white,
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
    layout: Color.tertiary,
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
