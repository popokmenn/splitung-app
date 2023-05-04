import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text, VStack} from 'components';
import {Images} from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import {DATA_WALKTHROUGHS} from 'constants/data';

const Walkthroughs04 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const heightContent = height / 1.2;
  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return theme['color-button-success'];
      case 1:
        return theme['text-danger-color'];
      case 2:
        return theme['color-button-brown'];
      case 3:
        return theme['text-warning-color'];
      default:
        return theme['color-button-basic'];
    }
  };

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={{flexGrow: 1}}>
        <VStack mh={24}>
          <Text status="info" marginBottom={8} category="t7">
            Welcome to
          </Text>
          <Image source={Images.lightLogo} />
          <Text marginTop={24} category="t7" marginBottom={40}>
            Choosing The Best Audio Player Software For Your Computer
          </Text>
        </VStack>
        <Carousel
          modeConfig={{
            stackInterval: -24,
            moveSize: width * 1.5,
          }}
          height={heightContent}
          vertical
          mode="vertical-stack"
          windowSize={width}
          style={styles.carousel}
          width={width}
          snapEnabled
          loop={false}
          customConfig={() => ({
            type: 'positive',
            viewCount: DATA_WALKTHROUGHS.length,
          })}
          defaultIndex={0}
          data={DATA_WALKTHROUGHS}
          renderItem={({item, index}) => {
            return (
              <Layout
                style={{
                  backgroundColor: getColor(index),
                  height: heightContent,
                  ...styles.imageContent,
                }}>
                <Image source={item} />
              </Layout>
            );
          }}
        />
      </Content>
      <View style={[styles.groupButton, {bottom: bottom + 12}]}>
        <HStack>
          <Button
            children={'Sign In '}
            status={'secondary'}
            style={styles.button}
            onPress={goBack}
          />
          <Button
            children={'Sign Up '}
            status={'primary'}
            style={styles.button}
            onPress={goBack}
          />
        </HStack>
        <Text category="t7" center marginTop={16} status="primary">
          Privacy Policy and Term of Services
        </Text>
      </View>
    </Container>
  );
});

export default Walkthroughs04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  carousel: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageContent: {
    marginTop: 40,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    paddingTop: 40,
  },
  groupButton: {
    position: 'absolute',
    left: 24,
    right: 24,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});
