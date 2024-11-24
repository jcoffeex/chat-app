import { io, Socket } from "socket.io-client";
import { store } from "@redux/store";
import { setMessages, setTypedMessage, setIsLoggedIn} from "@redux/slices/userSlice";
import { serverIp } from "@utils/functions/getServerIp";
import { showMessage } from "react-native-flash-message";
import colors from "@utils/constants/colors";
import { encryptMessage, decryptMessage } from "@utils/functions/crypto";

let socket: Socket;

const port = 3000;
const webSocket = (username: string): Promise<Socket> => {
  return new Promise((resolve, reject) => {
    socket = io(`http://${serverIp}:${port}`, {
      query: { username },
    });

    socket.on('connect', () => {
      console.log('Conectado ao WebSocket');
      store.dispatch(setIsLoggedIn(true));  
      resolve(socket);
    });

    socket.on('error', (error) => {
      console.error(error);
      store.dispatch(setIsLoggedIn(false));
      reject(error); 
    });

    socket.on('connect_error', (error) => {
      console.error('Erro ao conectar ao WebSocket:', error);
      store.dispatch(setIsLoggedIn(false));
      reject(error); 
    });

    socket.on('newUser', (data) => {

      showMessage({
        message: "Novo usuário conectado",
        description: `${data.username} entrou na sala.`,
        duration: 10000,
        backgroundColor: colors["orange-00"], 
      });
    })

    socket.on('userLeft', (data) => {
      showMessage({
        message: "Usuário desconectado.",
        description: `${data.username} saiu da sala.`,
        duration: 10000,
      });
    })

    socket.on('receiveMessage', (data) => {
      const decryptedMessage = decryptMessage(data.message);
      const message = {
        user: data.username,
        message: decryptedMessage
      }
      store.dispatch(setMessages([message]));
      console.log(`${data.username}: ${data.message}`);
    });
  });
};

export const sendMessage = (message: string) => {
  const typedMessage = store.getState().user.typedMessage;
  if (socket && socket.connected && typedMessage) {
    const encryptedMessage = encryptMessage(message);
    socket.emit('sendMessage', encryptedMessage);
    store.dispatch(setTypedMessage(''))
  } else {
    console.log('Erro: WebSocket não está conectado.');
  }
};

export default webSocket;
