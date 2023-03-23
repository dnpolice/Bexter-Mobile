import { StyleSheet, View, Alert, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Login from './Login';
import BackgroundOverlay from '../general/BackgroundOverlay';
import LogoContainer from '../general/LogoContainer';
import { useState, useEffect } from 'react';

const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/";
const loginUrl = base_url + 'auth/login';

const LoginContainer = ({navigation}) => {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);
  useEffect(() => {
      const showListener = Keyboard.addListener("keyboardDidShow", () => {
          setKeyboardIsVisible(true)
      })
      const hideListener = Keyboard.addListener("keyboardDidHide", () => {
          setKeyboardIsVisible(false)
      })
      return () => {
          showListener.remove()
          hideListener.remove()
      }
  }, []);
  const loginUser = async (userEmail, userPassword) => {
    const login = () => {
      return fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body:JSON.stringify({
          "email":userEmail, 
          "password": userPassword
        }),
        
      })
    } ;

    try {
      const loginResponse = await login();
      if (loginResponse.status == 200){
        const responseJson = await loginResponse.json();
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home', params: { userName: responseJson.name } }],
        });
      } else {
        Alert.alert('Login Error', 'Login credentials invalid', [
          {
            text: 'OK',
          }
        ]);
        // then maybe clear the input fields
      }
    } catch(e){
      Alert.alert('Login Error', 'Server error', [
        {
          text: 'OK',
        }
      ]);
    }
  }
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? "position": "null"}>
        <View style={styles.loginContainer}>
            <BackgroundOverlay />
            {
              Platform.OS === 'android'? !keyboardIsVisible && <LogoContainer />:<LogoContainer />
            }
            <Login 
            navigation={navigation}
            loginUser={loginUser}/>
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#5861B0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 40,
    color: '#FEE0E0'
  },
  text: {
    fontSize: 20,
    color: '#FEE0E0'
  }
});

export default LoginContainer
