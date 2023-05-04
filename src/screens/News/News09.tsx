import * as React from 'react';
import {Image, ScrollView} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {
  Container,
  FocusAwareStatusBar,
  NavigationAction,
  Text,
  VStack,
} from 'components';
import {Images} from 'assets/images';

const News09 = React.memo(() => {
  const {top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} level="6" useSafeArea={false}>
      <FocusAwareStatusBar barStyle={'light-content'} />
      <TopNavigation
        style={[styles.topNavigation, {paddingTop: top + 8}]}
        accessoryLeft={
          <NavigationAction icon="arrow-back" status="white" size="large" />
        }
        accessoryRight={
          <NavigationAction icon="bookmark" status="placeholder" size="large" />
        }
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        indicatorStyle={'white'}>
        <Layout level="7" style={styles.layoutImg}>
          <Image source={Images.news['book-01']} />
        </Layout>
        <VStack level="6" padding={16}>
          <Layout style={styles.tag} level="10">
            <Text category="s2-b" status="white">
              {'Beauty'}
            </Text>
          </Layout>
          <Text category="t5-sb" status="white">
            Enhance Your Brand Potential With Giant Advertising Blimps
          </Text>
          <Text
            category="s2-b"
            status="white"
            marginVertical={16}
            opacity={0.5}>
            By James Author • 29 Dec 2020
          </Text>
          <Text category="t7" status="white">
            {TEXT_CONTENT}
          </Text>
        </VStack>
      </ScrollView>
    </Container>
  );
});

export default News09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 99,
    marginBottom: 16,
  },
  layoutImg: {
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingBottom: 16,
  },
  topNavigation: {
    backgroundColor: 'background-basic-color-7',
  },
});
const TEXT_CONTENT =
  'Laser hair removal is getting more popular everyday. Most of us have our own conceptions about this treatment. it is important to know the science and the art of laser hair removal before you decide to get treated with lasers for hair removal. What is laser- laser is the concentrated beam of light that is made of a single wavelength. This beam does not scatter light around but focuses it on one point. Therefore the energy emission is very high. In hair removal this laser energy is used to heat and burn the hair follicles. The full name of laser is Light Amplification by Stimulated Emission of Radiation. How laser removes hair- when laser is focused on skin, it get attracted to the pigment of the hair follicle. The laser heats the hair follicles and burns it at the root. The darker the color of the hair, better the results. Similarly the skin should be light colored otherwise the skin also attracts laser and gets blistered. With latest developments this possibility is getting eliminated, but you must talk to your physician about your hair and skin color and the results expected. Please find out more about the number of treatments you may need, the expectation of results, the side effects and the proficiency of the technician before you proceed for treatment. This article is only for informative purposes. This article is not intended to be a medical advise and it is not a substitute for professional medical advice. Please consult your doctor for your medical concerns. Please follow any tip given in this article only after consulting your doctor. The author is not liable for any outcome or damage resulting from information obtained from this article.';
