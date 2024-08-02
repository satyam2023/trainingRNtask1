import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BookMockData, IBookListFlatlist} from '../../model/interface';
import {styles} from './Style';

interface IBookList {
  bookData: BookMockData[];
  seeSelectedBookDetails: (index: number) => void;
}

const BookListScreen = ({bookData, seeSelectedBookDetails}: IBookList) => {
  const renderBookList = ({item, index}: IBookListFlatlist) => {
    const handleBookSelected = () => seeSelectedBookDetails(index);
    return (
      <Pressable style={styles.bookContainer} onPress={handleBookSelected}>
        <Text style={styles.bookTitleText}>{'Book Title:  '}</Text>
        <Text style={styles.bookNameText}>{item?.title}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={bookData}
      renderItem={renderBookList}
      contentContainerStyle={styles.containerStyle}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default BookListScreen;
