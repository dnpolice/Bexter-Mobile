import { StyleSheet, TextInput, View } from 'react-native';

const LoginInput = () => {
  return (
    <View style={styles.loginInput}>
        <TextInput
            style={styles.input}
            placeholder="UserEmail@some.com"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
        />
    </View>
  );
}


const styles = StyleSheet.create({
    loginInput: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 20,
        width: '85%',
        borderWidth: '1',
        borderStyle: 'solid',
        borderColor: '#D9D9D9',
        borderRadius: '50%'
      },
});

export default LoginInput
