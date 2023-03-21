import {StyleSheet, Text, View, Platform, Keyboard } from 'react-native';
import SignupButtons from './SignupButtons';
import SignupInput from './SignupInput';
import {useState, useEffect} from 'react';

const Signup = ({navigation,signupUser}) => {
  const [isSignupPressedd, setIsSignupPressedd] = useState(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [robotID, setRobotID] = useState("");

  if (isSignupPressedd) {
    signupUser(userName, userEmail, userPassword, robotID);
    setIsSignupPressedd(false);
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
    <View style={styles.signup} height={Platform.OS === 'android' && keyboardIsVisible? '95%': '80%'} >
        <Text style={Platform.OS === 'ios'? styles.header : styles.headerAndroid} >Create Account </Text>
        <SignupInput 
          setName={setUserName}
          setEmail={setUserEmail} 
          setPassword={setUserPassword}
          setRobotID={setRobotID}/>
        <SignupButtons 
          setButtonPressedd={setIsSignupPressedd}
          navigation={navigation}
          />
    </View>
  );
}

const styles = StyleSheet.create({
    signup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '80%',
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
        marginTop: 40,
        marginBottom: 10,
    },
    headerAndroid: {
      fontSize: 30,
      width: '100%',
      paddingLeft: '10%',
  }
});

export default Signup
