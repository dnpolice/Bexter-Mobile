import {StyleSheet, View, Text} from 'react-native';
import BackgroundOverlay from './BackgroundOverlay';
import BookInfo from './BookInfo';

const BookInfoContainer = ({navigation, route}) => {
    const { story } = route.params;

    return (
        <View style={styles.bookInfoContainer}>
            <BackgroundOverlay />
            <BookInfo story={story} navigation={navigation}/>
        </View>
    );
}


const styles = StyleSheet.create({
    bookInfoContainer: {
        flex: 1,
        backgroundColor: '#5861B0',
        flexDirection: "column",
        justifyContent: 'flex-end',
        overflow: 'hidden',
    }
});

export default BookInfoContainer
