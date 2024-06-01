import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateGameScreenProps } from '@type/params/loginStack';

import GameLogo from '@assets/images/GameLogo.svg';
import GameLogoLine from '@assets/images/GameLogoLine.svg';
import CoinStack from '@assets/images/CoinStack.svg';

const games = [
  { id: 1, name: '10초를 맞춰라' },
  { id: 2, name: '풍선 떠뜨리기' },
  { id: 3, name: '누가누가 빠르나' },
];

const CreateGameScreen = ({ navigation }: CreateGameScreenProps) => {
  const [selectedGame, setSelectedGame] = useState<number>(0);

  console.log(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />

      {/* 게임 로고 생성 */}
      <View style={styles.logoContainer}>
        <GameLogo style={styles.gameLogo} />
        <GameLogoLine />
      </View>

      <View style={styles.mainContainer}>
        {/* 제한 금액 설정 */}
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CoinStack style={{ marginRight: 4 }} />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>제한 금액 설정</Text>
          </View>

          <View
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 16 }}
          >
            <View
              style={{
                width: 211,
                backgroundColor: '#2A2A2A',
                marginRight: 12,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 21,
              }}
            >
              <TextInput style={{ color: 'white' }} />
            </View>

            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>원</Text>
          </View>
        </View>

        {/* 게임 선택 */}
        <View style={{ marginTop: 32, flex: 1 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CoinStack style={{ marginRight: 4 }} />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>게임 선택</Text>
          </View>

          {games.map((game) => (
            <Pressable
              key={game.id}
              onPress={() => setSelectedGame(game.id)}
              style={[
                styles.gameButton,
                { backgroundColor: selectedGame === game.id ? '#05FF00' : '#222324' },
              ]}
            >
              <Text
                style={{
                  fontWeight: '500',
                  color: selectedGame === game.id ? 'black' : 'white',
                  fontSize: 16,
                }}
              >
                {game.name}
              </Text>
            </Pressable>
          ))}

          <View style={{ flex: 1 }} />

          <Pressable
            style={{
              borderWidth: 1,
              backgroundColor: 'white',
              borderColor: '#039900',
              display: 'flex',

              marginTop: 12,
              marginBottom: 16,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingVertical: 20,
              borderRadius: 27,
            }}
          >
            <Text style={{ fontWeight: '500', color: 'black', fontSize: 16 }}>게임 방 만들기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161B18',
  },

  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameLogo: {
    marginHorizontal: 20,
  },
  gameLogoLine: {
    borderWidth: 1,
    borderColor: 'white',
  },

  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 32,
    display: 'flex',
    flexDirection: 'column',
  },

  gameButton: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#039900',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 27,
  },
});

export default CreateGameScreen;
