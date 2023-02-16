import { StyleSheet, View } from 'react-native';
import LoginContainer from './components/LoginContainer';

export default function App() {
  return (
    <View style={styles.container}>
        <LoginContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
