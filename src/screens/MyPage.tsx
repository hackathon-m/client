import React from 'react';
import { Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MyPageScreenProps } from '@type/params/loginStack';

const MyPageScreen = ({ navigation }: MyPageScreenProps) => {
  const toCreateGameScreen = () => {
    navigation.navigate('CreateGameScreen');
  };

  // QuicknessGameScreen으로 이동
  const toQuicknessGameScreen = () => {
    navigation.navigate('QuicknessGameScreen');
  };
  //BallonGameScreen으로 이동
  const toBallonGameScreen = () => {
    navigation.navigate('BallonGameScreen');
  };

  const toTimerGameScreen = () => {
    navigation.navigate('TimerGameScreen');
  };

  return (
    <SafeAreaView>
      <Pressable onPress={toCreateGameScreen}>
        <Text>게임 생성</Text>
      </Pressable>

      <Pressable onPress={toQuicknessGameScreen}>
        <Text>순발력 게임 이동</Text>
      </Pressable>
      <Pressable onPress={toBallonGameScreen}>
        <Text>풍선 게임 이동</Text>
      </Pressable>

      <Pressable onPress={toTimerGameScreen}>
        <Text>타이머 게임</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default MyPageScreen;
