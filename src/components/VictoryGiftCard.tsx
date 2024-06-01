import React from 'react';
import { Pressable, Text, View } from 'react-native';
import GiftCard from './GiftCard';

interface VictoryGiftCardComponentProps {
  toMainScreen: () => void;
}

const VictoryGiftCardComponent: React.FC<VictoryGiftCardComponentProps> = ({ toMainScreen }) => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ margin: 32 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>축하합니다!</Text>
      </View>

      <GiftCard name="스트로베리" expiration="2022.02.02" price="12000" />

      <Pressable
        onPress={toMainScreen}
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 90,
          paddingVertical: 16,
          borderRadius: 18,
          marginTop: 24,
        }}
      >
        <Text style={{ fontWeight: 'medium', color: '#9E00FF' }}>홈으로</Text>
      </Pressable>
    </View>
  );
};

export default VictoryGiftCardComponent;
