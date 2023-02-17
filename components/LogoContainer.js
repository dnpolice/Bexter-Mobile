import {View, Text, StyleSheet} from 'react-native'
import Logo from './Logo';

const LogoContainer = () => {
    return (
        <View style={styles.logo}>
            <Logo />
            <Text style={styles.title}>Bexter</Text>
            <Text style={styles.text}>Bex, the Exemplary Teaching</Text>
            <Text style={styles.text}>and Engaging Robot</Text>
        </View>
    )
}


const styles = StyleSheet.create({
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


export default LogoContainer;