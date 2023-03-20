import { StyleSheet, TextInput, View } from 'react-native';

const SignupInput = props => {
  return (
    <View style={styles.signupInput}>
        <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={nameInput => props.setName(nameInput)}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={emailInput => props.setEmail(emailInput)}
        />
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={passwordInput => props.setPassword(passwordInput)}
        />
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Robot ID"
            onChangeText={robotIDInput => props.setRobotID(robotIDInput)}
        />
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
        height: "50%"
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        paddingLeft: 20,
        width: '85%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D9D9D9',
        borderRadius: 100
      },
});

export default SignupInput
