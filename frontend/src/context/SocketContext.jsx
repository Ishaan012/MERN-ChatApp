import { createContext, useState, useEffect } from 'react';
import { useAuthContext } from './AuthContext';
import io from "socket.io-client";
import {useContext} from 'react';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);  // use this hook to get the socket and onlineUsers state from the context.  Example: const { socket, onlineUsers } = useSocketContext();  // then you can use socket.on() and onlineUsers in your components.  This hook automatically handles closing the socket when the user logs out.
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(socket);

            //socket.on() is used to listen to the events. can be used on both client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => {
                socket.close();
            }
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
}