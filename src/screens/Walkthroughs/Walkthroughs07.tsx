import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  useTheme,
} from '@ui-kitten/components';

import {Container, Content, Text} from 'components';
import {Images} from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import {DATA_WALKTHROUGHS_07} from 'constants/data';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from './elements/Pagination';

const Walkthroughs07 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const data = DATA_WALKTHROUGHS_07;
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <Image
        source={Images.lightLogo}
        // @ts-ignore
        style={styles.logo}
      />
      <Content style={styles.content}>
        <Carousel
          data={data}
          width={width}
          height={height / 1.5}
          loop={false}
          style={{width: '100%'}}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 0,
          }}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  source={item.image}
                  style={{width: width, height: width}}
                />
                <Text category="t5-sb" marginHorizontal={32} marginTop={44}>
                  {item.title}
                </Text>
              </View>
            );
          }}
        />
      </Content>
      <View style={styles.pagination}>
        {data.map((item, i) => {
          return (
            <Pagination
              backgroundColor={theme['text-info-color']}
              index={i}
              key={i}
              animValue={progress}
              length={data.length}
            />
          );
        })}
      </View>
      <Layout level="5" style={{paddingBottom: bottom + 12, ...styles.layout}}>
        <Text category="t5-sb" status="primary" marginBottom={16}>
          Welcome back
        </Text>
        <Input
          placeholder="+84"
          accessoryLeft={<Icon pack="assets" name="location" />}
        />
        <Text
          category="s1"
          marginTop={12}
          status="primary"
          marginBottom={20}
          onPress={goBack}>
          or sign in with social media
        </Text>
      </Layout>
    </Container>
  );
});

export default Walkthroughs07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  logo: {
    height: 40,
    aspectRatio: 4 / 1,
    marginBottom: 12,
    marginLeft: 32,
  },
  content: {},
  layout: {
    paddingTop: 32,
    paddingHorizontal: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  pagination: {
    marginBottom: 16,
    marginLeft: 32,
    flexDirection: 'row',
  },
});
