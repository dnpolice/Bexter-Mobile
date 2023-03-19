import { StyleSheet, Text, View, Keyboard, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
const SignupButtons = (props) => {
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
    <View style={styles.signupButtons}>
        <TouchableOpacity 
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => props.setButtonPressedd(true)}
        >
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        {
            !keyboardIsVisible && 
            <Text style={styles.text}>- or -</Text>
        }
        {
            !keyboardIsVisible && 
            <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={()=>props.navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        }
    </View>
  );
}

const styles = StyleSheet.create({
    signupButtons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#FF9B83',
        width: '85%',
        borderRadius: 100,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
    text: {
        color: '#A0A0A0',
        textAlign: 'center',
        fontSize: 15,
        margin:20
    }
});

export default SignupButtons
