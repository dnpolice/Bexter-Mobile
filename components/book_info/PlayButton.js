import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const PlayButton = ({id, socket}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={!isPlaying ? {...styles.button, ...styles.playButton} : {...styles.button, ...styles.stopButton}}
            onPress={() => onPress(socket, id, isPlaying, setIsPlaying)}
        >
            <Text style={styles.buttonText}>{!isPlaying ? "Play": "Stop"}</Text>
        </TouchableOpacity>
    )
}

const onPress = (socket, id, isPlaying, setIsPlaying) => {
    console.log(isPlaying)
    if (isPlaying) {
        console.log("here")
        socket.emit('input', {robotSerialNumber: 33, command: "stop"})
        setIsPlaying(false);
    } else {
        socket.emit('input', {robotSerialNumber: 33, command: "play", storyId: id})
        setIsPlaying(true);
    }
}
   

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 40,
        width: '85%',
        borderRadius: 50,
    },
    playButton: {
        backgroundColor: '#FF9B83',
    },
    stopButton: {
        // backgroundColor: "#D4A6B9",
        // backgroundColor: "#CB4C4E",
        backgroundColor: "#BE4152"
    },
    buttonText: {
        textAlign: 'center',
        color: "white",
        padding: 15,
        fontSize: 20,
    }
});

export default PlayButton
