import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const LoginButtons = (props) => {
  return (
    <View style={styles.loginButtons}>
        <TouchableOpacity 
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => props.setButtonPressed(true)}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=>props.navigation.navigate("Signup")}
        >
            <Text style={styles.text}>Create New Account</Text>
        </TouchableOpacity>        
    </View>
  );
}


const styles = StyleSheet.create({
    loginButtons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: "25%",
        // marginBottom: 10,
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
        margin: 20
    }
});

export default LoginButtons
