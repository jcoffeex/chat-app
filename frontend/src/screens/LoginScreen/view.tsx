import React from "react";
import { StatusBar } from "expo-status-bar";
import * as C from "./styles";
import { LoginInput } from "@components/Input";
import { View } from "react-native";
import { ButtonLogin } from "@components/Button";
export default function LoginScreen() {
  return (
    <C.Container>
      <StatusBar style="dark" />
      <C.Content>
        <C.Text>Entrar</C.Text>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <LoginInput />
          <ButtonLogin />
        </View>
      </C.Content>
    </C.Container>
  );
}
