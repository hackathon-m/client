import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  View,
  Modal,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';
import BattleComponent from '@components/Battle';

import { SuggestionScreenProps } from '@type/params/loginStack';

import Food from '@assets/images/Food.svg';
import Coffe from '@assets/images/Coffee.svg';
import IconAdd from '@assets/images/IconAdd.svg';
import GiftBox from '@assets/images/GiftBox.svg';
import Mirror from '@assets/images/HandMirror.svg';
import CoinStack from '@assets/images/CoinStack.svg';
import axiosInstance from '@axios/axios.instance';

interface Item {
  id: string;
  title: string;
  field: string;
  gameType: string;
  category: string;
}

interface CategoryItemProps {
  item: string;
}

const gameList = ['10초를 맞춰라!', '풍선 터뜨리기', '누가누가 빠르나'];


const SuggestionScreen = ({ navigation }: SuggestionScreenProps) => {
  const [showBattleModal, setShowBattleModal] = useState(false);

  const categoryList: string[] = ['All', 'Food', 'Cafe', 'Make up'];
  const categoryList2: string[] = ['ALL', 'FOOD', 'CAFE', 'MAKEUP'];
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  const [allList, setAllList] = useState<Item[]>([]);
  const [filterList, setFilterList] = useState<Item[]>([]);
  
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('/api/v1/rooms');
      console.log(response.data);
      setAllList(response.data);
      setFilterList(response.data);
    })();
  }, []);

  const openBattleModal = () => {
    setShowBattleModal(true);
  };

  const closeBattleModal = () => {
    setShowBattleModal(false);
  };

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilterList(allList);
    } else {
      const index = categoryList.indexOf(category);
      const filt = categoryList2[index];

      const filteredData = allList.filter((item) => item.category === filt);
      setFilterList(filteredData);
    }
  };

  const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => (
    <Pressable
      style={selectedCategory === item ? styles.selectedItem : styles.item}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </Pressable>
  );

  const renderItem = ({ item }: { item: Item }) => (
    <View style={BattleStyles.itemContainer}>
      {item.category === 'CAFE' && <Coffe style={BattleStyles.icon} />}
      {item.category === 'FOOD' && <Food style={BattleStyles.food} />}
      {item.category === 'MAKEUP' && <Mirror style={BattleStyles.icon} />}
      {item.category === 'ETC' && <GiftBox style={BattleStyles.icon} />}

      <View>
        <Text style={BattleStyles.title}>{item.title}</Text>
        <Text style={BattleStyles.descrip}>{item.field}부터 들어와~</Text>

        <View style={BattleStyles.row}>
          {item.gameType=='GAME1' && <Text style={BattleStyles.game}>{gameList[0]}</Text>}
          {item.gameType=='GAME2' && <Text style={BattleStyles.game}>{gameList[1]}</Text>}
          {item.gameType=='GAME3' && <Text style={BattleStyles.game}>{gameList[2]}</Text>}

          <View style={BattleStyles.row}>
            <CoinStack />
            <Text style={BattleStyles.descrip}>{item.field}원</Text>
          </View>
        </View>
        {/* timer, quickness, balloon 중 선택*/}
        <BattleComponent kind="quickness" />
        <Modal
          animationType="slide"
          transparent={true}
          visible={showBattleModal}
          onRequestClose={closeBattleModal} // Android에서 뒤로가기 버튼을 통해 모달 닫기
        ></Modal>
      </View>
    </View>
  );

  const toMakeBattleScreen = () => {
    navigation.navigate('MakeBattleScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333444" barStyle="light-content" />

      <TopNav />
      {/* <Text>제안 페이지</Text> */}

      <View style={styles.categoryTop}>
        <ScrollView
          style={styles.categoryContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categoryList.map((category) => (
            <CategoryItem key={category} item={category} />
          ))}
        </ScrollView>
      </View>

      <Text style={styles.title}>Battle</Text>
      
      {filterList.length == 0 && <Text style={styles.txtbox}>배틀을 만들어 주세요!</Text>}

      <FlatList
        style={styles.pad}
        data={filterList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Pressable style={styles.addButton} onPress={toMakeBattleScreen}>
        <IconAdd />
        <Text style={styles.addButtonText}>배틀 만들기</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const BattleStyles = StyleSheet.create({
  itemContainer: {
    borderRadius: 21,
    borderColor: Colors.deepPurple,
    borderWidth: 0.5,
    backgroundColor: 'rgba(42,42,42,0.6)',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 'auto',
    width: 40,
  },
  food: {
    marginHorizontal: 'auto',
    width: 40,
    transform: [{ rotate: '-9.97deg' }],
  },
  title: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 18,
    color: '#FFF',
    paddingBottom: 5,
  },
  descrip: {
    fontFamily: 'Pretendard-Light',
    fontSize: 14,
    color: '#FFF',
    paddingBottom: 5,
  },
  game: {
    fontFamily: 'Pretendard-Light',
    fontSize: 12,
    color: Colors.green,
    marginEnd: 'auto',
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  sendButton: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 79,
    paddingVertical: 10,
  },
  buttonText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    color: Colors.purple,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },
  categoryTop: {
    height: 80,
  },
  categoryContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  item: {
    borderRadius: 24,
    borderColor: Colors.green,
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 23,
    paddingVertical: 8,
  },
  selectedItem: {
    borderRadius: 24,
    borderColor: Colors.green,
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: Colors.green,
  },
  itemText: {
    textAlign: 'center',
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    color: Colors.white,
  },
  title: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    color: Colors.white,
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  pad: {
    paddingHorizontal: 20,
  },
  toppad: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  addButton: {
    zIndex: 3,
    backgroundColor: Colors.purple,
    borderRadius: 36,
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingVertical: 12,
    marginHorizontal: 'auto',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',

    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 15,
    color: Colors.white,
    paddingLeft: 10,
  },
  txtbox: {
    color: Colors.white,
    alignItems: 'center',
    marginHorizontal: 'auto',
  }
});

export default SuggestionScreen;
