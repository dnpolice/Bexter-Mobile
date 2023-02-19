import { View, StyleSheet } from 'react-native';
import LoginPattern from './LoginPattern.js'


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
        height: '100%',
        width: '100%',
        transform: [
            { rotate: '-45deg' },
        ],
        opacity: 0.5,
        top: 0,
        left: 0,
    }
})

export default BackgroundOverlay;