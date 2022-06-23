import React from 'react';
import { Text, FlatList, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";


const ChatRoomScreen =() => {

    const route = useRoute();

    //console.log(route.params) 

    return (
        <ImageBackground>
            <FlatList
        data = {chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message = {item} /> }
        inverted
       />

        </ImageBackground>
       
    );

}
export default ChatRoomScreen;