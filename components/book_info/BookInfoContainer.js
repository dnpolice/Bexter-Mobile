import {StyleSheet, View, Text} from 'react-native';
import BackgroundOverlay from '../general/BackgroundOverlay';
import BookInfo from './BookInfo';
import io from 'socket.io-client';
import { useEffect, useRef } from 'react';


const base_url = "http://3.134.99.13:5000/";
// const base_url = "http://localhost:5000/"

const BookInfoContainer = ({navigation, route}) => {
    let socket = io(base_url,  { transports: ['websocket', 'polling', 'flashsocket'] });
    const { story } = route.params;
    
    // connectToRobot(socket);

    const socketRef = useRef(null);

    useEffect(() => {
        // Create a new socket connection when the component mounts
        socketRef.current = io(base_url,  { transports: ['websocket', 'polling', 'flashsocket'] });

        // Join the socket room
        socketRef.current.emit('join', 33);

        // Clean up function to disconnect the socket connection when the component unmounts
        return () => {
            socketRef.current.disconnect();
        }
    }, []);

    return (
        <View style={styles.bookInfoContainer}>
            <BackgroundOverlay />
            <BookInfo socket={socket} story={story} navigation={navigation}/>
        </View>
    );
}

const connectToRobot = (socket) => {
    useEffect(() => {
        socket.emit('join', 33);
    }, [])
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
