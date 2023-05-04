import * as React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Divider,
  Icon,
} from '@ui-kitten/components';

import {Container, Text, VStack} from 'components';
import keyExtractor from 'utils/keyExtractor';
import {DATA_MENU} from 'constants/data';

const Menu02 = React.memo(() => {
  const {goBack} = useNavigation();
  const {top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(2);
  return (
    <Container style={styles.container} useSafeArea={false} level="9">
      <FlatList
        data={DATA_MENU}
        contentContainerStyle={[styles.contentContainer, {marginTop: 36 + top}]}
        keyExtractor={keyExtractor}
        ListHeaderComponent={() => {
          return <Icon pack="assets" name="white-logo" style={styles.logo} />;
        }}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                setActiveIndex(item.index);
              }}>
              {activeIndex === item.index && <Divider style={styles.divider} />}
              <Text
                category="t5-sb"
                status="white"
                center
                marginHorizontal={48}>
                {item.item}
              </Text>
              {activeIndex === item.index && <Divider style={styles.divider} />}
            </TouchableOpacity>
          );
        }}
      />
      <VStack style={styles.navigationAction} onPress={goBack}>
        <Icon pack="assets" name="arrow-top" style={styles.arrowTop} />
      </VStack>
    </Container>
  );
});

export default Menu02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 40,
    backgroundColor: 'background-basic-color-10',
    flexGrow: 1,
    borderRadius: 24,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 40,
    paddingVertical: 4,
  },
  divider: {
    width: 40,
    height: 2,
  },
  logo: {
    width: 64,
    height: 64,
    marginTop: 30,
    marginBottom: 32,
    alignSelf: 'center',
  },
  navigationAction: {
    alignSelf: 'center',
    marginTop: -24,
    marginBottom: 80,
    backgroundColor: 'background-basic-color-1',
    padding: 12,
    borderRadius: 99,
  },
  arrowTop: {
    tintColor: 'text-basic-color',
  },
});
