import React from "react";
import * as C from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@utils/constants/colors";

export function ButtonLogin() {
  const handleLogin = () => {
    console.log("Login efetuado");
  };
  return (
    <C.ButtonLogin onPress={handleLogin}>
      <C.Text>Entrar</C.Text>
    </C.ButtonLogin>
  );
}

export function ButtonChat() {
  return (
    <C.ButtonChat>
      <Ionicons name="send" size={24} color={colors["gray-01"]} />
    </C.ButtonChat>
  );
}
