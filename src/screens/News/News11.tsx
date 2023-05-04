import * as React from 'react';
import {ScrollView, ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
} from '@ui-kitten/components';

import {Container, HStack, NavigationAction, Text} from 'components';
import {Images} from 'assets/images';

const News11 = React.memo(() => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <Layout style={styles.background} level="6">
        <ImageBackground
          source={Images.news['book-03']}
          style={{
            width: width,
            height: 284 * (height / 812),
          }}
        />
      </Layout>
      <TopNavigation
        appearance="control"
        accessoryLeft={
          <NavigationAction icon="arrow-back" status="white" size="large" />
        }
        accessoryRight={
          <NavigationAction
            icon="bookmark-outline"
            status="white"
            size="large"
          />
        }
      />
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {paddingTop: 160 * (height / 812)},
        ]}>
        <Layout style={styles.layoutContent}>
          <HStack mb={16}>
            <Text
              category="t5-b"
              marginRight={16}
              maxWidth={262 * (width / 375)}>
              Advertising On A Budget Part 3 Frequency Frequency Frequency
            </Text>
            <Avatar source={Images.avatar['avatar-09']} size="small" />
          </HStack>
          <HStack mb={16} itemsCenter>
            <Layout style={styles.tag} level="9">
              <Text status="white" category="s2-sb">
                {'Fashion'}
              </Text>
            </Layout>
            <Text category="s2-b" opacity={0.5}>
              12 Jan 2021
            </Text>
          </HStack>
          <Text category="t7" status="basic" marginTop={12}>
            {TEXT_CONTENT}
          </Text>
        </Layout>
      </ScrollView>
    </Container>
  );
});

export default News11;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  content: {
    marginLeft: 16,
    paddingBottom:40
  },
  layoutContent: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
  },
  tag: {
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
const TEXT_CONTENT =
  'Laser hair removal is getting more popular everyday. Most of us have our own conceptions about this treatment. it is important to know the science and the art of laser hair removal before you decide to get treated with lasers for hair removal. What is laser- laser is the concentrated beam of light that is made of a single wavelength. This beam does not scatter light around but focuses it on one point. Therefore the energy emission is very high. In hair removal this laser energy is used to heat and burn the hair follicles. The full name of laser is Light Amplification by Stimulated Emission of Radiation. How laser removes hair- when laser is focused on skin, it get attracted to the pigment of the hair follicle. The laser heats the hair follicles and burns it at the root. The darker the color of the hair, better the results. Similarly the skin should be light colored otherwise the skin also attracts laser and gets blistered. With latest developments this possibility is getting eliminated, but you must talk to your physician about your hair and skin color and the results expected. Please find out more about the number of treatments you may need, the expectation of results, the side effects and the proficiency of the technician before you proceed for treatment. This article is only for informative purposes. This article is not intended to be a medical advise and it is not a substitute for professional medical advice. Please consult your doctor for your medical concerns. Please follow any tip given in this article only after consulting your doctor. The author is not liable for any outcome or damage resulting from information obtained from this article.';
