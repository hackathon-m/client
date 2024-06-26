import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyPageScreen from 'src/screens/MyPage';
import MainScreen from 'src/screens/MainScreen';
import HomeScreen from 'src/screens/HomeScreen';
import MyCouponScreen from 'src/screens/MyCoupon';
import AlertScreen from 'src/screens/AlarmScreen';
import ChooseGiftScreen from 'src/screens/ChooseGift';
import LandingScreen from 'src/screens/LandingScreen';
import TimerGameScreen from 'src/screens/TimerGameScreen';
import CreateGameScreen from 'src/screens/CreateGameScreen';
import BallonGameScreen from 'src/screens/BallonGameScreen';
import SuggestionScreen from 'src/screens/SuggestionScreen';
import MakeBattleScreen from 'src/screens/MakeBattleScreen';
import CreateGiftScreen from 'src/screens/CreateGiftScreen';
import GiftArchiveScreen from 'src/screens/GiftArchiveScreen';
import QuicknessGameScreen from 'src/screens/QuicknessGameScreen';
import BattleLoadingScreen from 'src/screens/BattleLoadingScreen';

import { RootStackParamList } from '@type/params/rootStack';
import { LoginStackParamList } from '@type/params/loginStack';

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

      <LogInStack.Screen name="QuicknessGameScreen" component={QuicknessGameScreen} />
      <LogInStack.Screen name="BallonGameScreen" component={BallonGameScreen} />
      <LogInStack.Screen name="MakeBattleScreen" component={MakeBattleScreen} />
      <LogInStack.Screen name="TimerGameScreen" component={TimerGameScreen} />
      <LogInStack.Screen name="CreateGiftScreen" component={CreateGiftScreen} />

      <LogInStack.Screen name="GiftArchiveScreen" component={GiftArchiveScreen} />

      <LogInStack.Screen name="BattleLoadingScreen" component={BattleLoadingScreen} />

      <LogInStack.Screen name="AlertScreen" component={AlertScreen} />
      <LogInStack.Screen name="ChooseGiftScreen" component={ChooseGiftScreen} />
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
