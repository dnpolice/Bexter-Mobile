import { StyleSheet, TextInput, View, Platform } from 'react-native';
import EmailIcon from '../general/InputIcons/EmailIcon';
import PasswordIcon from '../general/InputIcons/PasswordIcon';

const LoginInput = props => {
  return (
    <View style={styles.loginInput} height={Platform.OS === 'ios'? '22.5%':'auto'}>
        <View style={styles.inputContainer}>
          <EmailIcon />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={emailInput => props.setEmail(emailInput)}
          />
        </View>
        <View style={styles.inputContainer}>
          <PasswordIcon />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={passwordInput => props.setPassword(passwordInput)}
          />
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    loginInput: {
        width: '100%',
        height: '22.5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        height: 55,
        margin:10,
        width: "85%",
        borderRadius: 50,
        paddingLeft: 20
      },
    input: {
      flex: 1,
      paddingLeft: 10,
    }
});

export default LoginInput
