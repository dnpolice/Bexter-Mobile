import { StyleSheet, TextInput, View } from 'react-native';
import NameIcon from '../general/InputIcons/NameIcon';
import EmailIcon from '../general/InputIcons/EmailIcon';
import PasswordIcon from '../general/InputIcons/PasswordIcon';
import RobotIDIcon from '../general/InputIcons/RobotIDIcon';


const SignupInput = props => {
  return (
    <View style={styles.signupInput}>
        <View style={styles.inputContainer}>
            <NameIcon />
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={nameInput => props.setName(nameInput)}
            />
        </View>
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
        <View style={styles.inputContainer}>
            <RobotIDIcon />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Robot ID"
                onChangeText={robotIDInput => props.setRobotID(robotIDInput)}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    signupInput: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: "45%",
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        height: 55,
        width: "85%",
        borderRadius: 50,
        paddingLeft: 20
      },
    input: {
      flex: 1,
      paddingLeft: 10,
    }
});

export default SignupInput
