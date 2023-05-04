import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
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
import {Images} from 'assets/images';
import RateStar from './elements/RateStar';
import ButtonProfile from './elements/ButtonProfile';



const Profile07 = React.memo(() => {
  const theme = useTheme();
  const {width, top} = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container} level="2" useSafeArea={false}>
      <TopNavigation
        style={{paddingTop: top + 8}}
        accessoryLeft={<NavigationAction icon="arrow-left" />}
      />
      <Layout level="1" style={styles.layout}>
        <HStack>
          <VStack justify="flex-start">
            <Text category="t4-sb" marginBottom={4}>
              Rebecca Warner
            </Text>
            <HStack justify="flex-start" mb={12}>
              <Text category="s1-b" marginRight={8} status="placeholder">
                Cardiologist
              </Text>
              <RateStar rate="5.0" />
            </HStack>
            <Text category="s2" maxWidth={215 * (width / 375)}>
              The Advantages Of Minimal Repair Technique
            </Text>
          </VStack>
          <Image source={Images.profile['profile-04']} />
        </HStack>
        <HStack mt={24}>
          <Button
            style={styles.book}
            children={'Book Appointment'}
            status="primary"
            size="small"
          />
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: theme['background-basic-color-9']},
            ]}>
            <Icon pack="assets" name="call" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: theme['background-button-color-6']},
            ]}>
            <Icon pack="assets" name="mess" />
          </TouchableOpacity>
        </HStack>
      </Layout>
      <Content level="2" contentContainerStyle={styles.content}>
        <Layout level="1" style={styles.card}>
          <HStack justify="flex-start" itemsCenter mb={20} ml={8}>
            <Icon pack="assets" name="stethoscope" />
            <Text category="t7-sb" marginLeft={8}>
              Doctor Services
            </Text>
          </HStack>
          <Layout style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {DATA.map((item, i) => {
              return (
                <Layout level="2" key={i} style={styles.tag}>
                  <Text>{item}</Text>
                </Layout>
              );
            })}
          </Layout>
        </Layout>
        <ButtonProfile title="Personal Information" icon="personal"iconColor='#0084F4' />
        <ButtonProfile title="Working Address" icon="location" iconColor='#00C48C'/>
        <ButtonProfile title="Reviewer (34)" icon="award"iconColor='#FFA26B' />
      </Content>
    </Container>
  );
});

export default Profile07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  layout: {
    padding: 24,
    paddingLeft: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  button: {
    padding: 10,
    borderRadius: 16,
    marginLeft: 24,
  },
  book: {
    flex: 1,
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  card: {
    paddingTop: 20,
    paddingHorizontal: 8,
    borderRadius: 16,
    marginBottom: 24,
  },
  tag: {
    marginHorizontal: 8,
    marginBottom: 20,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 24,
  },

});
const DATA = ['Medical', 'Heart', 'Breath', 'Dentistry', 'Pediatrics'];
