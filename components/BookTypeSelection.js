import {StyleSheet, Text, View, Pressable} from 'react-native';

const BookTypeSelection = ({bookType, setBookType}) => {
    return (
        <View style={styles.bookTypeSelection}>
            <Pressable 
                style={bookType === "All" ? { ...styles.button, ...styles.selectedButton} : styles.button}
                onPress={() => setBookType("All")}
            >
                <Text style={styles.text}>All</Text>
            </Pressable>
            <Pressable
                style={bookType === "Favourites" ? { ...styles.button, ...styles.selectedButton} : styles.button}
                onPress={() => setBookType("Favourites")}
            >
                <Text style={styles.text}>Favourites</Text>
            </Pressable>
            <Pressable
                style={bookType === "Previously Watched" ? { ...styles.button, ...styles.selectedButton} : styles.button}
                onPress={() => setBookType("Previously Watched")}
            >
                <Text style={styles.text}>Previously Watched</Text>
            </Pressable>
        </View>
  );
}


const styles = StyleSheet.create({
    bookTypeSelection: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingHorizontal: 15,
       marginBottom: 25
    },
    button: {
        backgroundColor: '#FFEBD2',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 15
    },
    text: {
        fontSize: 16,
    },
    selectedButton: {
        backgroundColor: '#FF9B83'
    }
});

export default BookTypeSelection
