import { login, KakaoOAuthToken } from '@react-native-seoul/kakao-login';
import axios from 'axios';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LandingScreen = () => {
  const kakaoLogin = async () => {
    try {
      const response: KakaoOAuthToken = await login();

      const { accessToken } = response;

      const kakaoResponse = await axios.post(
        'https://kapi.kakao.com/v2/user/me',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const id = kakaoResponse.data.id;
      const nickname = kakaoResponse.data.kakao_account.profile.nickname;

      console.log(id, nickname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text>가운데</Text>
      </View>

      <Pressable style={styles.button} onPress={kakaoLogin}>
        <Text style={styles.buttonText}>카카오 로그인</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FEE500',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: '#3C1E1E',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LandingScreen;
