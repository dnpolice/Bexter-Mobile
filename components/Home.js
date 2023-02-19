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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      height: '80%',
      backgroundColor: 'white',
      borderRadius: '50%',
      width: '100%',
    },
    text: {
      fontSize: 30,
      width: '100%',
      paddingLeft: '5%',
      marginTop: 40,
      marginBottom: 20,
    }
});

export default Home
