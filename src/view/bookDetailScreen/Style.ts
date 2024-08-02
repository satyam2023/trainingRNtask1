import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IStyle {
  mainContainer:ViewStyle;
  bookDetailCard: ViewStyle;
  textStyle: TextStyle;
  titleStyle: TextStyle;
  btn:ViewStyle;
}

export const styles = StyleSheet.create<IStyle>({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bookDetailCard: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#ED4D1D21',
    borderColor: '#ED4D1D66',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowColor: '#ED0000FF',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textStyle: {
    fontWeight: '800',
    color: '#000000',
    marginTop: 20,
  },
  titleStyle: {
    fontWeight: '800',
    color: '#000000',
    alignSelf: 'center',
  },
  btn:{
    alignSelf:'center',
    padding:20,
    backgroundColor:'#ED8D436B',
    marginTop:20,
    borderRadius:20
  }
});
