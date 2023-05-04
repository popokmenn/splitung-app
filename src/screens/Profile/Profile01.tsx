import * as React from 'react';
import {Image, ImageRequireSource} from 'react-native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
  CheckBox,
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

interface CardProps {
  disabled: boolean;
  label: string;
  lesson: number;
  level?: string;
  image: ImageRequireSource;
}

const Profile01 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const Card = ({disabled, level, image, label, lesson}: CardProps) => {
    return (
      <Layout
        style={[styles.card, disabled && {opacity: 0.5}]}
        level={disabled ? '2' : level}>
        <Image source={image} />
        <VStack justify="center">
          <Text category="t7-sb" status={disabled ? 'basic' : 'white'}>
            {label}
          </Text>
          <Text category="s1" status={disabled ? 'basic' : 'white'}>
            Lesson {lesson}/{10}
          </Text>
        </VStack>
        {lesson === 10 && (
          <CheckBox checked={true} status="info" style={styles.checkbox} />
        )}
      </Layout>
    );
  };

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="arrow-left" />}
        accessoryRight={<NavigationAction icon="outline-setting" />}
      />
      <Content contentContainerStyle={styles.content}>
        <HStack justify="flex-start" itemsCenter mb={16}>
          <Image
            source={Images.avatar['avatar-01']}
            // @ts-ignore
            style={styles.avatar}
          />
          <VStack justify="center">
            <Text category="t6">Frances Hughes</Text>
            <Text category="s1" status="placeholder">
              UI/UX Designer
            </Text>
          </VStack>
        </HStack>
        <HStack mb={32}>
          <Text category="s1-sb">
            {'389 '}
            <Text status="brown" category="s1-sb">
              Videos
            </Text>
          </Text>
          <Text category="s1-sb">
            {'5 '}
            <Text status="brown" category="s1-sb">
              Courses
            </Text>
          </Text>
          <Text category="s1-sb">
            {'20 '}
            <Text status="brown" category="s1-sb">
              Lesson
            </Text>
          </Text>
        </HStack>
        <HStack mb={40}>
          <Button
            children={'Courses'}
            status="info"
            size="small"
            style={[styles.button, {marginRight: 15}]}
          />
          <Button
            children={'Information'}
            disabled
            size="small"
            style={styles.button}
          />
        </HStack>
        <Card
          disabled={false}
          label={'Business English'}
          lesson={10}
          level={'9'}
          image={Images.profile['card-learn-04']}
        />
        <Card
          disabled={false}
          label={'Mutilmedia Sketch'}
          lesson={1}
          level={'13'}
          image={Images.profile['card-learn-03']}
        />
        <Card
          disabled={false}
          label={'Artist Director'}
          lesson={1}
          level={'11'}
          image={Images.profile['card-learn-02']}
        />
        <Card
          disabled={true}
          label={'Grammar Color'}
          lesson={1}
          image={Images.profile['card-learn-01']}
        />
      </Content>
    </Container>
  );
});

export default Profile01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 72,
    height: 82,
    marginRight: 16,
  },
  content: {
    paddingHorizontal: 40,
  },
  button: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 24,
    marginBottom: 24,
  },
  checkbox: {
    position: 'absolute',
    top: 12,
    right: 12,
    transform: [{scale: 1.24}],
  },
});
