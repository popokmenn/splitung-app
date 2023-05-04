import * as React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Avatar,
  Icon,
  Input,
} from '@ui-kitten/components';
import {Container, HStack, NavigationAction, Text, VStack} from 'components';
import {Images} from 'assets/images';

const Media09 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <ImageBackground
        source={Images.media.stream}
        style={{
          width: width,
          height: height,
          paddingTop: top + 4,
          paddingBottom: bottom + 8,
          justifyContent: 'space-between',
        }}>
        <HStack mr={16} ml={4}>
          <NavigationAction icon="close" status="white" />
          <HStack style={styles.user}>
            <VStack mr={4}>
              <Text category="s2-b" status="white">
                Logan Poole
              </Text>
              <Text category="label" status="white" opacity={0.5} right>
                ✨Level 10
              </Text>
            </VStack>
            <Avatar source={Images.avatar['avatar-03']} size="40" />
          </HStack>
        </HStack>

        <VStack ph={24}>
          <HStack mr={8}>
            <VStack style={{maxWidth: 260 * (width / 375)}}>
              <Layout style={styles.gift}>
                <Text category="s1-sb" status="white">
                  🎁 Wrapped Gift
                </Text>
              </Layout>
              <Text category="t7-sb" status="white" marginBottom={12}>
                Promotional Advertising Specialty You Ve Waited Long Enough
              </Text>
              <Text category="s2-b" status="white">
                #claka #minimal #illustration
              </Text>
            </VStack>
            <VStack itemsCenter>
              <TouchableOpacity>
                <Icon pack="assets" name="heart" style={styles.iconSmile} />
              </TouchableOpacity>
              <Text
                category="s2-b"
                status="white"
                marginBottom={24}
                marginTop={8}>
                2.6M
              </Text>
              <TouchableOpacity>
                <Icon pack="assets" name="share" style={styles.iconSmile} />
              </TouchableOpacity>
              <Text category="s2-b" status="white" marginTop={8}>
                2.6M
              </Text>
            </VStack>
          </HStack>
          <HStack mt={20}>
            <Input
              style={styles.input}
              status="basic"
              size="medium"
              placeholder="Comment"
            />
            <TouchableOpacity style={styles.buttonSmile}>
              <Icon pack="assets" name="smile" style={styles.iconSmile} />
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ImageBackground>
    </Container>
  );
});

export default Media09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  user: {
    borderRadius: 99,
    backgroundColor: '#1A051D10',
    paddingLeft: 20,
    paddingRight: 4,
    paddingVertical: 4,
  },
  gift: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#1A051D40',
    marginBottom: 8,
  },
  iconSmile: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  buttonSmile: {
    backgroundColor: 'background-basic-color-5',
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    marginRight: 16,
    backgroundColor: '#00000020',
    borderWidth: 0,
  },
});
