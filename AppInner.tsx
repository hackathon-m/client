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
import CreateGameScreen from 'src/screens/CreateGameScreen';
import TimerGameScreen from 'src/screens/TimerGameScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const LogInStack = createNativeStackNavigator<LoginStackParamList>();

function AppInner() {
  const [loggedIn] = useState<boolean>(true);

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
      <LogInStack.Screen name="CreateGameScreen" component={CreateGameScreen} />
      <LogInStack.Screen name="TimerGameScreen" component={TimerGameScreen} />
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
