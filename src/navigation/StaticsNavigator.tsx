import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StaticsStackParamList} from './types';
import StaticsIntro from 'screens/Statics/StaticsIntro';
import Statics01 from 'screens/Statics/Statics01';
import Statics02 from 'screens/Statics/Statics02';
import Statics03 from 'screens/Statics/Statics03';
import Statics04 from 'screens/Statics/Statics04';
import Statics05 from 'screens/Statics/Statics05';
import Statics06 from 'screens/Statics/Statics06';
import Statics07 from 'screens/Statics/Statics07';
import Statics08 from 'screens/Statics/Statics08';
import Statics09 from 'screens/Statics/Statics09';
import Statics10 from 'screens/Statics/Statics10';
import {FocusAwareStatusBar} from 'components';
import { View } from 'react-native';

const StaticsStack = createStackNavigator<StaticsStackParamList>();

export function StaticsNavigator() {
  return (
    <View style={{flex: 1}}>
      <FocusAwareStatusBar barStyle={'light-content'} />
      <StaticsStack.Navigator
        initialRouteName="StaticsIntro"
        screenOptions={{
          headerShown: false,
        }}>
        <StaticsStack.Screen name="StaticsIntro" component={StaticsIntro} />
        <StaticsStack.Screen name="Statics01" component={Statics01} />
        <StaticsStack.Screen name="Statics02" component={Statics02} />
        <StaticsStack.Screen name="Statics03" component={Statics03} />
        <StaticsStack.Screen name="Statics04" component={Statics04} />
        <StaticsStack.Screen name="Statics05" component={Statics05} />
        <StaticsStack.Screen name="Statics06" component={Statics06} />
        <StaticsStack.Screen name="Statics07" component={Statics07} />
        <StaticsStack.Screen name="Statics08" component={Statics08} />
        <StaticsStack.Screen name="Statics09" component={Statics09} />
        <StaticsStack.Screen name="Statics10" component={Statics10} />
      </StaticsStack.Navigator>
    </View>
  );
}
