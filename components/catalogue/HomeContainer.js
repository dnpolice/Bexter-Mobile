import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import BackgroundOverlay from './general/BackgroundOverlay';
import Home from './Home';

const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/";
const allStoriesUrl = base_url + "stories/all";
const favouritesUrl = base_url + 'stories/favourites';
const favouriteUrl = base_url + 'stories/favourite';
const unfavouriteUrl = base_url + 'stories/unfavourite'
const previouslyWatchedUrl = base_url + 'stories/previouslyWatched';

const HomeContainer = ({navigation}) => {
  // const { userName } = route.params;
  // console.log(userName);
  // need to persist

  const [allStories, setAllStories] = fetchStories();
  const [bookType, setBookType] = useState("All");

  const setStoryAsFavourite = (id, favourited) => {
    favouriteStoryPost(id, favourited);
    setAllStories(prevStories => {
      return prevStories.map(story => {
        if (story.id == id) {
          return {
            ...story,
            favourite: favourited ? false : true
          }
        } else {
          return story;
        }
      });
    });
  }
  
  const filteredStories = useMemo(() => {
    let stories = allStories;
    if (bookType == "Favourites") {
      stories = stories.filter(story => story.favourite == true);
    } else if (bookType == "Previously Watched") {
      stories = stories.filter(story => story.previouslyWatched == true);
    }
    return stories
}, [allStories, bookType])

  return (
    <View style={styles.homeContainer}>
      <BackgroundOverlay />
      <TextInput
            style={styles.input}
            placeholder="Search"
        />
        <Home
          navigation={navigation}
          stories={filteredStories}
          setBookType={setBookType}
          bookType={bookType}
          setStoryAsFavourite={setStoryAsFavourite}/>
    </View>
  );
}

const favouriteStoryPost = async (id, favourited) => {
  const url = favourited ? unfavouriteUrl : favouriteUrl;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': 'saveUser=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWVlbWFpbEBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNvbWVwYXNzZCIsImlhdCI6MTY3NjY1NzU3Mn0.Z8caQcxGaMitzea4wgDgnhZasjUq8aRkYgAnZ5ysUP4'
      },
      body: JSON.stringify({
        'storyId': id
      })
    });
}

// const fetchStories = () => {
//   const [allStories, setAllStories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const allStoriesResponse = await fetch(allStoriesUrl);
//       const allStories = await allStoriesResponse.json();
    
//       setAllStories(allStories);
//     }
//     fetchData()

//   return [allStories, setAllStories];
// }


const fetchStories = () => {
  const [allStories, setAllStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [allStoriesResponse, favouritesResponse, previouslyWatchedResponse] = await Promise.all([
        fetch(allStoriesUrl),
        fetch(favouritesUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': 'saveUser=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWVlbWFpbEBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNvbWVwYXNzZCIsImlhdCI6MTY3NjY1NzU3Mn0.Z8caQcxGaMitzea4wgDgnhZasjUq8aRkYgAnZ5ysUP4'
          }
        }),
        fetch(previouslyWatchedUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': 'saveUser=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWVlbWFpbEBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNvbWVwYXNzZCIsImlhdCI6MTY3NjY1NzU3Mn0.Z8caQcxGaMitzea4wgDgnhZasjUq8aRkYgAnZ5ysUP4'
          }
        })
      ]);

      const [allStories, favourites, previouslyWatched] = await Promise.all([
        allStoriesResponse.json(),
        favouritesResponse.json(),
        previouslyWatchedResponse.json()
      ]);

      const favouritedStories = {};
      const previouslyWatchedStories = {};
      for (let i = 0; i < favourites.length; i++) {
        favouritedStories[favourites[i].id] = favourites[i].id
      }

      for (let i = 0; i < previouslyWatched.length; i++) {
        previouslyWatchedStories[previouslyWatched[i].id] = previouslyWatched[i].id
      }

      for (let i = 0; i < allStories.length; i++) {
        if (allStories[i].id in favouritedStories) allStories[i]["favourite"] = true
        if (allStories[i].id in previouslyWatchedStories) allStories[i]["previouslyWatched"] = true
      }

      console.log(allStories)
      console.log(favourites)
      console.log(previouslyWatched)

      setAllStories(allStories);
    }

    fetchData();
  }, []);

  return [allStories, setAllStories];
}


const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#5861B0',
        overflow: 'hidden',
    },
    text: {
        fontSize: 30,
    },
    input: {
      backgroundColor: '#fff',
      padding: 10,
      paddingLeft: 20,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#D9D9D9',
      borderRadius: 100,
      top: '10%', 
      margin: 10,
      marginLeft:20, 
      marginRight: 20
    },
    
});

export default HomeContainer
