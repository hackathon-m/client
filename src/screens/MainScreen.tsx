import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyPageScreen from './MyPage';
import HomeScreen from './HomeScreen';
import MyCouponScreen from './MyCoupon';
import SuggestionScreen from './SuggestionScreen';

import { TabNavigatorParamList } from '@type/params/loginStack';

import HomeNavigation from '@assets/images/HomeNavigation.svg';
import BattleNavigation from '@assets/images/BattleNavigation.svg';
import MyPageNavigation from '@assets/images/MyPageNavigation.svg';
import SuggestionNavigation from '@assets/images/SuggestionNavigation.svg';
import HomeNavigationSelected from '@assets/images/HomeNavigationSelected.svg';
import BattleNavigationSelected from '@assets/images/BattleNavigationSelected.svg';
import MyPageNavigationSelected from '@assets/images/MyPageNavigationSelected.svg';
import SuggestionNavigationSelected from '@assets/images/SuggestionNavigationSelected.svg';

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
                {focused ? <HomeNavigationSelected /> : <HomeNavigation />}

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
                {focused ? <BattleNavigationSelected /> : <BattleNavigation />}

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
                {focused ? <SuggestionNavigationSelected /> : <SuggestionNavigation />}

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
                {focused ? <MyPageNavigationSelected /> : <MyPageNavigation />}
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
