import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, StatusBar, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CouponBoxContainer from '@components/CouponBox';
import TopNav from '@components/TopNav';
import Colors from 'src/constants/Colors';

const MyCouponScreen = () => {
  const battleList = [
    [
      {
        title: '투썸플레이스',
        price: '13500원',
      },
      {
        title: '투썸플레이스',
        price: '10000원',
      },
    ],
    [
      {
        title: '투썸플레이스',
        price: '13500원',
      },
      {
        title: '투썸플레이스',
        price: '10000원',
      },
    ],
    [
      {
        title: '투썸플레이스',
        price: '13500원',
      },
      {
        title: '투썸플레이스',
        price: '10000원',
      },
    ],
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      <TopNav />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text>나랑 한판 붙자!</Text>
          <Text>나와 배틀을 제안한 유저가 있어요</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/Sword.png')}></Image>
        </View>
        <View style={styles.suggestionContainer}>
          {battleList.map((battle, index) => (
            <View style={styles.battleContainer}>
              <View style={styles.battle}>
                <CouponBoxContainer
                  imageSource={''}
                  text={battle[0].title}
                  price={battle[0].price}
                />
                <Text style={{ color: 'white', fontSize: 20 }}>VS</Text>
                <CouponBoxContainer
                  imageSource={''}
                  text={battle[1].title}
                  price={battle[1].price}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={{ width: 158, height: 55 }}>
                  <Text style={{ color: 'white', fontSize: 15 }}>배틀거절</Text>
                </Pressable>
                <Pressable style={{ width: 158, height: 55 }}>
                  <Text style={{ color: 'white', fontSize: 15 }}>배틀수락</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },
  //title
  titleContainer: {},

  //logo
  logoContainer: {},

  //suggestion
  suggestionContainer: {},

  battleContainer: {},

  battle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },

  button: {
    width: 158,
    height: 55,
  },
});

export default MyCouponScreen;
