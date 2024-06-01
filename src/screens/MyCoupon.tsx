import React from 'react';
import { StyleSheet, Text, Pressable, View, StatusBar, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CouponBoxContainer from '@components/CouponBox';
import TopNav from '@components/TopNav';
import Colors from 'src/constants/Colors';
import { MyCouponScreenProps } from '@type/params/loginStack';

const MyCouponScreen = ({ navigation }: MyCouponScreenProps) => {
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

  //example
  const toBattleLoadingScreen = () => {
    navigation.navigate('BattleLoadingScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      <ScrollView>
        <TopNav />
        <View style={styles.titleContainer}>
          <Text style={{ color: 'white', fontSize: 20 }}>나랑 한판 붙자!</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>나와 배틀을 제안한 유저가 있어요</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/Sword.png')}></Image>
        </View>
        <View style={styles.suggestionContainer}>
          {battleList.map((battle) => (
            <View>
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
                <Pressable style={styles.button}>
                  <Text style={{ color: 'white', fontSize: 15 }}>✋🏻 배틀 거절</Text>
                </Pressable>
                <Pressable style={styles.button2} onPress={toBattleLoadingScreen}>
                  <Text style={{ color: 'black', fontSize: 15 }}>💪🏻 배틀 수락</Text>
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
  titleContainer: {
    margin: 20,
  },

  //logo
  logoContainer: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //suggestion
  suggestionContainer: {
    margin: 20,
  },

  battle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    width: 158,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 17,
  },
  button2: {
    width: 158,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05FF00',
    borderRadius: 17,
  },
});

export default MyCouponScreen;
