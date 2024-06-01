import React, { useState } from 'react';
import { Text, View, Pressable, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import CouponBoxContainer from '@components/CouponBox';
const couponList = [
  { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁1', price: '5000원' },
  { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁2', price: '5000원' },
  { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁3', price: '5000원' },
  { image: '../assets/images/Twosome.jpg', text: '쿠퐁쿠퐁4', price: '5000원' },
];
const ChooseGift = () => {
  const [selectedCouponIndex, setSelectedCouponIndex] = useState(null);

  const handleCouponPress = (index: any) => {
    setSelectedCouponIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />

      <Text style={styles.bold20}>기프티콘을 선택해주세요</Text>

      <ScrollView>
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
      {/* 배틀신청 버튼 만들기 */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>배틀 신청</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ChooseGift;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },
  bold20: {
    fontSize: 20,
    fontFamily: 'Pretendard-Bold',
    color: Colors.white,
    alignSelf: 'center',
    paddingTop: 50,
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
  button: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 15,
    marginHorizontal: 30,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    color: Colors.purple,
  },
});
