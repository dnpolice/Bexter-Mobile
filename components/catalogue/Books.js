import {StyleSheet, ScrollView, View } from 'react-native';
import Book from './Book';

const Books = ({navigation, stories, setStoryAsFavourite}) => {
  return (
    <View style={styles.books}>
      <ScrollView style={styles.scroll}>
        {stories.length > 0 && stories.map((story, i) => (
          <Book
            key={i}
            story={story}
            navigation={navigation}
            setStoryAsFavourite={setStoryAsFavourite}/>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    books: {
      width: '100%',
      flex: 1,
    },
    scroll: {
      marginBottom: 60
    }
});

export default Books
