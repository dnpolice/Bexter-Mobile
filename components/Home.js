import {StyleSheet, Text, View } from 'react-native';
import BookTypeSelection from './BookTypeSelection.js';
import Books from './Books';

const Home = ({navigation, stories, setBookType, bookType}) => {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Books for Tim</Text>
      <BookTypeSelection setBookType={setBookType} bookType={bookType}/>
      <Books stories={stories} navigation={navigation}/>
    </View>
  );
}


const styles = StyleSheet.create({
    home: {
      height: 765,
      backgroundColor: '#fff',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      transform: [
        { translateY: 100 },
    ],
    },
    text: {
      fontSize: 30,
      paddingLeft:20,
      marginTop: 40,
      marginBottom: 20,
    }
});

export default Home
