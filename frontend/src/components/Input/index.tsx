import React, { useState } from "react";
import * as C from "./styles";
import colors from "@utils/constants/colors";
import { useDispatch } from "react-redux";
import { setTypedMessage, setUserName } from "@redux/slices/userSlice";
import useStore from "@hooks/useStore";
export function LoginInput() {
  const dispatch = useDispatch();
  const { username } = useStore();

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
