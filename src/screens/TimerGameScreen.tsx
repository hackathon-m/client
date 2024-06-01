import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';

import TopNav from '@components/TopNav';
import VictoryComponent from '@components/Victory';
import VictoryGiftCardComponent from '@components/VictoryGiftCard';

import { TimerGameScreenScreenProps } from '@type/params/loginStack';

const TimerGameScreen = ({ navigation }: TimerGameScreenScreenProps) => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [difference, setDifference] = useState<number | null>(null); // 차이를 저장하는 상태
  const [victoryVisible, setVictoryVisible] = useState<boolean>(false);

  const closeVictory = () => {
    setVictoryVisible(true);
  };

  const toMainScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainScreen' }],
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime < 4000) {
            return prevTime + 10;
          } else {
            setIsRunning(false);
            setIsFinished(true);
            setDifference(prevTime + 10 - 3000); // 차이 계산
            if (interval) clearInterval(interval);
            return prevTime + 10;
          }
        });
      }, 10);
    } else if (!isRunning && timer !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timer]);

  const handleStartStop = () => {
    if (!isRunning && !isFinished) {
      setIsRunning(true);
    } else if (isRunning && !isFinished) {
      setIsRunning(false);
      setIsFinished(true);
      setDifference(timer - 3000); // 멈춰를 눌렀을 때 차이 계산
    }
  };

  const formatTime = (time: number) => {
    const seconds = Math.floor(time / 1000);
    const milliseconds = time % 1000;
    if (seconds === 4 && milliseconds === 10) {
      return '4.000';
    }
    return `${seconds}.${milliseconds < 100 ? '0' : ''}${
      milliseconds < 10 ? '0' : ''
    }${milliseconds}`;
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#161B18',
        flex: 1,
      }}
    >
      <TopNav />

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StatusBar backgroundColor="#333444" barStyle={'light-content'} />

        {!isFinished && (
          <View
            style={{
              marginTop: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
              최대한 3초에 가까울떄
            </Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
              화면을 터치하세요!
            </Text>
          </View>
        )}

        <Text style={{ color: 'white', marginBottom: 20, fontSize: 96, fontWeight: 'bold' }}>
          {formatTime(timer)}
        </Text>
        <TouchableOpacity
          onPress={handleStartStop}
          disabled={isFinished}
          style={{
            backgroundColor: isFinished ? '#555' : '#1E90FF',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 10,
            opacity: isFinished ? 0.5 : 1,
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            {!isRunning && !isFinished ? '시작!' : isFinished ? '종료' : '멈춰!'}
          </Text>
        </TouchableOpacity>
        {isFinished && difference !== null && (
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: 'white', fontSize: 36 }}>
              {`나의 기록: ${difference === 1010 ? '1' : formatTime(Math.abs(difference))} 초`}
            </Text>
          </View>
        )}
      </View>

      {/* {isFinished && <DefeatComponent toMainScreen={toMainScreen} />} */}
      {isFinished && <VictoryComponent closeVictory={closeVictory} />}

      {victoryVisible && <VictoryGiftCardComponent toMainScreen={toMainScreen} />}
    </SafeAreaView>
  );
};

export default TimerGameScreen;
