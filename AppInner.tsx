import React, { useState } from 'react';
import LandingScreen from 'src/screens/LandingScreen';
import MainScreen from 'src/screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@type/params/rootStack';
import { LoginStackParamList } from '@type/params/loginStack';

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
