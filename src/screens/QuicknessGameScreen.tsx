import React, { useState } from 'react';
import { Text, Button, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';

const ReactionTimeTest = () => {
  const [startTime, setStartTime] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [reactionTime, setReactionTime] = useState(0);
  const [gameState, setGameState] = useState('waiting');

  const { width, height } = Dimensions.get('window');

  const startGame = () => {
    setReactionTime(0);
    setGameState('waiting');
    setButtonVisible(false);

    // Calculate random positions for the button
    const randomTop = Math.random() * (height - 150); // Subtract size of button to prevent overflow
    const randomLeft = Math.random() * (width - 100); // Subtract size of button to prevent overflow

    // Prepare to show the button after a random time
    const randomDelay = Math.random() * 2000 + 2000;
    setTimeout(() => {
      setButtonPosition({ top: randomTop, left: randomLeft });
      setButtonVisible(true);
      setGameState('ready');
      setStartTime(new Date().getTime());
    }, randomDelay);
  };

  const handleClick = () => {
    if (gameState === 'ready') {
      const endTime = new Date().getTime();
      const timeTaken = endTime - startTime;
      setReactionTime(timeTaken);
      setGameState('clicked');
      setButtonVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.instructions}>When the button appears, click it as fast as you can!</Text>
      {buttonVisible && (
        <TouchableOpacity
          style={[
            styles.targetButton,
            { top: buttonPosition.top, left: buttonPosition.left, position: 'absolute' },
          ]}
          onPress={handleClick}
        >
          <Text>Click Me!</Text>
        </TouchableOpacity>
      )}
      <Button title="Start Test" onPress={startGame} />
      {gameState === 'clicked' && (
        <Text style={styles.resultText}>Reaction Time: {reactionTime} ms</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  targetButton: {
    width: 100,
    height: 100,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  resultText: {
    marginTop: 20,
    fontSize: 24,
    position: 'absolute',
    bottom: 50,
    width: '100%',
    textAlign: 'center',
  },
});

export default ReactionTimeTest;
