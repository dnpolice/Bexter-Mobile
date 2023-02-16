import { View, StyleSheet } from 'react-native';
import LogoPattern from './LogoPattern.js'

const Logo = () => {
    return (
        <View style={styles.logo}>
            <LogoPattern />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {

    }
})

export default Logo;