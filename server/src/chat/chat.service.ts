import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private users = new Map<string, string>();
  handleUserConnection(client) {
    const username = client.handshake.query.username as string;
    if (this.users.has(username)) {
      client.emit('error', 'Usuáro já existe!');
      client.disconnect();
      console.log('Conexão rejeitada para', username);
      return;
    }
    this.users.set(username, client.id);
    return username;
  }
}
