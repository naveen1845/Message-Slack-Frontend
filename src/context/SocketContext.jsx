import { createContext, useState } from 'react';
import { io } from 'socket.io-client';

import { useChannelMessages } from '@/hooks/context/useChannelMessages';

const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {

    const socket = io(import.meta.env.VITE_BACKEND_SOCKET_URL);
    
    const [currentChannel, setCurrentChannel ] = useState(null);

    const { messageList, setMessageList } = useChannelMessages();

    async function joinChannel(channelId) {
        socket.emit('JoinChannel', { channelId }, (data) => {
            console.log('successfully joined channel', data?.data);
            setCurrentChannel(data?.data);
        });
    }

    socket.on('NewMessageRecieved', (data) => {
        console.log('New message received', data);
        setMessageList([...messageList, data]);
    });

    return(
        <SocketContext.Provider value={{ socket, joinChannel, currentChannel}}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;