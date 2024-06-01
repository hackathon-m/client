import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface GameState {
  size: number;
  clickCount: number;
  startTime: number | null;
  elapsedTime: string | null;
  gameFinished: boolean;
}

const BalloonPopGame = () => {
  const [state, setState] = useState<GameState>({
    size: 100,
    clickCount: 0,
    startTime: null,
    elapsedTime: null,
    gameFinished: false,
  });

  useEffect(() => {
    if (state.clickCount === 1) {
      setState((prevState) => ({ ...prevState, startTime: new Date().getTime() }));
    }

    if (state.clickCount === 30) {
      const endTime = new Date().getTime();
      const elapsedTime = ((endTime - (state.startTime ?? endTime)) / 1000).toFixed(2);
      setState((prevState) => ({
        ...prevState,
        elapsedTime: elapsedTime,
        gameFinished: true,
      }));
      setTimeout(resetGame, 5000); // 5초 후 게임 리셋
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
      {state.gameFinished && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Congratulations!</Text>
          <Text style={styles.resultText}>
            You popped the balloon in {state.elapsedTime} seconds!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
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
  },
  resultText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default BalloonPopGame;
