import React, { useEffect, useState } from 'react';
import { View, Animated, Easing } from 'react-native';

import VicoryCrown from '@assets/images/VictoryCrown.svg';

const DefeatComponent: React.FC = () => {
  const [scaleAnim] = useState(new Animated.Value(0)); // 애니메이션을 위한 상태 추가

  useEffect(() => {
    startAnimation(); // 애니메이션 시작
  }, []);

  const startAnimation = () => {
    Animated.timing(scaleAnim, {
      toValue: 5, // 글씨 크기를 5배로 키우기
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
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
      </View>
    </View>
  );
};

export default DefeatComponent;
