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
  Icon,
} from '@ui-kitten/components';

import {Container, Content, Text} from 'components';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './elements/Pagination';
import {DATA_WALKTHROUGHS} from 'constants/data';

const Walkthroughs02 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const sizeImg = 295 * (width / 375);

  const progress = useSharedValue(0);
  return (
    <Container useSafeArea={false} style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Layout
          level="7"
          style={{
            width: width,
            height: 440 * (height / 812),
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            marginBottom: 24,
          }}>
          <Carousel
            vertical={false}
            width={width}
            windowSize={width}
            data={DATA_WALKTHROUGHS}
            autoPlay
            autoPlayInterval={2500}
            style={{width: width}}
            onProgressChange={(_, absoluteProgress) =>
              (progress.value = absoluteProgress)
            }
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: width,
                    height: 440 * (height / 812),
                    justifyContent: 'flex-end',
                  }}>
                  <Image
                    source={item}
                    style={{
                      width: sizeImg,
                      height: sizeImg,
                      marginLeft: 32,
                      alignSelf: 'center',
                    }}
                  />
                </View>
              );
            }}
          />
        </Layout>
        <View style={styles.pagination}>
          {DATA_WALKTHROUGHS.map((item, i) => {
            return (
              <Pagination
                backgroundColor={theme['color-button-primary']}
                index={i}
                key={i}
                animValue={progress}
                length={DATA_WALKTHROUGHS.length}
              />
            );
          })}
        </View>
        <Icon pack="assets" name="logo" style={styles.logo} />
        <Text category="t5" center marginHorizontal={40}>
          Advertise No Matter If You Are Big Or Small
        </Text>
      </Content>
      <Button
        children={`Let's go`}
        style={[styles.button, {marginBottom: bottom + 8}]}
        status="primary"
        onPress={goBack}
      />
    </Container>
  );
});

export default Walkthroughs02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  button: {
    marginHorizontal: 44,
    marginTop: 16,
  },
  groupButton: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 24,
    marginTop: 40,
  },
});
