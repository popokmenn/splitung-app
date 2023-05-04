import * as React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Icon,
  Divider,
  Button,
} from '@ui-kitten/components';
import BottomSheet from '@gorhom/bottom-sheet';

import {Container, HStack, NavigationAction, Text} from 'components';
import {Images} from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Media05 = React.memo(() => {
  const theme = useTheme();
  const {height} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [isLike, setIsLike] = React.useState(false);
  const toggleLike = () => {
    setIsLike(!isLike);
  };
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // variables
  const snapPoints = React.useMemo(() => ['47%', '85%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <Container style={styles.container} level="7">
      <TopNavigation
        appearance="control"
        accessoryLeft={<NavigationAction icon="arrow-back" status="white" />}
        accessoryRight={<NavigationAction icon="option" status="white" />}
      />
      <View style={styles.information}>
        <Image
          source={Images.media.disk}
          // @ts-ignore
          style={styles.image}
        />
        <HStack itemsCenter>
          <Text status="white" category="t5-sb">
            There Is No Competition
          </Text>
          <TouchableOpacity onPress={toggleLike}>
            <Icon
              name="heart"
              pack="assets"
              style={[styles.heartIcon, isLike && styles.activeHeartIcon]}
            />
          </TouchableOpacity>
        </HStack>
        <Text category="t7" status="white" opacity={0.5}>
          Kevin Franklin
        </Text>
        <HStack mt={16}>
          <Button
            style={[styles.button, {marginRight: 15}]}
            status="success"
            children={'Play'}
            accessoryLeft={<Icon pack="assets" name="play-music" />}
          />
          <Button
            style={styles.button}
            status="secondary"
            children={'Shuffle'}
            accessoryLeft={<Icon pack="assets" name="shuffle" />}
          />
        </HStack>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}
        onChange={handleSheetChanges}
        backgroundStyle={{backgroundColor: theme['background-basic-color-10']}}
        style={styles.bottomSheet}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          contentContainerStyle={{
            paddingBottom: height / 2,
            backgroundColor: theme['background-basic-color-10'],
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.item}>
                <Text status="white" marginRight={10}>
                  {index + 1}.
                </Text>
                <View style={{flex: 1}}>
                  <View style={styles.row}>
                    <Text status="white" category="t7-m">
                      {item.name}
                    </Text>
                    <Icon pack="assets" name="option" style={styles.icon} />
                  </View>
                  <Text
                    status="white"
                    marginBottom={16}
                    category="s2"
                    opacity={0.5}
                    marginTop={4}>
                    {item.artist}
                  </Text>
                  <Divider />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </BottomSheet>
    </Container>
  );
});

export default Media05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  information: {
    paddingHorizontal: 24,
  },
  item: {
    flexDirection: 'row',
    marginLeft: 24,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: '#FFFFFF50',
    marginRight: 24,
  },
  handleIndicatorStyle: {
    backgroundColor: '#FFFFFF50',
  },
  handleStyle: {
    backgroundColor: 'background-basic-color-10',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 32,
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: 'background-basic-color-10',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button: {
    flex: 1,
  },
  heartIcon: {
    width: 16,
    height: 16,
    tintColor: '#FFFFFF50',
  },
  activeHeartIcon: {
    tintColor: '#FFFFFF',
  },
});
const data = [
  {name: 'Bad Romance', artist: ' Lady Gaga'},
  {name: `Driver's License`, artist: 'Olivia Rodrigo'},
  {name: 'Counting Stars', artist: 'OneRepublic'},
  {name: 'Shape of You', artist: 'Ed Sheeran'},
  {name: "Hips Don't Lie", artist: 'Shakira ft. Wyclef Jean'},
  {name: 'Bad Romance', artist: ' Lady Gaga'},
  {name: `Driver's License`, artist: 'Olivia Rodrigo'},
  {name: 'Counting Stars', artist: 'OneRepublic'},
  {name: 'Shape of You', artist: 'Ed Sheeran'},
  {name: "Hips Don't Lie", artist: 'Shakira ft. Wyclef Jean'},
];
