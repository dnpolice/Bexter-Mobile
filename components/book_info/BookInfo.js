import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import BookInfoText from './BookInfoText';
import PlayButton from './PlayButton';
import BackIcon from '../general/InputIcons/BackIcon';


const BookInfo= ({navigation, socket, story}) => {
    const {id, title, author, description, keyLearningOutcomes, coverPhoto: uri} = story;

    return (
        <View style={styles.bookInfo}>
            <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.back}
                onPress={() => navigation.navigate("Home")}
            >
                <BackIcon />
            </TouchableOpacity>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.author}>by {author}</Text>
            <Image source={{ uri: uri }} style={styles.img} />
            <BookInfoText description={description} keyLearningOutcomes={keyLearningOutcomes} />
            <PlayButton socket={socket} id={id}/>
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
    back: {
        position: 'absolute',
        top: 30,
        left: 30,
    }
});

export default BookInfo
