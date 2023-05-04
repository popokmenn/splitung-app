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
  Avatar,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, HStack} from 'components';
import {DATA_USER} from 'constants/data';
import ButtonMenu from '../elements/ButtonMenu';

const Menu01 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} level="7">
      <TopNavigation
        appearance="control"
        accessoryRight={
          <NavigationAction
            backgroundColor={theme['color-blue-sky-500']}
            status="white"
            style={styles.close}
          />
        }
      />
      <Content level="7" contentContainerStyle={styles.content}>
        <Layout style={styles.card}>
          <HStack justify="flex-start" itemsCenter>
            <Avatar source={{uri: DATA_USER[1].avatar.path}} />
            <View>
              <Text marginLeft={16} category="t5-sb" marginBottom={4}>
                Gordon Rivera
              </Text>
              <Text marginLeft={16} category="t7" status="placeholder">
                Balance: $330.00
              </Text>
            </View>
          </HStack>
          <Icon pack="assets" name="arrow-right" />
        </Layout>
        <ButtonMenu title="Home page" icon={'home'} status={'info'} style={styles.menuButton} />
        <ButtonMenu title="PORTFOLIOS" icon={'bag'} status={'success'} style={styles.menuButton}/>
        <ButtonMenu title="Message" icon={'message'} status={'warning'} style={styles.menuButton}message='02'/>
        <ButtonMenu title="Profile" icon={'flame'} status={'danger'}style={styles.menuButton} />
        <ButtonMenu title="settings" icon={'settings'} status={'yellow'}style={styles.menuButton} />
        <ButtonMenu title="logout" icon={'logout'} status={'basic'}style={styles.menuButton} />
      </Content>
    </Container>
  );
});

export default Menu01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 16,
    justifyContent: 'space-between',
    marginBottom: 48,
  },
  menuButton: {
    marginBottom: 40,
    marginLeft: 32,
    marginRight: 40,
  },close:{
    borderRadius:99
  }
});
