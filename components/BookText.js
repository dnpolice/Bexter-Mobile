import {StyleSheet, View, Text, Pressable} from 'react-native';
import FavouriteIcon from './FavouriteIcon';

const BookText = ({title, author, keyLearningOutcomes}) => {
    const keyLearningOutcomesString = keyLearningOutcomes.reduce((t, c, i) => {
        if (i === 0) return c;
        return `${t}, ${c}`;
      }, "");

    return (
        <View style={styles.bookText}>
            <Pressable style={styles.favouriteIcon}>
                <FavouriteIcon />
            </Pressable>
            <View style={styles.textGroup}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>by {author}</Text>
            </View>
            <View style={styles.textGroup}>
                <Text style={styles.text}>Learning Outcomes</Text>
                <Text style={{...styles.keywords, ...styles.text}}>{keyLearningOutcomesString}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bookText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'start',
        width: 150,
        heigh: 150
    },
    keywords: {
        color: '#FF9B83',
    },
    text: {
        fontSize: 16,
        paddingVertical: 2
    },
    favouriteIcon: {
        position: 'absolute',
        top: 5,
        right: 0,
    },
    textGroup: {
        paddingVertical: 10,
    }
});

export default BookText
