import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WalkthroughsStackParamList} from './types';
import WalkthroughsIntro from 'screens/Walkthroughs/WalkthroughsIntro';
import Walkthroughs01 from 'screens/Walkthroughs/Walkthroughs01';
import Walkthroughs02 from 'screens/Walkthroughs/Walkthroughs02';
import Walkthroughs03 from 'screens/Walkthroughs/Walkthroughs03';
import Walkthroughs04 from 'screens/Walkthroughs/Walkthroughs04';
import Walkthroughs05 from 'screens/Walkthroughs/Walkthroughs05';
import Walkthroughs06 from 'screens/Walkthroughs/Walkthroughs06';
import Walkthroughs07 from 'screens/Walkthroughs/Walkthroughs07';
import Walkthroughs08 from 'screens/Walkthroughs/Walkthroughs08';
import Walkthroughs09 from 'screens/Walkthroughs/Walkthroughs09';
import Walkthroughs10 from 'screens/Walkthroughs/Walkthroughs10';
const Stack = createStackNavigator<WalkthroughsStackParamList>();

export function WalkthroughsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="WalkthroughsIntro"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WalkthroughsIntro" component={WalkthroughsIntro} />
      <Stack.Screen name="Walkthroughs01" component={Walkthroughs01} />
      <Stack.Screen name="Walkthroughs02" component={Walkthroughs02} />
      <Stack.Screen name="Walkthroughs03" component={Walkthroughs03} />
      <Stack.Screen name="Walkthroughs04" component={Walkthroughs04} />
      <Stack.Screen name="Walkthroughs05" component={Walkthroughs05} />
      <Stack.Screen name="Walkthroughs06" component={Walkthroughs06} />
      <Stack.Screen name="Walkthroughs07" component={Walkthroughs07} />
      <Stack.Screen name="Walkthroughs08" component={Walkthroughs08} />
      <Stack.Screen name="Walkthroughs09" component={Walkthroughs09} />
      <Stack.Screen name="Walkthroughs10" component={Walkthroughs10} />
    </Stack.Navigator>
  );
}
