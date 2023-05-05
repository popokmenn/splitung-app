import * as React from 'react';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Input,
  Icon,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import Color from 'utils/color';
import {TouchableOpacity, View} from 'react-native';
import ProgressBar from 'components/ProgressBar';
import {navigate} from 'navigation/RootNavigation';

const Cost = React.memo(() => {
  const {top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="9" />
      <View>
        <TopNavigation
          accessoryLeft={
            <NavigationAction
              onPress={() => navigate('Dashboard')}
              icon="arrow-left"
            />
          }
          accessoryRight={
            <NavigationAction
              onPress={() => navigate('Dashboard')}
              icon="close"
            />
          }
        />
      </View>
      <Content level="1">
        <Text
          style={{textAlign: 'left', fontWeight: 'bold', fontSize: 31}}
          category="h1"
          status="black"
          marginLeft={30}
          marginBottom={-20}>
          Add Cost
        </Text>
        <ProgressBar
          didDone={40}
          total={120}
          style={styles.progressBar}
          progressColor={Color.primary}
          containColor={Color.grey}
          styleBar={{borderRadius: 0}}
        />
        <Input
          placeholder="Description"
          status="primary"
          style={[styles.input, {marginTop: 30}]}
          textStyle={styles.inputText}
          accessoryLeft={() => (
            <Icon pack="assets" name="cart" style={styles.icon} />
          )}
        />
        <Input
          placeholder="Date"
          status="primary"
          style={styles.input}
          textStyle={styles.inputText}
          accessoryLeft={() => (
            <Icon pack="assets" name="calendar" style={styles.icon} />
          )}
        />
      </Content>
      <VStack level="1">
        <TouchableOpacity>
          <View
            style={[
              styles.buttonSubmit,
              {
                backgroundColor: Color.lightGrey,
                color: Color.black,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
              },
            ]}>
            <HStack>
              <Icon pack="assets" name="scan" style={styles.icon} />
              <Text
                style={{
                  color: Color.black,
                  marginLeft: 10,
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Scan the bill
              </Text>
            </HStack>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              styles.buttonSubmit,
              {
                backgroundColor: Color.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                marginBottom: 30,
              },
            ]}>
            <HStack>
              <Text
                style={{
                  color: Color.white,
                  marginLeft: 10,
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Add Cost
              </Text>
            </HStack>
          </View>
        </TouchableOpacity>
      </VStack>
    </Container>
  );
});

export default Cost;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  input: {
    marginTop: 10,
    marginHorizontal: 40,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: Color.lightGrey,
  },
  inputText: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  buttonSubmit: {
    marginHorizontal: 24,
    marginVertical: 5,
    width: 350,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: Color.secondary,
  },
  header: {
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: Color.white,
    color: Color.black,
  },
  progressBar: {
    marginTop: 20,
    height: 5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'color-placeholder-1000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
