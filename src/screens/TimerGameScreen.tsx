import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TimerGameScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#161B18', flex: 1 }}>
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      <Text>타이머</Text>
    </SafeAreaView>
  );
};

export default TimerGameScreen;
