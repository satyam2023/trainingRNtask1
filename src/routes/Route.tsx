import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetailViewModel from '../viewModel/BookDetailViewModel';
import BookListViewModel from '../viewModel/BookListViewModel';
import { BookMockData } from '../model/interface';

export type RootStackParamList = {
  BookList: undefined;
  BookDetail: {
    data:BookMockData
  };
};

const Routes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookList" component={BookListViewModel} />
        <Stack.Screen name="BookDetail" component={BookDetailViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
