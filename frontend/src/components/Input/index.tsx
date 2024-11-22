import React, { useState } from "react";
import * as C from "./styles";
import colors from "@utils/constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { setTypedMessage, setUserName } from "@redux/slices/userSlice";
import { RootState } from "@redux/store";
import { sendMessage } from "@services/webSocket";
export function LoginInput() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);

  const [isFocused, setIsFocused] = useState(false);
  return (
    <C.LoginInput
      placeholder="login"
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={username}
      onChangeText={(text) => dispatch(setUserName(text))}
    />
  );
}

export function ChatInput() {
  const dispatch = useDispatch();
  return (
    <C.ChatInput
      placeholder="Mensagem"
      placeholderTextColor={colors["white-00"]}
      onChangeText={(text) => dispatch(setTypedMessage(text))}
    />
  );
}
