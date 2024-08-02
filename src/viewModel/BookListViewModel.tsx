import React from 'react';
import BookListScreen from '../view/bookListScreen/BookListScreen';
import {BookMockData} from '../model/interface';
import {booksMockData} from '../model/mock';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/Route';
type BookListScreenNavigationProps = NativeStackScreenProps< RootStackParamList, 'BookList'>;

const BookListViewModel = ({navigation}:BookListScreenNavigationProps) => {
const bookData: BookMockData[] = booksMockData;


const seeSelectedBookDetails=(index:number)=>{
      navigation.navigate('BookDetail',{
        data:bookData[index]
      })
}

  return (
    <BookListScreen
      {...{
        bookData,
        seeSelectedBookDetails
      }}
    />
  );
};

export default BookListViewModel;
