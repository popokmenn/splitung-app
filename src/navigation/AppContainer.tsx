import * as React from 'react';
import {View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from '@ui-kitten/components';

import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import RNBootSplash from 'react-native-bootsplash';

import {DashboardNavigator} from './DashboardNavigator';
import {CostNavigator} from './CostNavigator';
import SignIn from 'screens/Auth/SignIn';
import {Provider} from 'react-redux';
import store from '../store';
import SignUp from 'screens/Auth/SignUp';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;

const AppContainer = () => {
  const themes = useTheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => RNBootSplash.hide({fade: true})}>
      <View
        style={{backgroundColor: themes['background-basic-color-1'], flex: 1}}>
        <Stack.Navigator
          initialRouteName={'SignIn'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Dashboard" component={DashboardNavigator} />
          <Stack.Screen name="Cost" component={CostNavigator} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="CreateAccount" component={SignUp} />

          {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Walkthroughs" component={WalkthroughsNavigator} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="Menu" component={MenuNavigator} />
          <Stack.Screen name="Profile" component={ProfileNavigator} />
          <Stack.Screen name="News" component={NewsNavigator} />
          <Stack.Screen name="Media" component={MediaNavigator} />
          <Stack.Screen name="Statics" component={StaticsNavigator} /> */}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

// export default AppContainer;
