import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
  Icon,
} from '@ui-kitten/components';
import Carousel from 'react-native-reanimated-carousel';

import {Container, Content, Text} from 'components';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from './elements/Pagination';
import { DATA_WALKTHROUGHS } from 'constants/data';

const Walkthroughs01 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const sizeImg = 295 * (width / 375);
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Carousel
          vertical={false}
          width={width}
          windowSize={width}
          height={sizeImg}
          data={DATA_WALKTHROUGHS}
          autoPlay
          autoPlayInterval={1500}
          style={{width: width}}
          onProgressChange={(_, absoluteProgress) =>
            (progress.value = absoluteProgress)
          }
          renderItem={({item}) => {
            return (
              <Image
                source={item}
                style={{
                  width: sizeImg,
                  height: sizeImg,
                  alignSelf: 'center',
                }}
              />
            );
          }}
        />
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
          <Text
            center
            marginTop={16}
            category="s2"
            status="info"
            onPress={goBack}>
            Skip, Thank you
          </Text>
        </View>
      </Content>
    </Container>
  );
});

export default Walkthroughs01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    flexGrow: 1,
    paddingBottom: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    marginHorizontal: 44,
    marginTop: 24,
  },
  groupButton: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});
