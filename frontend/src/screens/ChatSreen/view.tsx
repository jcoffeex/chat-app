import React from "react";
import { StatusBar } from "expo-status-bar";
import * as C from "./styles";
import { ChatInput } from "@components/Input";
import { ButtonChat } from "@components/Button";
import Message from "@components/Message";
import useStore from "@hooks/useStore";
export default function ChatScreen() {
  const { username, messageReceived } = useStore();
  return (
    <C.Container>
      <StatusBar style="light" />
      <C.Content messageOrientation="recipient">
        {username && messageReceived && (
          <C.MessagesContainer>
            <Message user={username} message={messageReceived} />
          </C.MessagesContainer>
        )}

        <C.inputContainer>
          <ChatInput />
          <ButtonChat />
        </C.inputContainer>
      </C.Content>
    </C.Container>
  );
}
