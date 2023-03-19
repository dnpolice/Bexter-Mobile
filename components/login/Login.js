import {StyleSheet, Text, View } from 'react-native';
import LoginButtons from './LoginButtons';
import LoginInput from './LoginInput';
import {useState} from 'react';

const Login = ({navigation,loginUser}) => {
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  if (isLoginPressed) {
    loginUser(userEmail, userPassword);
    setIsLoginPressed(false);
  }
  return (
    <View style={styles.login}>
        <Text style={styles.header}>Welcome Back!</Text>
        <LoginInput 
          setEmail={setUserEmail} 
          setPassword={setUserPassword}/>
        <LoginButtons 
          setButtonPressed={setIsLoginPressed}
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
    }
});

export default Login
