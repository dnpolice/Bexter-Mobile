import {StyleSheet, View, Image, Pressable } from 'react-native';
import BookText from './BookText';

const Book = ({navigation, story}) => {
    const title = story.title;
    const author = story.author;
    const keyLearningOutcomes = story.keyLearningOutcomes;
    const uri = story.coverPhoto;

    return (
        <Pressable onPress={() => navigation.navigate('BookInfoContainer', {story})}> 
            <View style={styles.book}>
                <Image source={{ uri: uri }} style={styles.img} />
                <BookText title={title} author={author} keyLearningOutcomes={keyLearningOutcomes} />
            </View>
        </Pressable>
        
  );
}


const styles = StyleSheet.create({
    book: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150,
        marginBottom: 20,
        marginHorizontal: '5%'
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: '10%'
    }
});

export default Book
