import {StyleSheet, View, Text} from 'react-native';

const BookInfo = ({navigation, title, author, keyLearningOutcomes}) => {
    const keyLearningOutcomesString = keyLearningOutcomes.reduce((t, c, i) => {
        if (i === 0) return c;
        return `${t}, ${c}`;
      }, "");

    return (
        <View style={styles.bookInfo}>
            <View>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>by {author}</Text>
            </View>
            <View>
                <Text style={styles.text}>Learning Outcomes</Text>
                <Text style={{...styles.keywords, ...styles.text}}>{keyLearningOutcomesString}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bookInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
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
    }
});

export default BookInfo
