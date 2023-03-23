import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BackIcon from '../general/InputIcons/BackIcon';
import BackgroundOverlay from '../general/BackgroundOverlay';

;
const About = ({navigation}) => {
  return (
    <View style={styles.aboutContainer}>
        <BackgroundOverlay />
        <View style={styles.about} >
            <TouchableOpacity 
                    activeOpacity={0.7}
                    style={styles.back}
                    onPress={() => navigation.navigate("Home")}
                >
                <BackIcon />
            </TouchableOpacity>
                <Text style={styles.header} >About</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Bexter is a supplementary tool that mimics a session with a Speech Language Pathologist (SLP). It reads aloud a children's story while modeling the proper use of an Augmentative and Alternative Communication (AAC) board.</Text>
                <Text style={styles.text}>It is a take home solution that teaches the use of AAC boards through modeling. Bexter is compatible with AAC boards of any size allowing AAC board progression. It is designed to be used in a supervised enviornment.</Text>
                <Text style={styles.text}>Each story has key learning outcomes focusing on the repetition of certain symbols. The variety of stories allows for a balance of repetition and adaptation.</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
        backgroundColor: '#5861B0',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    about: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80%',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        paddingTop: 20,
    },
    header: {
        fontSize: 25,
        marginTop: 60,
        marginBottom: 30,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 30,
        color: '#A0A0A0',
        textAlign: "justify",
    },
    back: {
        position: 'absolute',
        top: 30,
        left: 30,
    },
    textContainer: {
        width: "80%"
    }
});

export default About
