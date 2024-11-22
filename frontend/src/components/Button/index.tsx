import React from "react";
import * as C from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@utils/constants/colors";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import handleLogin from "@utils/functions/handleLogin";

export function ButtonLogin() {
  const username = useSelector((state: RootState) => state.login.username);
  return (
    <C.ButtonLogin onPress={() => handleLogin(username)}>
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
