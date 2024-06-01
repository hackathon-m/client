import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import Colors from 'src/constants/Colors';

import IconAlarm from '@assets/images/IconAlarm.svg';
import IconHeader from '@assets/images/IconHeader.svg';

const TopNav = () => {
  return (
    <View style={styles.container}>
      <IconHeader />
      <Pressable>
        <IconAlarm />
      </Pressable>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BackgroundBlack,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 35,
  },
});
