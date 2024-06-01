import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Image, Animated, StatusBar, StyleSheet } from 'react-native';

import Colors from 'src/constants/Colors';

import { BattleLoadingScreenProps } from '@type/params/loginStack';

const BattleLoadingScreen = ({ navigation }: BattleLoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  useEffect(() => {
    // 3초 있다가 로딩 끄기
    if (!isLoading) {
      const timer = setTimeout(() => {
        navigation.navigate('QuicknessGameScreen');
      }, 3000);

      return () => clearTimeout(timer);
    }
    if (!isLoading) {
      const timer = setTimeout(() => {
        navigation.navigate('QuicknessGameScreen');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigation]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.loadingText}>배틀 신청 완료!</Text>
            <Text style={styles.loadingText}>수락을 기다려주세요</Text>
          </View>
          <View style={styles.spinContainer}>
            <Animated.Image
              source={require('../assets/images/Vector.png')}
              style={[{ transform: [{ rotate: spin }] }]}
            />
          </View>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.loadingText}>배틀이 성사되었습니다!</Text>
            <Text style={styles.loadingText}>배틀을 시작합니다.</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },

  loadingContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //text
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },

  loadingText: {
    fontFamily: 'Pretendard',
    color: 'white',
    fontSize: 20,
  },
  //loading
  spinContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
});

export default BattleLoadingScreen;
