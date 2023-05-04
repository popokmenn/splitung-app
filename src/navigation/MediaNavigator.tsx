import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MediaStackParamList} from './types';
import MediaIntro from 'screens/Media/MediaIntro';
import Media01 from 'screens/Media/Media01';
import Media02 from 'screens/Media/Media02';
import Media03 from 'screens/Media/Media03';
import Media04 from 'screens/Media/Media04';
import Media05 from 'screens/Media/Media05';
import Media06 from 'screens/Media/Media06';
import Media07 from 'screens/Media/Media07';
import Media08 from 'screens/Media/Media08';
import Media09 from 'screens/Media/Media09';
import Media10 from 'screens/Media/Media10';
import { FocusAwareStatusBar } from 'components';
import { View } from 'react-native';

const MediaStack = createStackNavigator<MediaStackParamList>();

export function MediaNavigator() {
  return (
    <View style={{flex: 1}}>
      <FocusAwareStatusBar barStyle={'light-content'} />
      <MediaStack.Navigator
        initialRouteName="MediaIntro"
        screenOptions={{
          headerShown: false,
        }}>
        <MediaStack.Screen name="MediaIntro" component={MediaIntro} />
        <MediaStack.Screen name="Media01" component={Media01} />
        <MediaStack.Screen name="Media02" component={Media02} />
        <MediaStack.Screen name="Media03" component={Media03} />
        <MediaStack.Screen name="Media04" component={Media04} />
        <MediaStack.Screen name="Media05" component={Media05} />
        <MediaStack.Screen name="Media06" component={Media06} />
        <MediaStack.Screen name="Media07" component={Media07} />
        <MediaStack.Screen name="Media08" component={Media08} />
        <MediaStack.Screen name="Media09" component={Media09} />
        <MediaStack.Screen name="Media10" component={Media10} />
      </MediaStack.Navigator>
    </View>
  );
}
