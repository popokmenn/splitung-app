import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Button,
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import {Container, Content, HStack, Text, VStack} from 'components';
import {Images} from 'assets/images';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import {DATA_WALKTHROUGHS_10} from 'constants/data';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from './elements/Pagination';

const Walkthroughs10 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const data = DATA_WALKTHROUGHS_10;
  const progress = useSharedValue(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const ref=React.useRef<ICarouselInstance>(null)

  const onNext=()=>{ref.current?.next()}
  const onPrev=()=>{ref.current?.prev()}
  return (
    <Container>
      <Content>
        <HStack mh={32} itemsCenter>
          <Image source={Images.lightLogo} />
          <Text onPress={goBack} category="s2-b" status="info">
            SKIP!
          </Text>
        </HStack>
        <Carousel
          style={{width: '100%'}}
          vertical={false}
          data={data}
          width={width}
          height={height / 1.3}
          loop={false}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            progress.value = absoluteProgress;
          }}
          ref={ref}
          onSnapToItem={e=>setActiveIndex(e)}
          renderItem={({item}) => {
            return (
              <View>
                <Image source={item.image} />
                <VStack mh={32}>
                  <Text category="t3-sb" status="info" marginBottom={20}>
                    {item.title}
                  </Text>
                  <Text category="t5">{item.describe}</Text>
                </VStack>
              </View>
            );
          }}
        />
        <HStack mh={32}>
          <Button
            size="rounded"
            disabled={activeIndex===0}
            status='primary'
            accessoryLeft={<Icon pack="assets" name="left-play" />}
            onPress={onPrev}
          />
          <HStack style={styles.pagination}>
            {data.map((item, i) => {
              return (
                <Pagination
                  key={i}
                  index={i}
                  backgroundColor={theme['text-info-color']}
                  length={data.length}
                  animValue={progress}
                />
              );
            })}
          </HStack>
          <Button
            size="rounded"
            status='primary'
            accessoryLeft={<Icon pack="assets" name="right-play" />}
            onPress={onNext}
          />
        </HStack>
      </Content>
    </Container>
  );
});

export default Walkthroughs10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  pagination: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
