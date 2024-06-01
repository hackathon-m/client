import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Colors from 'src/constants/Colors';

import CakeDummy from '@assets/images/CakeDummy.svg';

// Props 인터페이스 정의
interface GiftCardProps {
  name: string;
  expiration: string;
  price: string;
  imgurl : string;
}

const GiftCard = ({ name, expiration, price, imgurl }: GiftCardProps) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: imgurl }} // 여기에 실제 이미지 URL을 입력하세요
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.bold16}>{name}</Text>
      </View>
      <View style={styles.infoline}>
        <Text style={styles.bold12}>유효기간</Text>
        <Text style={styles.light12}>{expiration}</Text>
      </View>
      <View style={styles.infoline2}>
        <Text style={styles.bold12}>가격</Text>
        <Text style={styles.light12}>{price}</Text>
      </View>
    </View>
  );
};

export default GiftCard;

const styles = StyleSheet.create({
  image: {
    width: 200,  // 원하는 너비를 설정하세요
    height: 200, // 원하는 높이를 설정하세요
    resizeMode: 'cover', // 이미지 크기 조정 모드를 설정하세요 (cover, contain, stretch 등)
  },
  container: {
    backgroundColor: '#222324',
    borderRadius: 20,
    padding: 20,
    width: 250,
    height: 360,
    shadowColor: Colors.green,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  bodyContainer: {
    paddingTop: 20,
  },
  bold16: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Pretendard-Bold',
  },
  bold12: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: 'Pretendard-Bold',
  },
  light12: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: 'Pretendard-Light',
  },
  infoline: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 20,
  },
  infoline2: {
    flexDirection: 'row',
    gap: 30,
    paddingTop: 10,
  },
});
