import * as React from 'react';
import {ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, HStack, NavigationAction, Text, VStack} from 'components';
import {Images} from 'assets/images';

const Profile08 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <ImageBackground
      source={Images.profile['profile-03']}
      style={{width: width, height: height}}>
      <Container style={styles.container}>
        <TopNavigation
          appearance="control"
          accessoryLeft={<NavigationAction icon="arrow-back" status="white" />}
        />
        <VStack style={styles.layout}>
          <Text
            category="h2-sb"
            marginRight={width / 3}
            marginBottom={8}
            marginLeft={32}
            status="white">
            Carolyn Lawrence
          </Text>
          <Text
            marginLeft={32}
            category="t7"
            status="white"
            opacity={0.5}
            marginBottom={32}>
            8679 Kellen Centers
          </Text>
          <Layout style={[styles.bottom, {paddingBottom: bottom + 24}]}>
            <HStack>
              <VStack itemsCenter>
                <Text category="t3-sb">257</Text>
                <Text category="t7" status="info">
                  Followers
                </Text>
              </VStack>
              <VStack itemsCenter>
                <Text category="t3-sb">657</Text>
                <Text category="t7" status="info">
                  Following
                </Text>
              </VStack>
              <VStack itemsCenter>
                <Text category="t3-sb">957</Text>
                <Text category="t7" status="info">
                  Photos
                </Text>
              </VStack>
            </HStack>
            <HStack mt={24}>
              <Button
                children={'Message'}
                size="small"
                status="success"
                style={[styles.button, {marginRight: 20}]}
              />
              <Button children={'Follow'} size="small" style={styles.button} />
            </HStack>
          </Layout>
        </VStack>
      </Container>
    </ImageBackground>
  );
});

export default Profile08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingBottom: 0,
  },
  layout: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  bottom: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  button: {
    flex: 1,
  },
});
