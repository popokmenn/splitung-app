import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList} from './types';
import AuthIntro from 'screens/Auth/AuthIntro';
import SignIn01 from 'screens/Auth/SignIn01';
import SignIn02 from 'screens/Auth/SignIn02';
import SignIn03 from 'screens/Auth/SignIn03';
import SignUp01 from 'screens/Auth/SignUp01';
import SignUp02 from 'screens/Auth/SignUp02';
import SignUp03 from 'screens/Auth/SignUp03';
import KycScreen from 'screens/Auth/KycScreen';
import Verify from 'screens/Auth/Verify';
import CreateAccount from 'screens/Auth/CreateAccount';
import SetupInterest from 'screens/Auth/SetupInterest';
import ForgotPassword from 'screens/Auth/ForgotPassword';

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AuthIntro"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthIntro" component={AuthIntro} />
      <Stack.Screen name="SignIn01" component={SignIn01} />
      <Stack.Screen name="SignIn02" component={SignIn02} />
      <Stack.Screen name="SignIn03" component={SignIn03} />
      <Stack.Screen name="SignUp01" component={SignUp01} />
      <Stack.Screen name="SignUp02" component={SignUp02} />
      <Stack.Screen name="SignUp03" component={SignUp03} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="KYC" component={KycScreen} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="SetupInterest" component={SetupInterest} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
