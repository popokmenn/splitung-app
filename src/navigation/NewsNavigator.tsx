import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NewsStackParamList} from './types';

import NewsIntro from 'screens/News/NewIntro';
import News01 from 'screens/News/News01';
import News02 from 'screens/News/News02';
import News03 from 'screens/News/News03';
import News04 from 'screens/News/News04';
import News05 from 'screens/News/News05';
import News06 from 'screens/News/News06';
import News07 from 'screens/News/News07';
import News08 from 'screens/News/News08';
import News09 from 'screens/News/News09';
import News10 from 'screens/News/News10';
import News11 from 'screens/News/News11';
import News12 from 'screens/News/News12';

const NewsStack = createStackNavigator<NewsStackParamList>();

export function NewsNavigator() {
  return (
    <NewsStack.Navigator
      initialRouteName="NewsIntro"
      screenOptions={{
        headerShown: false,
      }}>
      <NewsStack.Screen name="NewsIntro" component={NewsIntro} />
      <NewsStack.Screen name="News01" component={News01} />
      <NewsStack.Screen name="News02" component={News02} />
      <NewsStack.Screen name="News03" component={News03} />
      <NewsStack.Screen name="News04" component={News04} />
      <NewsStack.Screen name="News05" component={News05} />
      <NewsStack.Screen name="News06" component={News06} />
      <NewsStack.Screen name="News07" component={News07} />
      <NewsStack.Screen name="News08" component={News08} />
      <NewsStack.Screen name="News09" component={News09} />
      <NewsStack.Screen name="News10" component={News10} />
      <NewsStack.Screen name="News11" component={News11} />
      <NewsStack.Screen name="News12" component={News12} />
    </NewsStack.Navigator>
  );
}
