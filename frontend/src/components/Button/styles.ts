import { TextBase } from "@styles/base";
import styled from "styled-components/native";
import colors from "@utils/constants/colors";
const ButtonLogin = styled.TouchableOpacity`
    margin-top: 14px;

    background-color: ${colors["purple-00"]};

    width: 50%;
    height: 50px;

    align-items: center;
    justify-content: center;

    border-radius: 4px;
`;

const ButtonChat = styled.TouchableOpacity`
    width: 60px;

    position: absolute;
    right: 50px; 
`;

const Text = styled(TextBase)`
    color: white;
    
    font-weight: bold;
`;
export {
    ButtonLogin,
    ButtonChat,
    Text
}