import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import MyCouponScreen from './MyCoupon';
import MyPageScreen from './MyPage';
import SuggestionScreen from './SuggestionScreen';

import { TabNavigatorParamList } from '@type/params/loginStack';

import HomeNavigation from '@assets/images/HomeNavigation.svg';
import BattleNavigation from '@assets/images/BattleNavigation.svg';
import SuggestionNavigation from '@assets/images/SuggestionNavigation.svg';
import MyPageNavigation from '@assets/images/MyPageNavigation.svg';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#262626',
          padding: 24,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ route }) => ({
          // title 없애고 custom 하기 위한 옵션
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <HomeNavigation />
                <Text style={{ color: 'white', marginTop: 8 }}>홈</Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="SuggestionScreen"
        component={SuggestionScreen}
        options={({ route }) => ({
          // title 없애고 custom 하기 위한 옵션
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <BattleNavigation />
                <Text style={{ color: 'white', marginTop: 8 }}>배틀</Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="MyCouponScreen"
        component={MyCouponScreen}
        options={({ route }) => ({
          // title 없애고 custom 하기 위한 옵션
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SuggestionNavigation />
                <Text style={{ color: 'white', marginTop: 8 }}>제안</Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={({ route }) => ({
          // title 없애고 custom 하기 위한 옵션
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MyPageNavigation />
                <Text style={{ color: 'white', marginTop: 8 }}>마이</Text>
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
