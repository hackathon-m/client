import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CouponBoxProps {
  imageSource: string;
  text: string;
  price: string;
}

const CouponBoxContainer: React.FC<CouponBoxProps> = ({ text, price }) => {
  return (
    <View style={styles.coupon}>
      <View style={styles.couponImgContainer}>
        <Image source={require('../assets/images/Twosome.png')} />
      </View>
      <View style={styles.couponTextContainer}>
        <Text style={styles.couponName}>{text}</Text>
        <Text style={styles.couponPrice}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coupon: {
    marginVertical: 10,
    borderRadius: 19,
    padding: 10,
    width: 137,
    height: 194,
    backgroundColor: '#2A2A2A',
  },

  couponImgContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  couponTextContainer: {
    padding: 5,
    marginTop: 5,
  },
  couponName: {
    color: 'white',
    fontSize: 16,
  },
  couponPrice: {
    color: 'white',
    fontSize: 14,
  },
});

export default CouponBoxContainer;
