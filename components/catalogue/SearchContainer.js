import {StyleSheet, View, Text} from 'react-native';
import BackgroundOverlay from '../general/BackgroundOverlay';

import { useEffect, useRef } from 'react';


const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/"

const BookInfoContainer = ({navigation, route}) => {
    

    return (
        <View style={styles.bookInfoContainer}>
            <BackgroundOverlay />
            <Text>some</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    bookInfoContainer: {
        flex: 1,
        backgroundColor: '#5861B0',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    }
});

export default BookInfoContainer
