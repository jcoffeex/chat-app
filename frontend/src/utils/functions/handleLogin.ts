import webSocket from "@services/webSocket";
import { store } from "@redux/store";
import { setIsLoggedIn } from "@redux/slices/userSlice";

const handleLogin = async (username: string) => {
    try {
      if (username.trim()) {
        console.log('Conectando com o username:', username);
        await webSocket(username)
        console.log('Conexão WebSocket estabelecida com sucesso.');
      } else {
        console.log('Por favor, insira um nome de usuário válido.');
      }
    } catch (error) {
      console.error('Erro ao tentar conectar ao WebSocket:', error);
    }
  };

  export default handleLogin;