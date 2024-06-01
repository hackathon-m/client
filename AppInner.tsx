import React, { useState } from 'react';
import LandingScreen from 'src/screens/LandingScreen';
import MainScreen from 'src/screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@type/params/rootStack';
import { LoginStackParamList } from '@type/params/loginStack';
import HomeScreen from 'src/screens/HomeScreen';
import MyCouponScreen from 'src/screens/MyCoupon';
import MyPageScreen from 'src/screens/MyPage';
import SuggestionScreen from 'src/screens/SuggestionScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const LogInStack = createNativeStackNavigator<LoginStackParamList>();

function AppInner() {
  const [loggedIn] = useState<boolean>(false);

  return loggedIn ? (
    <LogInStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <LogInStack.Screen name="MainScreen" component={MainScreen} />
      <LogInStack.Screen name="HomeScreen" component={HomeScreen} />
      <LogInStack.Screen name="MyCouponScreen" component={MyCouponScreen} />
      <LogInStack.Screen name="MyPageScreen" component={MyPageScreen} />
      <LogInStack.Screen name="SuggestionScreen" component={SuggestionScreen} />
    </LogInStack.Navigator>
  ) : (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="LandingScreen" component={LandingScreen} />
    </RootStack.Navigator>
  );
}
export default AppInner;
