import React from 'react';
import { View, Text } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Stopwatch from '@assets/images/Stopwatch.svg';

const BattleComponent: React.FC = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <Text>dd</Text>

      <BlurView
        style={{
          marginTop: 240,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 24,
          paddingHorizontal: 12,
          paddingVertical: 20,
          borderRadius: 30,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        blurAmount={6}
        blurType="dark"
      >
        <Stopwatch />

        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          이 쿠폰은 3초에 가깝게 스톱워치 누르기
        </Text>
        <Text style={{ marginTop: 8, color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          게임을 진행합니다. 제안하시겠습니까?
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
          }}
        >
          <View
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 24,
              paddingVertical: 12,
              marginRight: 24,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>거절</Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>수락</Text>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

export default BattleComponent;
