import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*', 
    },
  })
  export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    
    handleConnection(client: Socket) {
      const username = client.handshake.query.username;
      this.server.emit('newUser', {username})
      console.log('Usuário conectado:', username);
    };
  
    handleDisconnect(client: Socket) {
      const username = client.handshake.query.username;
      this.server.emit('userLeft', {username})
      console.log('Usuário desconectado', username);
    }

    @SubscribeMessage('sendMessage')
    handleMessage(@MessageBody() message: any, @ConnectedSocket() client: Socket) {
      const username = client.handshake.query.username;
      console.log('Mensagem recebida:', message);
      this.server.emit('receiveMessage', {username, message});
    }
  }
  