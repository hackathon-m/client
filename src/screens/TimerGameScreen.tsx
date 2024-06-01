import React, { useState, useEffect } from 'react';
import { Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TimerGameScreen: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [difference, setDifference] = useState<number | null>(null); // 차이를 저장하는 상태

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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />
      <Text style={{ color: 'white', fontSize: 48, marginBottom: 20 }}>{formatTime(timer)}</Text>
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
      {!isFinished && (
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: 'white', fontSize: 24 }}>{'3초에 제일 가까울 때 누르세요!'}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default TimerGameScreen;
