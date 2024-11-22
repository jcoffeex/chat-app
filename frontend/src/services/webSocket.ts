import { io, Socket } from "socket.io-client";

let socket: Socket;
const webSocket = (username: string) => {
  socket = io("http://10.0.2.2:3000", {
    query: { username }, 
  });

  socket.on("connect", () => {
    socket.emit('sendMessage', 'Café...')
  });

  socket.on("connect_error", (error) => {
    console.error("Erro ao conectar ao WebSocket:", error);
  });

  return socket;
};

export default webSocket;