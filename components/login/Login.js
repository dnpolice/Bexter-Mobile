import {StyleSheet, Text, View, Alert } from 'react-native';
import LoginButtons from './LoginButtons';
import LoginInput from './LoginInput';
import {useState} from 'react';

// const base_url = "http://3.134.99.13:5000/";
const base_url = "http://localhost:5000/";
const loginUrl = base_url + 'auth/login';

const Login = ({navigation}) => {
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  if (isLoginPressed) {
    const loginUser = async () => {
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
      const loginResponse = login();
      loginResponse.then((response) => {
        console.log('loginResponse', response);
        setIsLoginPressed(false);
        if (response.ok === true) {
          // get cookie and name somehow and pass in to home
          // these need to be persisted 
          navigation.navigate('Home', {
            // cookie: "some cookie to be passed", 
            userName: "Bir"
          });
        }
        else {
          Alert.alert('Login Error', 'Login credentials invalid', [
            {
              text: 'OK',
            }
          ]);
          // then maybe clear the input fields
        }
      }).catch(e => {
        setIsLoginPressed(false);
        Alert.alert('Login Error', 'Server error', [
          {
            text: 'OK',
          }
        ]);
      });
    }
    loginUser()
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
