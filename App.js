import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.login}>
          <Text style={styles.header}>Welcome Back!</Text>
          <TextInput
            style={styles.input}
            placeholder="Useremail@some.com"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
          <Pressable 
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Text style={styles.text}>- or -</Text>
          <Pressable 
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create New Account</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5861B0',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 20,
    width: '90%',
    borderWidth: '1',
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderRadius: '50%'
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '65%',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '100%',
  },
  header: {
    fontSize: 30,
    width: '100%',
    paddingLeft: '10%',
  },
  button: {
    backgroundColor: '#FF9B83',
    width: '80%',
    borderRadius: '50%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
  },
  text: {
    color: '#A0A0A0',
    textAlign: 'center',
    fontSize: 15,
  }
});
