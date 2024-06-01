import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import DefeatComponent from '@components/Defeat';
import VictoryComponent from '@components/Victory';
import VictoryGiftCardComponent from '@components/VictoryGiftCard';

import { BallonGameScreenProps } from '@type/params/loginStack';

interface GameState {
  size: number;
  clickCount: number;
  startTime: number | null;
  elapsedTime: string | null;
  gameFinished: boolean;
}

const BalloonPopGame = ({ navigation }: BallonGameScreenProps) => {
  const [state, setState] = useState<GameState>({
    size: 100,
    clickCount: 0,
    startTime: null,
    elapsedTime: null,
    gameFinished: false,
  });

  const [isFinished, setIsFinished] = useState<boolean>(false);
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
    if (state.clickCount === 1) {
      setState((prevState) => ({ ...prevState, startTime: new Date().getTime() }));
    }

    if (state.clickCount === 10) {
      const endTime = new Date().getTime();
      const elapsedTime = ((endTime - (state.startTime ?? endTime)) / 1000).toFixed(2);
      setState((prevState) => ({
        ...prevState,
        elapsedTime: elapsedTime,
        gameFinished: true,
      }));
      setIsFinished(true);
    }
  }, [state.clickCount]);

  const handlePress = () => {
    setState((prevState) => ({
      ...prevState,
      size: prevState.size + 5,
      clickCount: prevState.clickCount + 1,
    }));
  };

  const resetGame = () => {
    setState({
      size: 100,
      clickCount: 0,
      startTime: null,
      elapsedTime: null,
      gameFinished: false,
    });
  };

  return (
    <SafeAreaView style={styles.containersafe}>
      <TopNav />
      {!isFinished && (
        <>
          <Text style={styles.instructions}>최대한 빠르게{'\n'}풍선을 터트려주세요!</Text>
          <View style={styles.container}>
            <TouchableOpacity
              style={[
                styles.balloon,
                { width: state.size, height: state.size, borderRadius: state.size / 2 },
              ]}
              onPress={handlePress}
              disabled={state.gameFinished}
            >
              <Text style={styles.clickText}>{state.clickCount}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {state.gameFinished && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{state.elapsedTime} 초</Text>
        </View>
      )}
      {/* {isFinished && <DefeatComponent toMainScreen={toMainScreen} />} */}
      {isFinished && <VictoryComponent closeVictory={closeVictory} />}
      {victoryVisible && <VictoryGiftCardComponent toMainScreen={toMainScreen} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containersafe: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BackgroundBlack,
    paddingBottom: 80,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Pretendard-Bold',
    color: Colors.white,
    marginTop: 65,
  },
  balloon: {
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  resultContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  resultText: {
    marginTop: 120,
    fontSize: 120,
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default BalloonPopGame;
