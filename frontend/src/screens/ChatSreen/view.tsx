import React from "react";
import { StatusBar } from "expo-status-bar";
import * as C from "./styles";
import { ChatInput } from "@components/Input";
import { ButtonChat } from "@components/Button";
import Message from "@components/Message";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
export default function ChatScreen() {
  const user = useSelector((state: RootState) => state.user.username);
  const message = useSelector((state: RootState) => state.user.messageReceived);
  return (
    <C.Container>
      <StatusBar style="light" />
      <C.Content messageOrientation="recipient">
        {user && message && (
          <C.MessagesContainer>
            <Message user={user} message={message} />
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
