import React from 'react';
import BookDetailScreen from '../view/bookDetailScreen/BookDetailScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/Route';
import {BookMockData} from '../model/interface';
import { Linking } from 'react-native';
type BookDetailScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'BookDetail'
>;
const BookDetailViewModel = ({route}: BookDetailScreenNavigationProps) => {
  const bookDetails: BookMockData = route?.params?.data;
  const bookFields: string[] = [
    'Author: ',
    'Country: ',
    'Languaue: ',
    'Number of Pages: ',
    'Publish Year: ',
  ];
  const bookFieldValues:string[]= [
    bookDetails?.author,
    bookDetails?.country,
    bookDetails?.language,
    bookDetails?.pages.toString(),
    bookDetails?.year.toString(),
  ];

  const openWikipedia=()=>{
    Linking.openURL(bookDetails?.link)
  }

  return (
    <BookDetailScreen
      {...{
        bookDetails,
        bookFields,
        bookFieldValues,
        openWikipedia
      }}
    />
  );
};

export default BookDetailViewModel;
