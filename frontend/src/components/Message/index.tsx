import React from "react";
import * as C from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
interface MessageProps {
  user: string;
  message: string;
}
export default function Message({ user, message }: MessageProps) {
  // const user = useSelector((state: RootState) => state.user.username);
  // const message = useSelector((state: RootState) => state.user.message);
  return (
    <C.Card>
      <C.TextUser>{user}</C.TextUser>
      <C.TextMessage>{message}</C.TextMessage>
    </C.Card>
  );
}
