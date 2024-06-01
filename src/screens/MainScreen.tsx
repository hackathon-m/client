import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import MyCouponScreen from './MyCoupon';
import MyPageScreen from './MyPage';
import SuggestionScreen from './SuggestionScreen';

import { TabNavigatorParamList } from '@type/params/loginStack';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SuggestionScreen" component={SuggestionScreen} />
      <Tab.Screen name="MyCouponScreen" component={MyCouponScreen} />
      <Tab.Screen name="MyPageScreen" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
