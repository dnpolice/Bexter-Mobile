import { StyleSheet, View, Alert } from 'react-native';
import Login from './Login';
import BackgroundOverlay from '../general/BackgroundOverlay';
import LogoContainer from '../general/LogoContainer';

const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/";
const loginUrl = base_url + 'auth/login';

const LoginContainer = ({navigation}) => {
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
    const loginResponse = login();
    loginResponse.then((response) => {
      const cookie =  response.headers.map["set-cookie"];
      if (response.ok === true) {
        // get cookie and name somehow and pass in to home
        // these need to be persisted 
        // using userEmail just for now
        navigation.navigate('Home', {
          userName: "Tim"
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
      Alert.alert('Login Error', 'Server error', [
        {
          text: 'OK',
        }
      ]);
    });
   
  }
  return (
    <View style={styles.loginContainer}>
        <BackgroundOverlay />
        <LogoContainer />
        <Login 
        navigation={navigation}
        loginUser={loginUser}/>
    </View>
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
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
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
