import React from "react";
import { StatusBar } from "expo-status-bar";
import * as C from "./styles";
import { ChatInput } from "@components/Input";
import { ButtonChat } from "@components/Button";
import Message from "@components/Message";

export default function ChatScreen() {
  return (
    <C.Container>
      <StatusBar style="light" />
      <C.Content messageOrientation="recipient">
        <C.MessagesContainer>
          <Message />
        </C.MessagesContainer>
        <C.inputContainer>
          <ChatInput />
          <ButtonChat />
        </C.inputContainer>
      </C.Content>
    </C.Container>
  );
}
