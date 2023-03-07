import {StyleSheet, View, Image, Pressable } from 'react-native';
import BookText from './BookText';

const Book = ({navigation, story, setStoryAsFavourite}) => {
    const id = story.id;
    const title = story.title;
    const author = story.author;
    const keyLearningOutcomes = story.keyLearningOutcomes;
    const uri = story.coverPhoto;
    const favourited = story.favourite

    return (
        <Pressable onPress={() => navigation.navigate('BookInfoContainer', {story})}> 
            <View style={styles.book}>
                <Image source={{ uri: uri }} style={styles.img} />
                <BookText key={id} id={id} title={title} author={author} keyLearningOutcomes={keyLearningOutcomes} favourited={favourited} setStoryAsFavourite={setStoryAsFavourite}/>
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
        height: 175,
        marginBottom: 20,
        marginHorizontal: '5%'
    },
    img: {
        width: 175,
        height: 175,
        borderRadius: '10%'
    }
});

export default Book
