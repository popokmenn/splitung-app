import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';

import Cost from 'screens/Cost/cost.component';
import Scan from 'screens/Cost/scan.component';

const NewsStack = createStackNavigator<RootStackParamList>();

export function CostNavigator() {
  return (
    <NewsStack.Navigator
      initialRouteName="Cost"
      screenOptions={{
        headerShown: false,
      }}>
      <NewsStack.Screen name="Cost" component={Cost} />
      <NewsStack.Screen name="Scan" component={Scan} />
    </NewsStack.Navigator>
  );
}
