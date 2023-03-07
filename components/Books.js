import {StyleSheet, Text, ScrollView } from 'react-native';
import Book from './Book';

const Books = ({navigation, stories, setStoryAsFavourite}) => {
  return (
    <ScrollView style={styles.books}>
      {stories.length > 0 && stories.map((story, i) => (
        <Book key={i} story={story} navigation={navigation} setStoryAsFavourite={setStoryAsFavourite}/>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    books: {
      width: '100%'
    },
});

export default Books
