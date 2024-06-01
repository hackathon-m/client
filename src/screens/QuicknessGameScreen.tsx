import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import DefeatComponent from '@components/Defeat';
import VictoryComponent from '@components/Victory';
import VictoryGiftCardComponent from '@components/VictoryGiftCard';

import { QuicknessGameScreenProps } from '@type/params/loginStack';

const ReactionTimeTest = ({ navigation }: QuicknessGameScreenProps) => {
  const [startTime, setStartTime] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [reactionTime, setReactionTime] = useState(0);
  const [gameState, setGameState] = useState('waiting');
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

  const { width, height } = Dimensions.get('window');
  const startGame = () => {
    setReactionTime(0);
    setGameState('waiting');
    setButtonVisible(false);
    const minTop = height / 2;
    const maxTop = height - 150;
    const randomTop = Math.random() * (maxTop - minTop) + minTop;
    const randomLeft = Math.random() * (width - 150);
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
      setIsFinished(true);
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      {!isFinished && (
        <>
          <Text style={styles.instructions}>원이 나타나는 순간{'\n'}원을 터치해주세요!</Text>
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
        </>
      )}

      <Text style={styles.resultText}>{gameState === 'clicked' ? ` ${reactionTime} ms` : ''}</Text>

      {/* {isFinished && <DefeatComponent toMainScreen={toMainScreen} />} */}
      {isFinished && <VictoryComponent closeVictory={closeVictory} />}

      {victoryVisible && <VictoryGiftCardComponent toMainScreen={toMainScreen} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.BackgroundBlack,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Pretendard-Bold',
    color: Colors.white,
    marginTop: 65,
  },
  targetButton: {
    width: 150,
    height: 150,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  result: {
    alignItems: 'center',
  },
  resultText: {
    marginTop: 150,
    fontSize: 80,
    textAlign: 'center',
    color: Colors.white,
  },
});

export default ReactionTimeTest;
