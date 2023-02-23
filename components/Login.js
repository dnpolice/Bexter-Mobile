import {StyleSheet, Text, View } from 'react-native';
import LoginButtons from './LoginButtons';
import LoginInput from './LoginInput';

const Login = ({navigation}) => {
  return (
    <View style={styles.login}>
        <Text style={styles.header}>Welcome Back!</Text>
        <LoginInput />
        <LoginButtons navigation={navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
    login: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '65%',
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: '100%',
    },
    header: {
        fontSize: 30,
        width: '100%',
        paddingLeft: '10%',
    }
});

export default Login
