import * as React from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Avatar,
} from '@ui-kitten/components';

import {Container, Content, HStack, NavigationAction, Text} from 'components';
import {Images} from 'assets/images';

const News10 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout level="5" style={styles.topNavigation}>
        <ImageBackground
          source={Images.news['book-02']}
          style={{
            width: width,
            height: 228 * (height / 812),
            marginTop: top + 8,
          }}
          imageStyle={{}}>
          <TopNavigation
            appearance="control"
            accessoryLeft={
              <NavigationAction icon="arrow-back" status="white" size="large" />
            }
            accessoryRight={
              <NavigationAction
                icon="bookmark"
                status="placeholder"
                size="large"
              />
            }
          />
        </ImageBackground>
      </Layout>
      <Avatar
        source={Images.avatar['avatar-07']}
        //@ts-ignore
        style={styles.avatar}
        size="small"
      />
      <Text category="s2-sb" center marginBottom={12}>
        By Jame Author
      </Text>
      <HStack alignSelfCenter mb={12}>
        <Layout style={styles.tag} level="9">
          <Text status="white" category="s2-sb">
            {'Fashion'}
          </Text>
        </Layout>
        <Layout style={styles.tag} level="10">
          <Text status="white" category="s2-sb">
            {'Beauty'}
          </Text>
        </Layout>
        <Layout style={styles.tag} level="13">
          <Text status="white" category="s2-sb">
            {'Travel'}
          </Text>
        </Layout>
      </HStack>
      <Content contentContainerStyle={styles.contentContainer}>
        <Text category="t3-sb" center marginBottom={12}>
          Get Ready Fast For Fall Leaf Viewing Trips
        </Text>
        <Text opacity={0.5} category="s2-b" center>
          {'23 Nov 2020'}
        </Text>
        <Text category="t7" status="basic" marginTop={12}>
          {TEXT_CONTENT}
        </Text>
      </Content>
    </Container>
  );
});

export default News10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingBottom: 16,
  },
  avatar: {
    marginTop: -24,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'text-white-color',
    alignSelf: 'center',
    marginBottom: 8,
  },
  tag: {
    marginHorizontal: 6,
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});
const TEXT_CONTENT =
  'Laser hair removal is getting more popular everyday. Most of us have our own conceptions about this treatment. it is important to know the science and the art of laser hair removal before you decide to get treated with lasers for hair removal. What is laser- laser is the concentrated beam of light that is made of a single wavelength. This beam does not scatter light around but focuses it on one point. Therefore the energy emission is very high. In hair removal this laser energy is used to heat and burn the hair follicles. The full name of laser is Light Amplification by Stimulated Emission of Radiation. How laser removes hair- when laser is focused on skin, it get attracted to the pigment of the hair follicle. The laser heats the hair follicles and burns it at the root. The darker the color of the hair, better the results. Similarly the skin should be light colored otherwise the skin also attracts laser and gets blistered. With latest developments this possibility is getting eliminated, but you must talk to your physician about your hair and skin color and the results expected. Please find out more about the number of treatments you may need, the expectation of results, the side effects and the proficiency of the technician before you proceed for treatment. This article is only for informative purposes. This article is not intended to be a medical advise and it is not a substitute for professional medical advice. Please consult your doctor for your medical concerns. Please follow any tip given in this article only after consulting your doctor. The author is not liable for any outcome or damage resulting from information obtained from this article.';
