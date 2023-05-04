import * as React from 'react';
import {View, Image, LayoutChangeEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Button,
  useTheme,
} from '@ui-kitten/components';
import {Container, Content, HStack, Text, VStack} from 'components';
import {DATA_WALKTHROUGHS_08} from 'constants/data';
import Carousel from 'react-native-reanimated-carousel';
import {Images} from 'assets/images';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from './elements/Pagination';

const Walkthroughs08 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const data = DATA_WALKTHROUGHS_08;
  const theme = useTheme();
  const [heightItem, setHeightItem] = React.useState(0);
  const onLayoutImg = (event: LayoutChangeEvent) => {
    setHeightItem(event.nativeEvent.layout.height);
  };
  const progress = useSharedValue(0);
  return (
    <Container>
      <Content>
        <View>
          <Carousel
            width={width}
            windowSize={width}
            data={data}
            loop={false}
            height={(215 + width) * (height / 812)}
            style={{width: '100%'}}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 1,
              parallaxScrollingOffset: 0,
            }}
            onProgressChange={(offsetProgress, absoluteProgress) => {
              progress.value = absoluteProgress;
            }}
            renderItem={({item, index}) => {
              return (
                <View>
                  <Image
                    source={item.image}
                    onLayout={onLayoutImg}
                    style={{width: width, aspectRatio: 1 / 1, marginBottom: 32}}
                  />
                  {index === 0 ? (
                    <VStack mh={40}>
                      <Text category="t1-sb" status="info">
                        {'Welcome'}
                      </Text>
                      <HStack justify="flex-start" itemsCenter>
                        <Text category="t1-sb" status="info" marginRight={12}>
                          {'to'}
                        </Text>
                        <Image
                          source={Images.lightLogo}
                          //@ts-ignore
                          style={{...styles.logo}}
                        />
                      </HStack>
                    </VStack>
                  ) : (
                    <Text category="t1-sb" marginHorizontal={40}>
                      {item.title}
                    </Text>
                  )}

                  <Text category="t5-sb" marginHorizontal={40} marginTop={24}>
                    {item.describe}
                  </Text>
                </View>
              );
            }}
          />
          <View style={{...styles.pagination, top: heightItem}}>
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
        </View>
        <VStack mh={40}>
          <Button
            children={'SIGN UP'}
            status="primary"
            style={styles.button}
            onPress={goBack}
          />
          <Button children={'SIGN IN'} style={styles.button} onPress={goBack} />
        </VStack>
      </Content>
    </Container>
  );
});

export default Walkthroughs08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 24,
    aspectRatio: 4 / 1,
  },
  button: {
    marginBottom: 24,
  },
  pagination: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
