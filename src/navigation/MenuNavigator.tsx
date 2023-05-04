import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MenuStackParamList} from './types';
import MenuIntro from 'screens/Menu/MenuIntro';
import Menu01 from 'screens/Menu/Menu01/Menu01';
import Menu02 from 'screens/Menu/Menu02/Menu02';
import Menu03 from 'screens/Menu/Menu03/Menu03';
import Menu04 from 'screens/Menu/Menu04/Menu04';
import Menu05 from 'screens/Menu/Menu05/Menu05';
import Menu06 from 'screens/Menu/Menu06/Menu06';
import Menu07 from 'screens/Menu/Menu07/Menu07';
import Menu08 from 'screens/Menu/Menu08/Menu08';
import Menu09 from 'screens/Menu/Menu09/Menu09';
import Menu10 from 'screens/Menu/Menu10/Menu10';
import Menu11 from 'screens/Menu/Menu11/Menu11';
import Menu12 from 'screens/Menu/Menu12/Menu12';

const MenuStack = createStackNavigator<MenuStackParamList>();

export function MenuNavigator() {
  return (
    <MenuStack.Navigator
      initialRouteName="MenuIntro"
      screenOptions={{
        headerShown: false,
      }}>
      <MenuStack.Screen name="MenuIntro" component={MenuIntro} />
      <MenuStack.Screen name="Menu01" component={Menu01} />
      <MenuStack.Screen name="Menu02" component={Menu02} />
      <MenuStack.Screen name="Menu03" component={Menu03} />
      <MenuStack.Screen name="Menu04" component={Menu04} />
      <MenuStack.Screen name="Menu05" component={Menu05} />
      <MenuStack.Screen name="Menu06" component={Menu06} />
      <MenuStack.Screen name="Menu07" component={Menu07} />
      <MenuStack.Screen name="Menu08" component={Menu08} />
      <MenuStack.Screen name="Menu09" component={Menu09} />
      <MenuStack.Screen name="Menu10" component={Menu10} />
      <MenuStack.Screen name="Menu11" component={Menu11} />
      <MenuStack.Screen name="Menu12" component={Menu12} />
    </MenuStack.Navigator>
  );
}
