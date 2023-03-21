import { StyleSheet, Text, View, TouchableOpacity, Keyboard, Platform } from 'react-native';
import { useState, useEffect } from 'react';
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
    <View style={styles.signupButtons} height={Platform.OS === 'ios' ? '20%' : 'auto'}>
        <TouchableOpacity 
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => props.setButtonPressedd(true)}
        >
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
            {
                Platform.OS === 'android'? !keyboardIsVisible && <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>props.navigation.navigate("Login")}
                >
                   <Text style={styles.text}>Login</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                activeOpacity={0.7}
                onPress={()=>props.navigation.navigate("Login")}
                >
                   <Text style={styles.text}>Login</Text>
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
        justifyContent: 'flex-start',
        height: "20%"
    },
    button: {
        backgroundColor: '#FF9B83',
        width: '85%',
        borderRadius: 100,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        padding: 20,
        fontSize: 20,
    },
    text: {
        color: '#A0A0A0',
        textAlign: 'center',
        fontSize: 15,
        margin: 20
    }
});

export default SignupButtons
