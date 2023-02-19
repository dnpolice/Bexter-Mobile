import LoginContainer from './components/LoginContainer';
import HomeContainer from './components/HomeContainer';
import BookInfoContainer from './components/BookInfoContainer'
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
          component={HomeContainer}
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
