import { MyPageScreenProps } from '@type/params/loginStack';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyPageScreen = ({ navigation }: MyPageScreenProps) => {
  const toCreateGameScreen = () => {
    navigation.navigate('CreateGameScreen');
  };

  const toTimerGameScreen = () => {
    navigation.navigate('TimerGameScreen');
  };

  return (
    <SafeAreaView>
      <Pressable onPress={toCreateGameScreen}>
        <Text>게임 생성</Text>
      </Pressable>

      <Pressable onPress={toTimerGameScreen}>
        <Text>타이머 게임</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default MyPageScreen;
