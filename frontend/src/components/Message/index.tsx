import React from "react";
import * as C from "./styles";

interface MessageProps {
  user: string;
  message: string;
}
export default function Message({ user, message }: MessageProps) {
  return (
    <C.Card>
      <C.TextUser>{user}</C.TextUser>
      <C.TextMessage>{message}</C.TextMessage>
    </C.Card>
  );
}
