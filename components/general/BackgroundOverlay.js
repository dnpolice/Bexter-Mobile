import { View, StyleSheet } from 'react-native';
import LoginPattern from '../LoginPattern.js'


const BackgroundOverlay = ({navigation}) => {
    return (
        <View style={styles.backgroundOverlay}>
            <LoginPattern />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundOverlay: {
        position: 'absolute',
        transform: [
            { rotate: '-30deg' },
            { translateY: -100 },
        ],
        opacity: 0.5,
        top: 0,
        left: 0,
    }
})

export default BackgroundOverlay;