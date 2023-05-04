import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Icon,
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
import {Images} from 'assets/images';

const Statics10 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false} level="3">
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
      <Content level="3">
        <VStack margin={24} itemsCenter>
          <Image source={Images.static.chart} />
        </VStack>
        <HStack wrap mh={24}>
          {sampledata.map((item, i) => {
            return (
              <VStack
                key={i}
                padding={16}
                style={{width: 155 * (width / 375)}}
                level="1"
                border={16}
                mb={24}>
                <VStack
                  style={{backgroundColor: item.color, ...styles.layoutIcon}}>
                  <Icon pack="assets" name={item.icon} style={styles.icon} />
                </VStack>
                <Text category="t4-m" marginTop={20}>
                  {item.amount}
                </Text>
                <Text category="s2" marginTop={6}>
                  {item.name}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </Content>
    </Container>
  );
});

export default Statics10;

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
  icon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  layoutIcon: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
});
const sampledata = [
  {icon: 'smile', amount: '$1,250.00', name: 'Family', color: '#6979F8'},
  {icon: 'breakfast', amount: '$1,250.00', name: 'Family', color: '#00C48C'},
  {icon: 'location', amount: '$1,250.00', name: 'Family', color: '#FFA26B'},
  {icon: 'credit-card', amount: '$1,250.00', name: 'Family', color: '#FFCF5C'},
];
