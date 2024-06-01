import React, { useEffect, useState } from 'react';
import { View, Animated, Easing, Text, Pressable } from 'react-native';

import VicoryCrown from '@assets/images/VictoryCrown.svg';

interface DefeatComponentProps {
  toMainScreen: () => void;
}

const DefeatComponent: React.FC<DefeatComponentProps> = ({ toMainScreen }) => {
  const [scaleAnim] = useState(new Animated.Value(0)); // 애니메이션을 위한 상태 추가
  const [opacityAnim] = useState(new Animated.Value(0)); // 애니메이션을 위한 상태 추가

  useEffect(() => {
    startAnimation(); // 애니메이션 시작
    animateOpacity();
  }, []);

  const startAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 5, // 글씨 크기를 5배로 키우기
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const animateOpacity = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Animated.Text // Animated 컴포넌트로 변경
          style={{
            color: 'white',
            transform: [
              {
                scale: scaleAnim.interpolate({
                  inputRange: [0, 5], // 0부터 시작해서 5까지 스케일 적용
                  outputRange: [0.2, 4], // 애니메이션에 따라 글씨 크기 변경
                }),
              },
            ],
            fontWeight: 'bold',
            fontSize: 24, // 초기 크기는 여기에서 지정
          }}
        >
          패배
        </Animated.Text>

        <VicoryCrown />

        <View style={{ marginTop: 32 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            상대방에게 기프티콘을 뺏겼습니다
          </Text>
        </View>

        <Animated.View style={{ opacity: opacityAnim, marginTop: 18 }}>
          <Text style={{ fontWeight: 'medium', color: '#9E00FF' }}>홈으로 돌아가세요</Text>
        </Animated.View>

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

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
          }}
        >
          <View style={{ display: 'flex', alignItems: 'center', marginRight: 40 }}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 14,
                backgroundColor: 'white',
                borderRadius: 15,
              }}
            >
              <Text style={{ color: '#9E00FF', fontWeight: 'bold' }}>나</Text>
            </View>

            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 16 }}>2:49</Text>
          </View>

          <View style={{ display: 'flex', alignItems: 'center' }}>
            <View
              style={{
                paddingHorizontal: 18,
                paddingVertical: 14,
                backgroundColor: '#222324',
                borderRadius: 15,
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>상대방</Text>
            </View>

            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 16 }}>2:49</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DefeatComponent;
