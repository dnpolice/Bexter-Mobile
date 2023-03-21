import {StyleSheet, Text, View, Platform, Keyboard } from 'react-native';
import LoginButtons from './LoginButtons';
import LoginInput from './LoginInput';
import { useState, useEffect } from 'react';

const Login = ({navigation,loginUser}) => {
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  if (isLoginPressed) {
    loginUser(userEmail, userPassword);
    setIsLoginPressed(false);
  }
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


  return (
    <View style={styles.login} height={Platform.OS === 'android' && keyboardIsVisible? '75%' : '65%'}>
        <Text 
          style={Platform.OS === 'ios' ? styles.header : styles.headerAndroid}>
          Welcome Back!
        </Text>
        <LoginInput 
          setEmail={setUserEmail} 
          setPassword={setUserPassword}/>
        <LoginButtons 
          setButtonPressed={setIsLoginPressed}
          navigation={navigation}
          />
    </View>
  );
}


const styles = StyleSheet.create({
    login: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '65%',
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: '100%',
    },
    header: {
        fontSize: 30,
        width: '100%',
        paddingLeft: '10%',
        paddingTop:30,
        marginTop: 30,
    },
    headerAndroid: {
      fontSize: 30,
      width: '100%',
      paddingLeft: '10%',
      paddingTop:30,
  }
});

export default Login
