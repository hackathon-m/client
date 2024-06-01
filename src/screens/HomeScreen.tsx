import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TopNav from '@components/TopNav';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <TopNav />
      <Text>메인 페이지</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
