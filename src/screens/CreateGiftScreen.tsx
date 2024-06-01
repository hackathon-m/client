import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Colors from 'src/constants/Colors';

import TopNav from '@components/TopNav';

import Gifftycoon from '@assets/images/Gifftycoon.svg';
import Registration from '@assets/images/Registration.svg';

interface CategoryItemProps {
  item: string;
}
const CreateGiftScreen = () => {
  const categoryList: string[] = ['App', 'Food', 'Cafe', 'Make up'];

  const [selectedCategory, setSelectedCategory] = useState<string | null>('App');

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => (
    <Pressable
      style={[styles.item, selectedCategory === item && styles.selectedItem]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.BackgroundBlack,
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#333444" barStyle={'light-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <TopNav />
        <View style={{ marginHorizontal: 20 }}>
          <Gifftycoon style={{ marginTop: 32 }} />

          <Registration style={{ marginTop: 32 }} />

          <Pressable
            style={{
              backgroundColor: '#262626',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 48,
              borderRadius: 36,
              marginTop: 50,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              + 기프티콘 등록하기
            </Text>
          </Pressable>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: 'medium', color: '#9E00FF', fontSize: 16 }}>
              기프티콘을 캡처하여 업로드 해주세요
            </Text>
          </View>

          {/* 카테고리 */}
          <View style={{ marginTop: 32 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>카테고리</Text>

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

          {/* 기프티콘 이름 */}
          <View style={{ marginTop: 32 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>기프티콘 이름</Text>

            <View
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 16 }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#2A2A2A',
                  marginRight: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 18,
                  borderRadius: 21,
                }}
              >
                <TextInput style={{ color: 'white' }} />
              </View>
            </View>
          </View>

          {/* 가격 */}
          <View style={{ marginTop: 32 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>가격</Text>

            <View
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 16 }}
            >
              <View
                style={{
                  width: 211,
                  backgroundColor: '#2A2A2A',
                  marginRight: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 18,
                  borderRadius: 21,
                }}
              >
                <TextInput style={{ color: 'white' }} />
              </View>

              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>원</Text>
            </View>
          </View>

          <Pressable
            style={{
              borderWidth: 1,
              backgroundColor: '#05FF00',
              borderColor: '#039900',
              display: 'flex',

              marginTop: 40,
              marginBottom: 16,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingVertical: 20,
              borderRadius: 27,
            }}
          >
            <Text style={{ fontWeight: '500', color: 'black', fontSize: 16 }}>
              기프티콘 등록하기
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundBlack,
  },
  categoryContainer: {
    flexDirection: 'row',

    paddingTop: 20,
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
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    color: '#FFF',
  },
  title: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    color: '#FFF',
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
  },
  addButtonText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 15,
    color: Colors.white,
    paddingLeft: 10,
  },
});

export default CreateGiftScreen;
