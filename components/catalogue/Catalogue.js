import {StyleSheet, Text, View } from 'react-native';
import BookTypeSelection from './BookTypeSelection.js';
import Books from './Books';

const Catalogue = ({
  navigation,
  stories,
  setBookType,
  bookType,
  setStoryAsFavourite,
  userName, 
  searching}) => {

  return (
    <View style={styles.home}>
      {searching &&
      <Text style={styles.text}>Books for {userName}</Text>}
      {searching &&
        <BookTypeSelection setBookType={setBookType} bookType={bookType}/>}
      <Books
        stories={stories}
        navigation={navigation}
        setStoryAsFavourite={setStoryAsFavourite}/>
    </View>
  );
}

const styles = StyleSheet.create({
    home: {
      height: '80%',
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingTop: 40,
    },
    text: {
      fontSize: 30,
      paddingLeft:20,
      marginBottom: 20,
    }
});

export default Catalogue
