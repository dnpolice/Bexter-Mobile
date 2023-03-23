import LoginContainer from './components/login/LoginContainer';
import SignupContainer from './components/signup/SignupContainer';
import CatalogueContainer from './components/catalogue/CatalogueContainer';
import BookInfoContainer from './components/book_info/BookInfoContainer';
import About from './components/about/About';
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
          <Stack.Screen
            name="Signup"
            component={SignupContainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}
