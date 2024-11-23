import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as C from "./styles";
import { ChatInput } from "@components/Input";
import { ButtonChat } from "@components/Button";
import Message from "@components/Message";
import useStore from "@hooks/useStore";
import FlashMessage from "react-native-flash-message";
export default function ChatScreen() {
  const { messages, username } = useStore();

  const currentUser = username;
  return (
    <C.Container>
      <StatusBar style="light" />
      <FlashMessage
        position="center"
        style={{
          width: "80%",
          borderRadius: 8,
        }}
      />
      <C.Content>
        {messages.map((item, index) => (
          <C.MessagesContainer
            key={index}
            messageOrientation={
              item.user === currentUser ? "sender" : "recipient"
            }
          >
            <Message user={item.user} message={item.message} />
          </C.MessagesContainer>
        ))}
        <C.inputContainer>
          <ChatInput />
          <ButtonChat />
        </C.inputContainer>
      </C.Content>
    </C.Container>
  );
}
