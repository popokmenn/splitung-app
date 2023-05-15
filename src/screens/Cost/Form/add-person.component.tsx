import * as React from 'react';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import Color from 'utils/color';
import {View} from 'react-native';
import {navigate} from 'navigation/RootNavigation';
import {Container, Content, HStack, NavigationAction, Text} from 'components';

const AddPerson = React.memo(() => {
  const {top} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [step, setStep] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="9" />
      <View>
        <TopNavigation
          accessoryLeft={
            <NavigationAction
              onPress={() => {
                step > 0 ? setStep(step - 1) : navigate('Dashboard');
              }}
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
      <Content level="1" scrollEnabled>
        <HStack>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 31,
              color: Color.black,
            }}
            category="h1"
            status="white"
            marginLeft={30}>
            Add Person
          </Text>
        </HStack>
      </Content>
    </Container>
  );
});

export default AddPerson;

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
  header: {
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: Color.white,
    color: Color.black,
  },
});
