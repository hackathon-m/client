import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Pressable, StyleSheet, SafeAreaView } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import GiftCard from '@components/GiftCard';

import axiosInstance from '@axios/axios.instance';

import { GiftArchiveScreenProps } from '@type/params/loginStack';

import IconAdd from '@assets/images/IconAdd.svg';
import Gifftycoon1 from '@assets/images/Gifftycoon1.svg';

const giftCardData = [
  {
    id: '1',
    name: '투썸플레이스 스트로베리 초콜릿 생크림',
    expiration: '2023.12.31',
    price: '4,300원',
  },
  { id: '2', name: '스타벅스 바닐라 라떼', expiration: '2024.01.15', price: '5,500원' },
  { id: '3', name: '할리스 커피 아메리카노', expiration: '2023.11.30', price: '4,000원' },
  { id: '4', name: '메가커피 카라멜 마키아또', expiration: '2024.02.28', price: '4,500원' },
  { id: '5', name: '커피빈 헤이즐넛 아메리카노', expiration: '2023.10.31', price: '4,800원' },
];

const GiftArchiveScreen = ({ navigation }: GiftArchiveScreenProps) => {
  // 기프티콘 등록하기 클릭
  const toCreateGiftScreen = () => {
    navigation.navigate('CreateGiftScreen');
  };

  const [data, setData] = useState(null); // 상태를 관리할 useState 훅
  console.log("🚀 ~ file: GiftArchiveScreen.tsx:36 ~ GiftArchiveScreen ~ data:", data)

  useEffect(() => {
    fetchData(); // 컴포넌트 마운트 시 데이터를 가져옵니다.
  }, []); // 빈 의존성 배열을 제공하여 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/gifticons'); // 데이터를 가져옵니다.
      setData(response); // 받은 데이터를 상태로 설정
    } catch (error) {
      console.error('Failed to fetch data:', error); // 에러 처리
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <View style={styles.header}>
        <Gifftycoon1 />
      </View>
      <FlatList
        data={giftCardData}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GiftCard name={item.name} expiration={item.expiration} price={item.price} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      <Pressable style={styles.button} onPress={toCreateGiftScreen}>
        <IconAdd />
        <Text style={{ color: 'white' }}>기프티콘 등록하기</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default GiftArchiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  contentContainer: {
    marginLeft: 40,
    alignItems: 'center',
    gap: 50,
  },
  button: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 186,
    paddingVertical: 12,
    borderRadius: 27,
    marginTop: 50,
    alignSelf: 'center',
  },
});
