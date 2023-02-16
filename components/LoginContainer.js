import { StyleSheet, View, Text } from 'react-native';
import Login from './Login';
import LoginOverlay from './LoginOverlay';
import Logo from './Logo';

export default function App() {
  return (
    <View style={styles.loginContainer}>
        <LoginOverlay />
        <View style={styles.logo}>
            <Logo />
            <Text style={styles.title}>Bexter</Text>
            <Text style={styles.text}>Bex, the Exemplary Teaching</Text>
            <Text style={styles.text}>and Engaging Robot</Text>
        </View>
        <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#5861B0',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
