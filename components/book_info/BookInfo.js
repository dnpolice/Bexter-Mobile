import {StyleSheet, View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import BookInfoText from './BookInfoText';

const BookInfo= ({navigation, socket, story}) => {
    const {id, title, author, description, keyLearningOutcomes, coverPhoto: uri} = story;

    return (
        <View style={styles.bookInfo}>
            <Pressable 
                style={styles.back}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.text}>Back</Text>
            </Pressable>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.author}>by {author}</Text>
            <Image source={{ uri: uri }} style={styles.img} />
            <BookInfoText description={description} keyLearningOutcomes={keyLearningOutcomes} />
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => socket.emit('input', {robotSerialNumber: 33, command: "play", storyId: id})}
            >
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    bookInfo: {
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
        marginBottom: 5,
    },
    author: {
        fontSize: 16,
        marginBottom: 30,
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 10,
        marginBottom: 30,
    },
    button: {
        position: 'absolute',
        bottom: 40,
        backgroundColor: '#FF9B83',
        width: '85%',
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: "white",
        padding: 15,
        fontSize: 20,
    },
    back: {
        position: 'absolute',
        top: 30,
        left: 30,
    }
});

export default BookInfo
