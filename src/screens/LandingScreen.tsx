import { login, KakaoOAuthToken } from '@react-native-seoul/kakao-login';
import axios from 'axios';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from 'src/constants/Colors';


import IconHeader from '@assets/images/IconHeader.svg';
import Welcome from '@assets/images/Welcome.svg';

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
        <IconHeader width={400} height={100} />
      </View>


      <View style={styles.centralContainer}>
        <View style={styles.greenLine}>
          <Welcome />
        </View>
        
        <View style={styles.purpleLine}>
          <Welcome />
        </View>
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
    backgroundColor: Colors.BackgroundBlack,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 170
  },
  button: {
    backgroundColor: '#FEE500',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#3C1E1E',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centralContainer: {
    position: 'absolute',
    top: '55%',
    left: '48%',
    transform: [{ translateX: -150 }, { translateY: -50 }], // Adjust the translateX and translateY values as needed
    width: 300, // Set a fixed width for the container
    height: 100, // Set a fixed height for the container
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenLine: {
    position: 'absolute',
    backgroundColor: Colors.green,
    transform: [{ rotate: '-11.23deg' }],
    paddingHorizontal: 20,
  },
  purpleLine: {
    position: 'absolute',
    backgroundColor: Colors.purple,
    transform: [{ rotate: '6.18deg' }],
    paddingHorizontal: 20,
  }
});

export default LandingScreen;
