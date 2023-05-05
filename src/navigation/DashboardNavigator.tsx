import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';

import Dashboard from 'screens/Dashboard/dashboard.component';

const NewsStack = createStackNavigator<RootStackParamList>();

export function DashboardNavigator() {
  return (
    <NewsStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <NewsStack.Screen name="Dashboard" component={Dashboard} />
    </NewsStack.Navigator>
  );
}
