import {StyleSheet, View, Text, Image} from 'react-native';

const BookInfoText = ({navigation, description, keyLearningOutcomes}) => {
    const keyLearningOutcomesString = keyLearningOutcomes.reduce((t, c, i) => {
        if (i === 0) return c;
        return `${t}, ${c}`;
      }, "");

    return (
        <View style={styles.bookInfoText}>
            <Text style={styles.text}>{description}</Text>
            <Text style={{...styles.text, ...styles.textGroup}}>Key Learning Outcomes:</Text>
            <Text style={styles.text }>{keyLearningOutcomesString}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    bookInfoText: {
        width: '80%',
    },
    text: {
        fontSize: 16,
        marginBottom: 30,
        color: '#A0A0A0'
    },
    textGroup: {
        marginBottom: 5,
    }
});

export default BookInfoText