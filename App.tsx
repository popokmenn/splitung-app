import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as darkTheme} from './src/constants/theme/dark.json';
import {default as lightTheme} from './src/constants/theme/light.json';
import {default as customTheme} from './src/constants/theme/appTheme.json';
import {default as customMapping} from './src/constants/theme/mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import ThemeContext from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContainer from 'navigation/AppContainer';
import AssetsIconsPack from 'assets/AssetsIconsPack';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs([
  'Sending `onReanimatedPropsChange` with no listeners registered.',
]);
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    AsyncStorage.getItem('theme').then(value => {
      if (value === 'light' || value === 'dark') {
        setTheme(value);
      }
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    AsyncStorage.setItem('theme', nextTheme).then(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <IconRegistry icons={[AssetsIconsPack, EvaIconsPack]} />
        <ApplicationProvider
          {...eva}
          theme={
            theme === 'light'
              ? {...eva.light, ...customTheme, ...lightTheme}
              : {...eva.dark, ...customTheme, ...darkTheme}
          }
          customMapping={{...eva.mapping, ...customMapping}}>
          <StatusBar
            barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            translucent={true}
            backgroundColor={'#00000000'}
          />
          <AppContainer />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
