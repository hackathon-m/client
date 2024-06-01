import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Image, Pressable, StatusBar, StyleSheet, ScrollView } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import CouponBoxContainer from '@components/CouponBox';

import { MakeBattleScreenProps } from '@type/params/loginStack';

import GameLogo from '@assets/images/GameLogo.svg';
import GameLogoLine from '@assets/images/GameLogoLine.svg';

const MakeBattleScreen = ({ navigation }: MakeBattleScreenProps) => {
  const [selectedCouponIndex, setSelectedCouponIndex] = useState(null);
  const couponList = [
    { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁1', price: '5000원' },
    { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁2', price: '5000원' },
    { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁3', price: '5000원' },
    { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁4', price: '5000원' },
    { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁5', price: '5000원' },
    { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁5', price: '5000원' },
    { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁5', price: '5000원' },
  ];

  const handleCouponPress = (index: any) => {
    setSelectedCouponIndex(index);
  };

  const toCreateGameScreen = () => {
    navigation.navigate('CreateGameScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingBottom: 100 }}>
        <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
        <TopNav />

        {/* 게임 로고 생성 */}
        <View style={styles.logoContainer}>
          <GameLogo style={styles.gameLogo} />
          <GameLogoLine />
        </View>

        <View style={styles.titleContainer}>
          <Image source={require('../assets/images/Coupon.png')} />
          <Text style={styles.couponSelect}>기프티콘 선택</Text>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.couponContainer}>
            {couponList.map((coupon, index) => (
              <Pressable
                key={index}
                onPress={() => handleCouponPress(index)}
                style={[
                  styles.buttonContainer,
                  selectedCouponIndex === index && styles.selectedButtonContainer,
                ]}
              >
                {selectedCouponIndex === index && (
                  <View style={styles.selectedTextContainer}>
                    <Text style={styles.selectedText}>🔥</Text>
                    <Text style={styles.selectedText}>장전완료</Text>
                  </View>
                )}
                <View style={[selectedCouponIndex === index && styles.selectedCouponContainer]}>
                  <CouponBoxContainer
                    imageSource={coupon.image}
                    text={coupon.text}
                    price={coupon.price}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {selectedCouponIndex !== null && (
        <View>
          <View style={styles.nextContainer}>
            <Pressable style={styles.backButton} onPress={() => handleCouponPress(null)}>
              <Text style={styles.backText}>뒤로가기</Text>
            </Pressable>
            <Pressable style={styles.nextButton} onPress={toCreateGameScreen}>
              <Text style={styles.nextText}>다음단계</Text>
            </Pressable>
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
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 44,
  },
  gameLogo: {
    marginHorizontal: 20,
  },
  couponSelect: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
  },
  selectedTextContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Pretendard-Bold',
  },
  couponContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 143,
    height: 200,
    marginVertical: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 19,
    borderWidth: 3,
    borderColor: Colors.BackgroundBlack,
  },

  selectedButtonContainer: {
    borderColor: '#9E00FF',
  },
  selectedCouponContainer: {
    opacity: 0.15,
  },
  nextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 30,
    backgroundColor: Colors.BackgroundBlack,
  },
  backButton: {
    backgroundColor: '#222324',
    width: 130,
    height: 45,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: { color: 'white', fontSize: 16, fontFamily: 'Pretendard-Bold' },
  nextButton: {
    backgroundColor: 'white',
    width: 170,
    height: 45,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: { color: '#9E00FF', fontSize: 16, fontFamily: 'Pretendard-Bold' },
});

export default MakeBattleScreen;
