import {StyleSheet, View, Text, Pressable} from 'react-native';
import FavouriteIcon from '../general/FavouriteIcon';

const BookText = ({id, title, author, keyLearningOutcomes, favourited, setStoryAsFavourite}) => {
    const keyLearningOutcomesString = keyLearningOutcomes.reduce((t, c, i) => {
        if (i === 0) return c;
        return `${t}, ${c}`;
      }, "");

    let favouritedFill = "none";
    if (favourited) {
        favouritedFill = "#FFEBD2";
    }
    return (
        <View style={styles.bookText}>
            <Pressable
            style={styles.favouriteIcon}
            onPress={() => setStoryAsFavourite(id, favourited)}
            >
                <FavouriteIcon fill={favouritedFill}/>
            </Pressable>
            <View style={styles.textGroup}>
                <Text style={{...styles.text, ...styles.header}}>{title}</Text>
                <Text style={{...styles.text}}>by {author}</Text>
            </View>
            <View style={styles.textGroup}>
                <Text style={styles.text}>Learning Outcomes:</Text>
                <Text style={{...styles.text, ...styles.subText}}>{keyLearningOutcomesString}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bookText: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 175,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
    },
    header: {
        marginRight: 25,
    },
    subText: {
        color: '#FF9B83',
    },
    title:{
        fontSize: 17,
        paddingVertical: 2
    },
    text: {
        fontSize: 15,
        paddingVertical: 2
    },
    favouriteIcon: {
        position: 'absolute',
        top: 5,
        right: 0,
        zIndex: 1,
    },
    textGroup: {
        paddingBottom: 10,
    }
});

export default BookText
