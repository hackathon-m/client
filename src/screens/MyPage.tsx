import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, StatusBar, StyleSheet, ScrollView } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';

import { HomeScreenProps } from '@type/params/loginStack';

import Sword from '@assets/images/Sword.svg';
import Coupon from '@assets/images/Coupon.svg';
import UserCode from '@assets/images/UserCoode.svg';
import CoinStack from '@assets/images/CoinStack.svg';
import Percentage from '@assets/images/Percentage.svg';

const MyPageScreen = ({ navigation }: HomeScreenProps) => {
  // 등록한 기프티콘 클릭
  const toGiftArchiveScreen = () => {
    navigation.navigate('GiftArchiveScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      <TopNav />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <UserCode />
          <Text style={styles.name}>Yerang</Text>
        </View>

        <Text style={styles.midText}>승률</Text>
        <View style={styles.percentageBox}>
          <Percentage />
          <View style={styles.textBox}>
            <View style={styles.flexRow}>
              <Text style={styles.text}>전체 배틀 수</Text>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.text}>승리</Text>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.text}>패배</Text>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.center}>
              <View style={styles.flexRowCenter}>
                <CoinStack />
                <Text style={styles.textMoney}>45,600원</Text>
              </View>
            </View>
          </View>
        </View>
        {/* bottom */}
        <View style={styles.bottom}>
          <Pressable style={styles.navItem}>
            <Sword />
            <Text style={styles.textNav}>배틀내역보기</Text>
          </Pressable>
          <Pressable style={styles.navItem} onPress={toGiftArchiveScreen}>
            <Coupon />
            <Text style={styles.textNav}>등록한 기프티콘</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.BackgroundBlack,
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  name: {
    paddingTop: 15,
    fontFamily: 'Pretendard-Bold',
    fontSize: 24,
    color: Colors.white,
  },
  container: {
    backgroundColor: Colors.BackgroundBlack,
  },
  percentageBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  textBox: {
    flex: 1,
    marginLeft: 20,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    marginHorizontal: 'auto',
    margin: 6,
  },
  text: {
    color: Colors.white,
    fontFamily: 'Pretendard-Light',
    fontSize: 14,
    margin: 4,
  },
  midText: {
    color: Colors.white,
    fontFamily: 'Pretendard-Bold',
    fontSize: 16,
    padding: 20,
    paddingLeft: 92,
  },
  textBold: {
    color: Colors.white,
    fontFamily: 'Pretendard-Bold',
    fontSize: 16,
  },
  textMoney: {
    color: Colors.white,
    fontFamily: 'Pretendard-Bold',
    fontSize: 16,
    marginLeft: 10,
  },
  line: {
    height: 0.7,
    backgroundColor: Colors.white,
    margin: 4,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 70,
    paddingHorizontal: 15,
  },
  navItem: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(42,42,42,0.6)',
    borderRadius: 21,
    borderColor: Colors.deepPurple,
    borderWidth: 0.5,
    paddingVertical: 40,
    marginHorizontal: 5,
  },
  textNav: {
    color: Colors.white,
    fontFamily: 'Pretendard-Bold',
    fontSize: 16,
    marginTop: 10,
  },
});

export default MyPageScreen;
