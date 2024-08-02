import { StyleSheet, TextStyle, ViewStyle } from "react-native";


interface IStyle{
    bookContainer:ViewStyle;
    containerStyle:ViewStyle;
    bookTitleText:TextStyle;
    bookNameText:TextStyle;
}

export const styles = StyleSheet.create<IStyle>({
    bookContainer: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1.5,
      borderColor: '#E6E6E6',
      paddingHorizontal: 16,
      paddingVertical: 10,
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowOffset: {
        height: 4,
        width: 5,
      },
      marginBottom: 16,
      borderRadius:10,
      flexDirection:'row',
    },
    containerStyle:{
      paddingHorizontal:16,
    },
    bookTitleText:{
      fontWeight:'800',
      color:'#000000'
    },
    bookNameText:{
      fontWeight:'800',
      flexShrink:1,
      color:'#000000'
    }
    
  });