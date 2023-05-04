import * as React from 'react';
import {ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Input,
  Icon,
  Avatar,
  Divider,
} from '@ui-kitten/components';

import {Container, HStack, NavigationAction, Text, VStack} from 'components';
import {Images} from 'assets/images';
import BottomSheet from '@gorhom/bottom-sheet';
import keyExtractor from 'utils/keyExtractor';

const Media06 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ['40%'], []);
  const handleSheetChanges = React.useCallback((index: number) => {}, []);
  return (
    <Container style={styles.container}>
      <ImageBackground
        source={Images.media['song-04']}
        style={{width: width, height: height, paddingTop: top + 8}}>
        <HStack itemsCenter>
          <NavigationAction icon="close" status="white" />
          <Text category="t7-m" status="white">{`2:30`}</Text>
          <NavigationAction icon="heart" status="white" />
        </HStack>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={styles.handleIndicatorStyle}
          backgroundStyle={{
            backgroundColor: theme['background-basic-color-6'],
          }}>
          <FlatList
            data={data}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.content}
            renderItem={({item}) => {
              return (
                <HStack justify="flex-start" mh={24}>
                  <Avatar source={item.avatar} size="tiny" />
                  <VStack
                    maxWidth={287 * (width / 375)}
                    style={{flex: 1}}
                    ml={8}>
                    <Text
                      uppercase
                      category="s2-b"
                      status="white"
                      marginBottom={8}>
                      {item.name}
                    </Text>
                    <Text status="brown" category="s1">
                      {item.comment}
                    </Text>
                    <Divider style={styles.divider} />
                  </VStack>
                </HStack>
              );
            }}
          />
        </BottomSheet>
        <HStack
          level="6"
          style={[styles.bottom, {paddingBottom: bottom + 8, width: width}]}>
          <Input
            style={styles.input}
            status="basic"
            size="medium"
            placeholder="Comment"
          />
          <TouchableOpacity style={styles.buttonSmile}>
            <Icon pack="assets" name="smile" style={styles.iconSmile} />
          </TouchableOpacity>
        </HStack>
      </ImageBackground>
    </Container>
  );
});

export default Media06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'transparent',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingTop: 8,
  },
  handleIndicatorStyle: {
    backgroundColor: '#FFFFFF50',
    width: 64,
  },
  iconSmile: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  buttonSmile: {
    backgroundColor: 'background-basic-color-5',
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF20',
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF20',
    marginVertical: 16,
  },
  content: {
    paddingBottom: 88,
    paddingTop: 8,
  },
});
const data = [
  {
    name: 'glen morrison',
    avatar: Images.avatar['avatar-04'],
    comment: 'Beauty Pageants Should You Let Your Teen Enter Them',
  },
  {
    name: 'John Banks',
    avatar: Images.avatar['avatar-05'],
    comment: 'Internet Advertising Trends You Won T Be Disappointed',
  },
  {
    name: 'John Banks',
    avatar: Images.avatar['avatar-06'],
    comment: 'Beauty !!! Awesome 🎉',
  },
  {
    name: 'John Banks',
    avatar: Images.avatar['avatar-07'],
    comment: 'Awesome 🎉',
  },
  {
    name: 'John Banks',
    avatar: Images.avatar['avatar-08'],
    comment: 'Awesome 🎉',
  },
  {
    name: 'John Banks',
    avatar: Images.avatar['avatar-02'],
    comment: 'Awesome 🎉',
  },
];
