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
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       width: '100%',
       paddingHorizontal: '5%',
       marginBottom: 20
    },
    button: {
        backgroundColor: '#FFEBD2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: '15%'
    },
    text: {
        fontSize: 12,
    },
    selectedButton: {
        backgroundColor: '#FF9B83'
    }
});

export default BookTypeSelection
