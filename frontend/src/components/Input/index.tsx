import React, { useState } from "react";
import * as C from "./styles";
import colors from "@utils/constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "@redux/slices/loginSlice";
import { RootState } from "@redux/store";
export function LoginInput() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.login.username);

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
  return (
    <C.ChatInput
      placeholder="Mensagem"
      placeholderTextColor={colors["white-00"]}
    />
  );
}
