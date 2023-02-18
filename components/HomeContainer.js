import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import BackgroundOverlay from './BackgroundOverlay';
import Home from './Home';

const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/";
const allStoriesUrl = base_url + "stories/all";
const favouritesUrl = base_url + 'stories/favourites';
const previouslyWatchedUrl = base_url + 'stories/previouslyWatched';

const HomeContainer = ({navigation}) => {
  const allStories = fetchAllStories();
  return (
    <View style={styles.homeContainer}>
      <BackgroundOverlay />
      <TextInput
            style={styles.input}
            placeholder="Search"
        />
        <Home stories={allStories}/>
    </View>
  );
}

const fetchAllStories = () => {
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
      
      console.log(allStories);
      console.log(favourites);
      console.log(previouslyWatched);

      setAllStories(allStories);
    }
    fetchData();
  }, []);

  return allStories;
}


const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#5861B0',
    },
    text: {
        fontSize: 30,
    },
    input: {
      display: 'block',
      backgroundColor: '#fff',
      padding: 10,
      paddingLeft: 20,
      width: '85%',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#D9D9D9',
      borderRadius: '50%',
      top: '10%'
    },
    
});

export default HomeContainer
