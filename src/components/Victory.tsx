import React, { useEffect, useState } from 'react';
import { Image, View, Animated, Easing } from 'react-native';

import VicoryCrown from '@assets/images/VictoryCrown.svg';

const VictoryComponent: React.FC = () => {
  const [bomb, setBomb] = useState<boolean>(false);
  const [coin, setCoin] = useState<boolean>(false);
  const [scaleAnim] = useState(new Animated.Value(0)); // 애니메이션을 위한 상태 추가

  useEffect(() => {
    setTimeout(() => {
      setCoin(true);
    }, 600);
  }, []);

  useEffect(() => {
    startAnimation(); // 애니메이션 시작
    setTimeout(() => {
      setBomb(true);
    }, 1000);
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
          승리
        </Animated.Text>

        <VicoryCrown />

        {coin && (
          <Image
            source={require('../assets/images/VictoryCoin.gif')}
            style={{ position: 'absolute', height: '100%' }}
          />
        )}

        {!bomb && (
          <Image
            source={require('../assets/images/VictoryBomb.gif')}
            style={{ position: 'absolute', height: '100%' }}
          />
        )}
      </View>
    </View>
  );
};

export default VictoryComponent;
