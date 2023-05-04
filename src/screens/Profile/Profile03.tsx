import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  Icon,
  Button,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  FocusAwareStatusBar,
  HStack,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';
import ProgressBar from 'components/ProgressBar';
import { useNavigation } from '@react-navigation/native';

const Profile03 = React.memo(() => {
  const {goBack}=useNavigation()
  const styles = useStyleSheet(themedStyles);

  const DATA = [
    {
      id: '1',
      title: 'Gym strong Benchmark',
      label: 'High Intermediate',
      progress: 40 / 100,
      image: Images.profile['gym-01'],
    },
    {
      id: '2',
      title: 'Gym strong Benchmark',
      label: 'High Intermediate',
      progress: 40 / 100,
      image: Images.profile['gym-02'],
    },
    {
      id: '3',
      title: 'Gym strong Benchmark',
      label: 'High Intermediate',
      progress: 40 / 100,
      image: Images.profile['gym-03'],
    },
    {
      id: '4',
      title: 'Gym strong Benchmark',
      label: 'High Intermediate',
      progress: 40 / 100,
      image: Images.profile['gym-04'],
    },
  ];
  return (
    <Container style={styles.container} level="7">
      <Content level='7'>
        <FocusAwareStatusBar barStyle={'light-content'} />
        <TopNavigation
          appearance="control"
          style={styles.topNavigation}
          accessoryRight={
            <TouchableOpacity style={styles.buttonNotification}>
              <Icon
                pack="assets"
                name="notification"
                style={styles.notification}
              />
              <Layout level="13" style={styles.notificationDot} />
            </TouchableOpacity>
          }
          accessoryLeft={<Avatar source={Images.avatar['avatar-08']} size="medium" />}
        />
        <HStack mh={24} mv={16}>
          <VStack justify="center">
            <Text category="t5-sb" status="white">
              Birdie Chapman
            </Text>
            <Text category="s1-b" status="white" opacity={0.5}>
              Runner
            </Text>
          </VStack>
          <Button children={'Go Pro'} size="small" status="orange" />
        </HStack>
        <HStack mh={24} mb={8}>
          <Text category="s2-b" status="white" uppercase>
            💪 Beginner
          </Text>
          <Text category="s2-b" status="white" uppercase>
            40/120
          </Text>
        </HStack>
        <ProgressBar
          didDone={40}
          total={120}
          style={styles.progressBar}
          progressColor="#FFCF5C"
        />
        <HStack level="10" style={styles.layout}>
          <VStack itemsCenter>
            <Text category="t4-b" status="white">
              1.234
            </Text>
            <Text category="s2-sb" status="white">
              Hours
            </Text>
          </VStack>
          <VStack itemsCenter>
            <Text category="t4-b" status="white">
              34
            </Text>
            <Text category="s2-sb" status="white">
              Lesson
            </Text>
          </VStack>
          <VStack itemsCenter>
            <Text category="t4-b" status="white">
              334
            </Text>
            <Text category="s2-sb" status="white">
              Follow
            </Text>
          </VStack>
        </HStack>
        <Content style={styles.content} level='1'>
          <Text category="t7-sb" uppercase marginBottom={24}>
            Trainings Lesson 8/12
          </Text>
          {DATA.map((item, i) => {
            return (
              <TouchableOpacity activeOpacity={0.7} key={i} onPress={goBack} style={styles.item}>
                <Layout style={styles.imgContainer}>
                  <Image source={item.image} />
                </Layout>
                <VStack mb={8}>
                  <VStack>
                    <Text category="t7-b" status="brown">
                      {item.title}
                    </Text>
                    <Text category="s2" status="brown">
                      {item.label}
                    </Text>
                  </VStack>
                  <ProgressBar
                    didDone={item.progress}
                    total={1}
                    progressColor="#FFA26B"
                    containColor="#F7F8F9"
                  />
                </VStack>
              </TouchableOpacity>
            );
          })}
        </Content>
      </Content>
    </Container>
  );
});

export default Profile03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    marginLeft: 20,
    paddingTop: 12,
  },
  notificationDot: {
    width: 7,
    height: 7,
    position: 'absolute',
    borderRadius: 99,
    right: 0,
    top: 0,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  notification: {
    width: 16,
    height: 16,
    tintColor: '#FFF',
  },
  buttonNotification: {
    marginRight: 16,
  },
  progressBar: {
    backgroundColor: '#FFF',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  layout: {
    padding: 24,
    paddingBottom: 48,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  content: {
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 32,
    flexGrow: 1,
  },
  item: {
    marginBottom: 32,
    flexDirection: 'row',
  },
  imgContainer: {
    width: 72,
    height: 72,
    backgroundColor: '#FFCF5C',
    borderRadius: 16,
    marginRight: 16,
  },
});
