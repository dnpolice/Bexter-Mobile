import {StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/";
const allStoriesUrl = base_url + "stories/all";
const favouritesUrl = base_url + 'stories/favourites';
const previouslyWatchedUrl = base_url + 'stories/previouslyWatched';

const HomeContainer = ({navigation}) => {
  const allStories = fetchAllStories();
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.text}>Hello</Text>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    text: {
        fontSize: 30,
    }
});

export default HomeContainer
