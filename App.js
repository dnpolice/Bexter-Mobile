import LoginContainer from './components/login/LoginContainer';
import CatalogueContainer from './components/catalogue/CatalogueContainer';
import BookInfoContainer from './components/book_info/BookInfoContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={CatalogueContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookInfoContainer"
          component={BookInfoContainer}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
