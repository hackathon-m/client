import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, FlatList, Pressable, StatusBar, StyleSheet, ScrollView } from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';

import { SuggestionScreenProps } from '@type/params/loginStack';

import Food from '@assets/images/Food.svg';
import Coffe from '@assets/images/Coffee.svg';
import IconAdd from '@assets/images/IconAdd.svg';
import GiftBox from '@assets/images/GiftBox.svg';
import Mirror from '@assets/images/HandMirror.svg';
import CoinStack from '@assets/images/CoinStack.svg';

interface Item {
  id: string;
  title: string;
  descrip: string;
  game: string;
  price: string;
  category: string;
}

interface CategoryItemProps {
  item: string;
}


const dummyData: Item[] = [
  {
    id: '1',
    title: '스타벅스',
    descrip: '4,500원 부터 들어와~',
    game: '풍선터트리기',
    price: '4,300원',
    category: 'Cafe',
  },
  {
    id: '2',
    title: '스타벅스',
    descrip: '4,500원 부터 들어와~',
    game: '풍선터트리기',
    price: '4,300원',
    category: 'Food',
  },
  {
    id: '3',
    title: '스타벅스',
    descrip: '4,500원 부터 들어와~',
    game: '풍선터트리기',
    price: '4,300원',
    category: 'Make up',
  },
  {
    id: '4',
    title: '스타벅스',
    descrip: '4,500원 부터 들어와~',
    game: '풍선터트리기',
    price: '4,300원',
    category: 'etc',
  },
];

const SuggestionScreen = ({ navigation }: SuggestionScreenProps) => {
  const categoryList: string[] = ['All', 'Food', 'Cafe', 'Make up'];
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  const allList: Item[] = dummyData;
  const [filterList, setFilterList] = useState<Item[]>(dummyData);


  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilterList(allList);
    } else {
      const filteredData = allList.filter(item => item.category === category);
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
      {item.category==="Cafe" && <Coffe style={BattleStyles.icon} />}
      {item.category==="Food" && <Food style={BattleStyles.food} />}
      {item.category==="Make up" && <Mirror style={BattleStyles.icon} />}
      {item.category==="etc" && <GiftBox style={BattleStyles.icon} />}

      <View>
        <Text style={BattleStyles.title}>{item.title}</Text>
        <Text style={BattleStyles.descrip}>{item.descrip}</Text>

        <View style={BattleStyles.row}>
          <Text style={BattleStyles.game}>{item.game}</Text>
          <View style={BattleStyles.row}>
            <CoinStack />
            <Text style={BattleStyles.descrip}>{item.price}</Text>
          </View>
        </View>

        <Pressable style={BattleStyles.sendButton}>
          <Text style={BattleStyles.buttonText}>대결신청</Text>
        </Pressable>
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
    height: 80
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
    textAlign:'center',
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
});

export default SuggestionScreen;
