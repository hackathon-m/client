import React, { useState } from 'react';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from 'src/constants/Colors';

import Stopwatch from '@assets/images/Stopwatch.svg';
import BallonDog from '@assets/images/BalloonDog.svg';
import PlayingHand from '@assets/images/PlayingHand.svg';

const BattleModal = ({ kind }: { kind: string }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleModal} style={styles.sendButton}>
        <Text style={styles.openButtonText}>배틀 신청</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <BattleComponent closeModal={toggleModal} kind={kind} />
        </View>
      </Modal>
    </View>
  );
};

const BattleComponent = ({ closeModal, kind }: { closeModal: () => void; kind: string }) => {
  const navigation = useNavigation();
  const getGameContent = () => {
    switch (kind) {
      case 'balloon':
        return {
          image: <BallonDog />,
          text: '이 쿠폰은 풍선 빠르게 터뜨리기 게임을 진행합니다. 제안하시겠습니까?',
        };
      case 'timer':
        return {
          image: <Stopwatch />,
          text: '이 쿠폰은 10초에 가깝게 스톱워치 누르기 게임을 진행합니다. 제안하시겠습니까? ',
        };
      case 'quickness':
        return {
          image: <PlayingHand />,
          text: '이 쿠폰은 더 빠르게 원을 터치하는 게임을 진행합니다. 제안하시겠습니까?',
        };
      default:
        return { image: null, text: 'Invalid game type selected.' };
    }
  };

  // 수락버튼 누르면 ChooseGift페이지로 이동
  const accessToChooseGift = () => {
    navigation.navigate('ChooseGiftScreen');
    closeModal();
  };

  const { image, text } = getGameContent();

  return (
    <View style={styles.battleContainer}>
      <BlurView style={styles.blurContainer} blurAmount={6} blurType="dark">
        {image}
        <Text style={styles.blurText}>{text}</Text>

        <View style={styles.actionContainer}>
          <Pressable onPress={closeModal} style={styles.declineButton}>
            <Text style={styles.declineButtonText}>거절</Text>
          </Pressable>
          <Pressable onPress={accessToChooseGift} style={styles.acceptButton}>
            <Text style={styles.acceptButtonText}>수락</Text>
          </Pressable>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  battleContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    marginHorizontal: 24,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  blurText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    gap: 12,
  },
  declineButton: {
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  declineButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  acceptButton: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  acceptButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  openButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
  },
  sendButton: {
    marginTop: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 79,
    paddingVertical: 10,
  },
  openButtonText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    color: Colors.purple,
  },
});

export default BattleModal;
