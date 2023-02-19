import { StyleSheet, View } from 'react-native';
import Login from './Login';
import BackgroundOverlay from './BackgroundOverlay';
import LogoContainer from './LogoContainer';

const LoginContainer = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
        <BackgroundOverlay />
        <LogoContainer />
        <Login navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#5861B0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    display: 'flex',
    display: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
  },
  title: {
    fontSize: 40,
    color: '#FEE0E0'
  },
  text: {
    fontSize: 20,
    color: '#FEE0E0'
  }
});

export default LoginContainer
