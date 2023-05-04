import * as React from 'react';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  Icon,
  Divider,
  useTheme,
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
import ButtonProfile from './elements/ButtonProfile';
import {TouchableOpacity} from 'react-native';

interface ICardProps {
  icon: string;
  value: string;
  title: string;
  label?: string;
  iconColor: string;
}

const Profile06 = React.memo(() => {
  const {width, bottom, top} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const theme = useTheme();
  const Card = ({icon, iconColor, label, value, title}: ICardProps) => {
    return (
      <VStack style={{width: 152 * (width / 375), padding: 16}}>
        <HStack itemsCenter style={{flex: 1}}>
          <Text category="t7-sb">{title}</Text>
          <Layout style={styles.layoutIcon} level="2">
            <Icon
              pack="assets"
              name={icon}
              style={{tintColor: iconColor, width: 16, height: 16}}
            />
          </Layout>
        </HStack>
        <Text category="t3-sb" uppercase>
          {value}{' '}
          {label && (
            <Text category="s1-sb" status="brown">
              {label}
            </Text>
          )}
        </Text>
      </VStack>
    );
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout level="5" style={[styles.header, {paddingTop: top + 8}]}>
        <TopNavigation
          appearance="control"
          accessoryLeft={<NavigationAction icon="option" status="white" />}
          accessoryRight={
            <VStack itemsCenter justify="center">
              <NavigationAction icon="notification" status="white" />
              <Layout style={styles.dot} level="12" />
            </VStack>
          }
        />
        <HStack ml={32} mr={24} mt={8}>
          <VStack justify="flex-start">
            <Text category="t3-b" marginBottom={4} status="white">
              Virginia Fowler
            </Text>
            <Text category="t7-sb" status="white">
              Art Director
            </Text>
          </VStack>
          <Avatar
            source={Images.avatar['avatar-09']}
            // @ts-ignore
            style={styles.avatar}
          />
        </HStack>
      </Layout>
      <Content contentContainerStyle={styles.content} level="2">
        <Layout level="1" style={styles.layout}>
          <Card
            icon={'heart'}
            value={'24'}
            title={'AGE'}
            iconColor={'#0084F4'}
            label="year old"
          />
          <Card
            icon={'combined'}
            value={'AE'}
            title={'BLOOD'}
            iconColor={'#FF647C'}
          />
          <Card
            icon={'filter'}
            value={'24'}
            title={'HEIGHT'}
            iconColor={'#00C48C'}
          />
          <Card
            icon={'tree'}
            value={'24'}
            title={'WEIGHT'}
            iconColor={'#FFA26B'}
          />
          <Divider style={styles.dividerVer} />
          <Divider style={styles.dividerHoz} />
        </Layout>
        <Layout level="13" style={styles.card}>
          <Avatar
            source={Images.avatar['avatar-05']}
            // @ts-ignore
            style={styles.avatar}
          />
          <VStack justify="center" ml={16}>
            <Text category="t7-sb" marginBottom={8} status="white">
              Checking your healthcare
            </Text>
            <HStack>
              <Text category="s2-b" status="white">
                Dr. Ann Carlson
              </Text>
              <Text category="s2-sb" status="white" opacity={0.5}>
                8am - 9am
              </Text>
            </HStack>
          </VStack>
        </Layout>
        <ButtonProfile title="Goal Settings" icon="burn" iconColor="#0084F4" />
        <ButtonProfile
          title="Doctor Favorites"
          icon="heart"
          iconColor="#FFA26B"
        />
      </Content>
      <Layout style={[styles.bottom, {paddingBottom: bottom + 8}]}>
        {BOTTOM.map((item, i) => {
          const active = selectedIndex === i;
          if (item === 'ear-piece') {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setSelectedIndex(i);
                }}
                style={[styles.buttonEar, !active && styles.buttonEarInactive]}>
                <Icon
                  pack="assets"
                  name={item}
                  style={[
                    styles.icon,
                    active && {tintColor: theme['text-white-color']},
                  ]}
                />
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                key={i}
                style={styles.buttonBottom}
                onPress={() => {
                  setSelectedIndex(i);
                }}>
                <Icon
                  pack="assets"
                  name={item}
                  style={[
                    styles.icon,
                    active && {tintColor: theme['text-info-color']},
                  ]}
                />
              </TouchableOpacity>
            );
          }
        })}
      </Layout>
    </Container>
  );
});

export default Profile06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  dot: {
    position: 'absolute',
    top: 10,
    right: 18,
    width: 8,
    height: 8,
    borderRadius: 99,
    borderWidth: 0.6,
    borderColor: 'text-white-color',
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'text-white-color',
    borderRadius: 99,
  },
  content: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  layout: {
    borderRadius: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  layoutIcon: {
    width: 32,
    height: 32,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerHoz: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
  },
  dividerVer: {
    height: '90%',
    width: 1,
    position: 'absolute',
    alignSelf: 'center',
  },
  card: {
    padding: 16,
    paddingTop: 20,
    borderRadius: 16,
    flexDirection: 'row',
    marginVertical: 16,
  },
  bottom: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#ABA4AC',
  },
  buttonEar: {
    backgroundColor: 'background-basic-color-7',
    padding: 16,
    borderRadius: 99,
    marginTop: -24,
    marginBottom: 24,
  },
  buttonEarInactive: {
    backgroundColor: 'background-basic-color-1',
    borderWidth: 0.6,
    borderColor: 'text-placeholder-color',
  },
  buttonBottom: {
    marginTop: 24,
  },
});
const BOTTOM = ['medicine', 'doctor', 'ear-piece', 'heart-beat', 'profile'];
