import {StyleSheet, Text, View, Pressable} from 'react-native';

const BookTypeSelection = ({navigation}) => {
  return (
    <View style={styles.bookTypeSelection}>
        <Pressable style={styles.button}>
            <Text style={styles.text}>All</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Favourites</Text>
        </Pressable>
        <Pressable style={styles.button}>
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
        // color: '#858585',
    }
});

export default BookTypeSelection
