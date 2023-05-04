import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileStackParamList} from './types';
import ProfileIntro from 'screens/Profile/ProfileIntro';
import Profile01 from 'screens/Profile/Profile01';
import Profile02 from 'screens/Profile/Profile02';
import Profile03 from 'screens/Profile/Profile03';
import Profile04 from 'screens/Profile/Profile04';
import Profile05 from 'screens/Profile/Profile05';
import Profile06 from 'screens/Profile/Profile06';
import Profile07 from 'screens/Profile/Profile07';
import Profile08 from 'screens/Profile/Profile08';
import Profile09 from 'screens/Profile/Profile09';
import Profile10 from 'screens/Profile/Profile10';

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileIntro"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="ProfileIntro" component={ProfileIntro} />
      <ProfileStack.Screen name="Profile01" component={Profile01} />
      <ProfileStack.Screen name="Profile02" component={Profile02} />
      <ProfileStack.Screen name="Profile03" component={Profile03} />
      <ProfileStack.Screen name="Profile04" component={Profile04} />
      <ProfileStack.Screen name="Profile05" component={Profile05} />
      <ProfileStack.Screen name="Profile06" component={Profile06} />
      <ProfileStack.Screen name="Profile07" component={Profile07} />
      <ProfileStack.Screen name="Profile08" component={Profile08} />
      <ProfileStack.Screen name="Profile09" component={Profile09} />
      <ProfileStack.Screen name="Profile10" component={Profile10} />
    </ProfileStack.Navigator>
  );
}
