import styled from "styled-components/native";
import { styledComponentsProps } from "@typs/input";
import colors from "@utils/constants/colors";
import { InputBase } from "@styles/base";
const LoginInput = styled(InputBase)<styledComponentsProps>`
    border: 1px solid ${props => props.isFocused ? colors["purple-00"] : colors["gray-01"]};
`;

const ChatInput = styled(InputBase)`

    background-color: ${colors["black-01"]};
    color: ${colors["gray-00"]};

    margin: 0 auto;

    border-radius: 24px;

    height: 70px;
`

export {
    LoginInput,
    ChatInput
}