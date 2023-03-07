import { Pressable, StyleSheet, Text, View } from 'react-native';

const LoginButtons = props => {
  return (
    <View style={styles.loginButtons}>
        <Pressable 
            style={styles.button}
            onPress={() => props.setButtonPressed(true)}
        >
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Text style={styles.text}>- or -</Text>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Create New Account</Text>
        </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    loginButtons: {
        width: '100%',
        height: '30%',
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
    }
});

export default LoginButtons
