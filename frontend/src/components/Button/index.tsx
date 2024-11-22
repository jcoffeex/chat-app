import React from "react";
import * as C from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@utils/constants/colors";
import handleLogin from "@utils/functions/handleLogin";
import { sendMessage } from "@services/webSocket";
import useStore from "@hooks/useStore";
export function ButtonLogin() {
  const { username } = useStore();
  return (
    <C.ButtonLogin onPress={() => handleLogin(username)}>
      <C.Text>Entrar</C.Text>
    </C.ButtonLogin>
  );
}

export function ButtonChat() {
  const { typedMessage } = useStore();
  return (
    <C.ButtonChat onPress={() => sendMessage(typedMessage)}>
      <Ionicons name="send" size={24} color={colors["gray-01"]} />
    </C.ButtonChat>
  );
}
