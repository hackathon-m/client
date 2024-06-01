import React, { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from 'src/constants/Colors';
import CoinStack from '@assets/images/CoinStack.svg'

 
import Coffe from '@assets/images/Coffee.svg'
import Food from '@assets/images/Food.svg'
import Mirror from '@assets/images/HandMirror.svg'
import GiftBox from '@assets/images/GiftBox.svg'

interface Item {
  id: string;
  title: string;
  descrip: string;
  game: string;
  price: string;
}

const SuggestionScreen = () => {
  const categoryList = ["App", "Food", "Cafe", "Make up"];
  const [selectedCategory, setSelectedCategory] = useState<string | null>("App");

  const DATA : Item[] = [
    {
      id: '1',
      title: '스타벅스',
      descrip: '4,500원 부터 들어와~',
      game: '풍선터트리기',
      price: '4,300원',
    },
    {
      id: '2',
      title: '스타벅스',
      descrip: '4,500원 부터 들어와~',
      game: '풍선터트리기',
      price: '4,300원',
    },
    {
      id: '3',
      title: '스타벅스',
      descrip: '4,500원 부터 들어와~',
      game: '풍선터트리기',
      price: '4,300원',
    },
  ];

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const categoryItem = ({ item }: { item: string }) => (
    <Pressable
      style={() => [
        styles.item,
        selectedCategory === item && styles.selectedItem,
      ]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </Pressable>
  );

  const renderItem = ({ item }: { item: Item }) => (
    <View style={BattleStyles.itemContainer}>
      <Coffe style={BattleStyles.icon}/>
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#333444" barStyle="light-content" />

      {/* <Text>제안 페이지</Text> */}

      <FlatList
        data={categoryList}
        renderItem={categoryItem}
        keyExtractor={(item) => item}
        horizontal={true}
        extraData={selectedCategory} 
      />

      <Text style={styles.title}>Battle</Text>

      {/* <FlatList
        data={categoryList}
        renderItem={categoryItem}
        keyExtractor={(item) => item}
        extraData={selectedCategory} 
      /> */}

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


    </SafeAreaView>
  );
};

const BattleStyles = StyleSheet.create( {
  itemContainer: {
    borderRadius: 21,
    borderColor: Colors.deepPurple,
    borderWidth: 0.5,
    backgroundColor: 'rgba(42,42,42,0.6)',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 'auto'
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
    flexDirection: 'row'
  },
  sendButton: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 79,
    paddingVertical: 10
  },
  buttonText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
     color: Colors.purple
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    backgroundColor: Colors.green,
  },
  itemText: {
    fontFamily: "Pretendard-Bold",
    fontSize: 14,
    color: '#FFF',
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 20,
    color: '#FFF',
    marginTop: 30,
  }
});

export default SuggestionScreen;
