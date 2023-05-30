import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';

import Cost from 'screens/Cost/components/cost.container.component';
import AddPerson from 'screens/Cost/form/add-person.component';

const NewsStack = createStackNavigator<RootStackParamList>();

export function CostNavigator() {
  return (
    <NewsStack.Navigator
      initialRouteName="AddCost"
      screenOptions={{
        headerShown: false,
      }}>
      <NewsStack.Screen name="AddCost" component={Cost} />
      <NewsStack.Screen name="AddPerson" component={AddPerson} />
    </NewsStack.Navigator>
  );
}
