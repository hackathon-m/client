import { AlertScreenProps } from '@type/params/loginStack';
import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

const AlertScreen = ({ navigation }: AlertScreenProps) => {
  const toBallonGameScreen = () => {
    navigation.navigate('BallonGameScreen');
  };

  const toQuicknessGameScreen = () => {
    navigation.navigate('QuicknessGameScreen');
  };

  const toTimerGameScreen = () => {
    navigation.navigate('TimerGameScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ display: 'flex' }}>
        <Pressable
          onPress={toBallonGameScreen}
          style={{
            borderWidth: 4,
            paddingHorizontal: 12,
            paddingVertical: 16,
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: 'center' }}>풍선 게임</Text>
        </Pressable>

        <Pressable
          onPress={toQuicknessGameScreen}
          style={{ borderWidth: 4, paddingHorizontal: 12, paddingVertical: 16, marginTop: 20 }}
        >
          <Text style={{ textAlign: 'center' }}>반응속도 게임</Text>
        </Pressable>

        <Pressable
          onPress={toTimerGameScreen}
          style={{ borderWidth: 4, paddingHorizontal: 12, paddingVertical: 16, marginTop: 20 }}
        >
          <Text style={{ textAlign: 'center' }}>타이머 게임</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AlertScreen;
