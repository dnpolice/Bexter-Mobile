import { View, StyleSheet } from 'react-native';
import LoginPattern from './LoginPattern.js'

const LoginOverlay = () => {
    return (
        <View style={styles.loginOverlay}>
            <LoginPattern />
        </View>
    )
}

const styles = StyleSheet.create({
    loginOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        transform: [{ rotate: '-45deg' }],
        opacity: 0.5
    }
})

export default LoginOverlay;