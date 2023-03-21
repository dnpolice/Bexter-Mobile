import {StyleSheet, View, TextInput, SafeAreaView, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';
import React, { useState, useEffect } from 'react';
import BackgroundOverlay from '../general/BackgroundOverlay';
import Catalogue from './Catalogue';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchIcon from '../general/InputIcons/SearchIcon';
import SideMenu from 'react-native-side-menu-updated';

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
  const [searchInput, setSearchInput] = useState("");
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

  let filteredStories = allStories;
  if (bookType == "Favourites") {
    filteredStories = filteredStories.filter(story => story.favourite == true);
  } else if (bookType == "Previously Watched") {
    filteredStories = filteredStories.filter(story => story.previouslyWatched == true);
  }

  if (searchInput !== "") {
    filteredStories = filteredStories.filter(story => {
      const keyLearningOutcomes = story.keyLearningOutcomes.map(word => word.toLowerCase()).reduce((s, word) => {
        return s + " " + word
      }, "");

      const inputLearningOutcomes =  searchInput.split(",");
      const inputLearningOutComesInStory = inputLearningOutcomes
        .map(word => word.trim().toLowerCase())
        .filter(word => keyLearningOutcomes.includes(word));
      
      return inputLearningOutComesInStory.length == inputLearningOutcomes.length
        || story.title.toLowerCase().includes(searchInput.toLowerCase())
        || story.author.toLowerCase().includes(searchInput.toLowerCase())
    });
  }
  
  const HamburgerMenu =
    <SideMenu navigator={navigator}>
      <Text style={styles.hamburgerTop}>  </Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.hamburgerItems}>About Bexter</Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.hamburgerItems}>About Team Mechateachers</Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })}>
        <Text style={styles.hamburgerItemLogout}>Logout</Text> 
      </TouchableOpacity>
    </SideMenu>;
    
  return (
    <SideMenu menu={HamburgerMenu}>
    <View style={styles.homeContainer}>
      <BackgroundOverlay />
      <KeyboardAvoidingView enabled={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.searchbar}>
            <SearchIcon />
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchInput}
                onChangeText={(value) => setSearchInput(value)}
            />
            {
              searchInput !== "" &&
              <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSearchInput("")}
              >
                <Text> Clear </Text>
              </TouchableOpacity>
            }
            
          </View>
        </SafeAreaView>
        <Catalogue
          navigation={navigation}
          stories={filteredStories}
          setBookType={setBookType}
          bookType={bookType}
          setStoryAsFavourite={setStoryAsFavourite}
          userName={name}
        />
      </KeyboardAvoidingView>
    </View>
    </SideMenu>
  );
}

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
    container: {
      marginBottom:50,
    },
    clearButton:{
      justifyContent: 'center', 
      color: '#ff0000'
    },
    searchbar:{
      backgroundColor: '#fff',
      padding: 15,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 100,
      marginTop: 70,
      marginLeft:20, 
      marginRight: 20,
      flexWrap:'wrap',
      flexDirection: 'row',
    },
    input: {
      paddingLeft: 10,
      width: '75%'
    },
    hamburgerTop:{
      margin: 20,
      fontSize:30,
    }, 
    hamburgerItems:{
      padding:12,
      fontSize:20,
      borderColor:'#b4b4b4',
      borderBottomWidth:.5, 
      borderTopWidth:.5
    }, 
    hamburgerItemLogout:{
      padding:12,
      fontSize:20,
      backgroundColor:'#d7d7d7'
    }
    
});

export default HomeContainer
