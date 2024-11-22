import { io, Socket } from "socket.io-client";
import { store } from "@redux/store";
import { setMessages } from "@redux/slices/userSlice";
let socket: Socket;

const webSocket = (username: string): Promise<Socket> => {
  return new Promise((resolve, reject) => {
    socket = io('http://10.0.2.2:3000', {
      query: { username },
    });

    socket.on('connect', () => {
      console.log('Conectado ao WebSocket');
      resolve(socket);  
    });

    socket.on('connect_error', (error) => {
      console.error('Erro ao conectar ao WebSocket:', error);
      reject(error); 
    });

    socket.on('receiveMessage', (data) => {
      const message = {
        user: data.username,
        message: data.message
      }
      store.dispatch(setMessages([message]));
      console.log(`${data.username}: ${data.message}`);
    });
  });
};

export const sendMessage = (message: string) => {
  if (socket && socket.connected) {
    socket.emit('sendMessage', message);
  } else {
    console.log('Erro: WebSocket não está conectado.');
  }
};

export default webSocket;
