import * as React from 'react';
import {useStyleSheet} from '@ui-kitten/components';

import {ActivityIndicator, View} from 'react-native';
import styles from '../cost.style';

const Loading = () => {
  return (
    <View
      style={[
        styles.centeredView,
        {
          zIndex: 10,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      ]}>
      <View
        style={[
          styles.modalView,
          {height: 100, width: 100, justifyContent: 'center'},
        ]}>
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};
export default Loading;
