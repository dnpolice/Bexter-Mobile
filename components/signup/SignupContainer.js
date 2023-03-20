import { StyleSheet, View, Alert, KeyboardAvoidingView } from 'react-native';
import Signup from './Signup';
import BackgroundOverlay from '../general/BackgroundOverlay';
import LogoContainer from '../general/LogoContainer';

const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/";
const signupUrl = base_url + 'users';

const SignupContainer = ({navigation}) => {
  const signupUser = async (userName,userEmail, userPassword, robotID) => {
    const signup = () => {
      return fetch(signupUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body:JSON.stringify({
          "name":userName,
          "email":userEmail, 
          "password": userPassword, 
          "robotSerialNumber": robotID,
        }),
        
      })
    } ;
    const signupResponse = signup();
    signupResponse.then((response) => {
      // const cookie =  response.headers.map["set-cookie"];
      if (response.ok === true) {
        // get cookie and name somehow and pass in to home
        // these need to be persisted 
        // using userEmail just for now
        navigation.navigate('Home', {
          userName: userEmail
        });
      }
      else if (response.status === 400){
        Alert.alert('Signup Error', 'Invalid input fields', [
          {
            text: 'OK',
          }
        ]);
      }
      else if (response.status === 409) {
        Alert.alert('Signup Error', 'User already exists', [
          {
            text: 'OK',
          }
        ]);
      }
      else {
        Alert.alert('Signup Error', ' ', [
          {
            text: 'OK',
          }
        ]);
        // then maybe clear the input fields
      }
    }).catch(e => {
      Alert.alert('Signup Error', 'Server error', [
        {
          text: 'OK',
        }
      ]);
    });
   
  }
  return (
    // <KeyboardAvoidingView
    //     style={styles.container}
    //     behavior="position">
      <View style={styles.signupContainer}>
          <BackgroundOverlay />
          <Signup 
          navigation={navigation}
          signupUser={signupUser}/>
      </View>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
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

export default SignupContainer
