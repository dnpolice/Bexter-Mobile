import { StyleSheet, TextInput, View } from 'react-native';

const LoginInput = props => {
  return (
    <View style={styles.loginInput}>
        <TextInput
            style={{...styles.input, ...styles.email}}
            placeholder="Email"
            onChangeText={emailInput => props.setEmail(emailInput)}
        />
        <TextInput
            style={{...styles.input, ...styles.password}}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={passwordInput => props.setPassword(passwordInput)}
        />
    </View>
  );
}


const styles = StyleSheet.create({
    loginInput: {
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        paddingLeft: 20,
        width: '85%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D9D9D9',
        borderRadius: 100, 
      },
    email: {
      // marginBottom:30,
    },
    password: {
      
    }
});

export default LoginInput
