import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private users = new Map<string, string>();
  handleUserConnection(client) {
    const username = client.handshake.query.username as string;
    const usersList = Array.from(this.users.values());
    if (usersList.includes(username)) {
      client.emit('error', 'Usuáro já existe!');
      client.disconnect();
      console.log('Conexão rejeitada para', username);
      return;
    }
    this.users.set(client.id, username);
    return username;
  }
}
