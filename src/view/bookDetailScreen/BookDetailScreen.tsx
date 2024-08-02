import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {BookMockData} from '../../model/interface';
import {styles} from './Style';

interface IBookDetailScreen {
  bookDetails: BookMockData;
  bookFields: string[];
  bookFieldValues: string[];
  openWikipedia:()=>void;
}

const BookDetailScreen = ({
  bookDetails,
  bookFieldValues,
  bookFields,
  openWikipedia
}: IBookDetailScreen) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bookDetailCard}>
        <Text style={styles.titleStyle}>{bookDetails?.title}</Text>
        {bookFields.map((item, index) => {
          return (
            <Text
              style={styles.textStyle}
              key={index.toString()}>{`${item}    ${bookFieldValues[index]}`}</Text>
          );
        })}
        <Pressable onPress={openWikipedia} style={styles.btn}>
          <Text style={styles.titleStyle}>{"Open Book"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BookDetailScreen;
