import * as React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {Text} from 'components';
import {Images} from 'assets/images';
import {useLayout} from 'hooks';

interface IDrawerTabProps {
  data: {title: string; number: number}[];
}

const DrawerTab = React.memo(({data}: IDrawerTabProps) => {
  const styles = useStyleSheet(themedStyles);
  const {width, height} = useLayout();
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {data.map((item, i) => {
          const isActive = activeIndex === i;
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setActiveIndex(i);
              }}
              key={i}
              style={[styles.button, isActive && styles.activeStyle]}>
              <Text category="t7-sb" status={isActive ? 'white' : 'basic'}>
                {item.title}
              </Text>
              {isActive && (
                <Text category="t7-sb" status="placeholder">
                  {item.number}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <Image
        source={Images.menu.menu10}
        style={{
          width: 236 * (width / 375),
          height: 182 * (height / 812),
        }}
      />
    </View>
  );
});

export default DrawerTab;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    borderLeftWidth: 0.6,
    borderColor: 'background-basic-color-2',
    justifyContent: 'space-between',
  },
  button: {
    paddingRight: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 16,
    justifyContent: 'space-between',
  },
  activeStyle: {
    paddingHorizontal: 16,
    backgroundColor: 'background-basic-color-5',
  },
  content: {
    paddingHorizontal: 24,
  },
});
