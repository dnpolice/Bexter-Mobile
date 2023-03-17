import {StyleSheet, View, TextInput} from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import BackgroundOverlay from '../general/BackgroundOverlay';
import Catalogue from './Catalogue';
import AsyncStorage from '@react-native-async-storage/async-storage';


const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/";
const cookie = "saveUser=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWVlbWFpbEBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNvbWVwYXNzZCIsImlhdCI6MTY3ODMzNzk2MX0.Jo7tWxlIPP3t1O_XhXPZ1ntgL5Wpc4oog-sabH_zNCM"
const allStoriesUrl = base_url + "stories/all";
const favouritesUrl = base_url + 'stories/favourites';
const favouriteUrl = base_url + 'stories/favourite';
const unfavouriteUrl = base_url + 'stories/unfavourite'
const previouslyWatchedUrl = base_url + 'stories/previouslyWatched';

const HomeContainer = ({navigation, route}) => {
  const [name, setName] = useState("");

  const storeUser = async () => {
    if (route.params){
      try {
        let userName = route.params.userName;
        await AsyncStorage.setItem("@userName", userName);
      } catch (error) {
        console.log(error);
      }
    }
  };  
  storeUser();

  AsyncStorage.getItem('@userName').then((value) => {
    setName(value);
  });


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
      <Catalogue
        navigation={navigation}
        stories={filteredStories}
        setBookType={setBookType}
        bookType={bookType}
        setStoryAsFavourite={setStoryAsFavourite}
        userName={name}
      />
    </View>
  );
}
const getUser = async () => {
  try {
    const savedCookie = await AsyncStorage.getItem("cookie");
    return savedCookie;
  } catch (error) {
    console.log(error);
  }
};
  // const favouriteStoryPost = async (id, favourited) => {
  //   console.log(cookie);
  //   getUser().then(
  //     function(value) { 
  //       let user = value; 
  //       // console.log('cooo:', user);
  //       setCookie(user);
  //     },
  //   );
  //   console.log(cookie);
  //   }
const favouriteStoryPost = async (id, favourited) => {
  const url = favourited ? unfavouriteUrl : favouriteUrl;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Cookie': cookie
      },
      body: JSON.stringify({
        'storyId': id
      })
    });
}

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
            // 'Cookie': cookie
          }
        }),
        fetch(previouslyWatchedUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Cookie': cookie
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

      // console.log(allStories)
      // console.log(favourites)
      // console.log(previouslyWatched)

      setAllStories(allStories.sort((a, b) => b.id - a.id));
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
    searchbar:{
      marginTop: 100,
      marginLeft:30,
      marginRight:30,
      borderRadius:30,
      marginBottom:0, 
      paddingBottom:0
      
    }
    
});

export default HomeContainer
