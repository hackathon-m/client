import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Pressable, StyleSheet } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import PieCharts from '@components/PieChart';

import HomeMent from '@assets/images/HomeMent.svg';
import MyTicket from '@assets/images/MyTicket.svg';
import HomeEmpty from '@assets/images/HomeEmpty.svg';
import IconEating from '@assets/images/IconEating.svg';
import HomeBrowser from '@assets/images/HomeBrowser.svg';
import MakeMyBattle from '@assets/images/MakeMyBattle.svg';
import HomeStatistic from '@assets/images/HomeStatistic.svg';
import { HomeScreenProps } from '@type/params/loginStack';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const toCreateGiftScreen = () => {
    navigation.navigate('CreateGiftScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <View style={styles.header}>
        <Text style={styles.bold30}>Hello,{'\n'}Yerang!</Text>
        <View style={styles.icon}>
          <IconEating />
        </View>
      </View>
      <View style={styles.homement}>
        <HomeMent />
      </View>
      <View style={styles.bodyroute}>
        <Pressable>
          <HomeBrowser />
        </Pressable>
        <View style={styles.iconStatic}>
          <HomeStatistic />

          <View style={styles.piechart}>
            <PieCharts width={80} height={80} victoryPercentage={0.7} />
          </View>
        </View>
        <Pressable>
          <MakeMyBattle onPress={toCreateGiftScreen} />
        </Pressable>
        <Pressable>
          <HomeEmpty />
        </Pressable>
        <View style={styles.iconTicket}>
          <Pressable>
            <MyTicket />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  bold30: {
    fontSize: 30,
    fontFamily: 'Pretendard-Bold',
    color: Colors.white,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 50,
    transform: [{ scaleX: -1 }],
  },
  homement: {
    paddingTop: 130,
  },
  bodyroute: {
    paddingTop: 35,
    paddingHorizontal: 20,
    gap: 12,
  },
  iconStatic: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  iconTicket: {
    position: 'absolute',
    right: 20,
    top: 210,
  },
  piechart: {
    position: 'absolute',
    right: 14,
    top: 10,
  },
});
