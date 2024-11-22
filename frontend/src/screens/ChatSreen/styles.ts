import styled from "styled-components/native";
import colors from "@utils/constants/colors";
import { SCMessageProps } from "@typs/message";
const Container = styled.View`
    flex:1;

    background-color: ${colors["black-00"]};
`;

const Content = styled.View`
    padding: 14px;
    
    position: relative;

    flex: 1;

    justify-content: center;
`

const MessagesContainer = styled.View<SCMessageProps>`
    align-items: ${props => props.messageOrientation === 'sender' ? 'flex-end' : 'flex-start'}; 

`

const inputContainer = styled.View`
    position: absolute;
    
    bottom: 8px;
    width: 100%;

    flex-direction: row;
    align-items: center;

`
export {
    Container,
    Content,
    MessagesContainer,
    inputContainer
}