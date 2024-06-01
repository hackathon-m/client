import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Pressable, StyleSheet, SafeAreaView } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import GiftCard from '@components/GiftCard';

import { GiftArchiveScreenProps } from '@type/params/loginStack';

import IconAdd from '@assets/images/IconAdd.svg';
import Gifftycoon1 from '@assets/images/Gifftycoon1.svg';
import axiosInstance from '@axios/axios.instance';

type GiftItem = {
  id : number,
  imageUrl : string,
  brand : string,
  price : number,
  nume : string,
  bet_earned : undefined,
}

const GiftArchiveScreen = ({ navigation }: GiftArchiveScreenProps) => {
  // 기프티콘 등록하기 클릭
  const toCreateGiftScreen = () => {
    navigation.navigate('CreateGiftScreen');
  };

  const [giftCardData, setGiftCardData] = useState<GiftItem[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('/api/v1/gifticons');
      console.log(response.result);
      setGiftCardData(response.result);
    })();
  }, []);

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
          <GiftCard name={item.brand+' '+item.name} expiration={"~2025.08.20"} price={item.price} imgurl={item.imageUrl}/>
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
