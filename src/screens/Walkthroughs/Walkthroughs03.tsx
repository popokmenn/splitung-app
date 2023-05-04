import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Icon,
  Button,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text, VStack} from 'components';
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import {DATA_WALKTHROUGHS} from 'constants/data';

const Walkthroughs03 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const heightItem = 400 * (height / 812);
  const baseOptions = {
    vertical: false,
    width: width,
    height: heightItem,
  } as const;
  const progressValue = useSharedValue(0);
  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return theme['color-button-secondary'];
      case 1:
        return theme['text-danger-color'];
      case 2:
        return theme['text-basic-color'];
      case 3:
        return theme['text-warning-color'];
      default:
        return theme['text-info-color'];
    }
  };
  return (
    <Container style={styles.container}>
      <HStack ml={50} mr={24} mt={8}>
        <Icon pack="assets" name="logo" style={styles.logo} />
        <Text category="s2" status="info" uppercase>
          Skip!
        </Text>
      </HStack>
      <Content>
        <Carousel
          {...baseOptions}
          loop={false}
          pagingEnabled
          snapEnabled
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.92,
            parallaxScrollingOffset: 60,
          }}
          style={{width: '100%'}}
          data={DATA_WALKTHROUGHS}
          renderItem={({item, index}) => (
            <VStack
              style={{
                height: heightItem,
                width: width - 32,
                backgroundColor: getColor(index),
                justifyContent: 'flex-end',
                borderRadius: 16,
                marginLeft: 16,
              }}>
              <Image source={item} style={{height: '90%', width: '100%'}} />
            </VStack>
          )}
        />

        <View style={styles.groupButton}>
          <Button
            children={'Login with Facebook'}
            style={styles.button}
            status="primary"
            accessoryLeft={<Icon pack="assets" name="fb" />}
          />
          <Button
            children={'Login with Google'}
            style={styles.button}
            status="danger"
            accessoryLeft={<Icon pack="assets" name="google" />}
          />
          <Button
            children={'Login with Apple'}
            style={styles.button}
            accessoryLeft={<Icon pack="assets" name="apple" />}
          />
        </View>
      </Content>
      <Text onPress={goBack} category="s2-b" marginBottom={8} center>
        DON’T HAVE AN ACCOUNT? SIGN UP
      </Text>
    </Container>
  );
});

export default Walkthroughs03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
  },
  button: {
    marginTop: 16,
  },
  groupButton: {
    marginHorizontal: 48,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
