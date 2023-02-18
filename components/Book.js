import {StyleSheet, View, Image } from 'react-native';
import BookInfo from './BookInfo';

// const uri = 'https://bexter.s3.us-east-2.amazonaws.com/8f3dbbde3b0a1f75813cda3d89d836f2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4LEUWX3PEV447H4N%2F20230218%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230218T170043Z&X-Amz-Expires=900&X-Amz-Signature=35b1c6b6bc71de68d6c050557aeb28635f8a088f7881a55b46d5ba7eff13c3f4&X-Amz-SignedHeaders=host'

const Book = ({navigation, story}) => {
    const title = story.title;
    const author = story.author;
    const keyLearningOutcomes = story.keyLearningOutcomes;
    const uri = story.coverPhoto;

    return (
        <View style={styles.book}>
            <Image source={{ uri: uri }} style={styles.img} />
            <BookInfo title={title} author={author} keyLearningOutcomes={keyLearningOutcomes} />
        </View>
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
