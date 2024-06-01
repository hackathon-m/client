import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SuggestionScreen = () => {
  return (
    <SafeAreaView>
      <Text>제안 페이지</Text>

      {/* 제한 금액 설정 */}

      {/* 게임 선택 */}
      <View>
        <Text>10초를 맞춰러</Text>
      </View>

      <View>
        <Text>풍선 터뜨리기</Text>
      </View>

      <View>
        <Text>10초를 맞춰러</Text>
      </View>
    </SafeAreaView>
  );
};

export default SuggestionScreen;
