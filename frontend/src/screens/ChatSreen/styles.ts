import styled from "styled-components/native";
import colors from "@utils/constants/colors";
import { SCMessageProps } from "@typs/message";
const Container = styled.View`
    flex:1;

    background-color: ${colors["black-00"]};
`;

const Content = styled.View<SCMessageProps>`
    padding: 14px;
    
    position: relative;

    flex: 1;
    justify-content: center;
    align-items: ${props => props.messageOrientation === 'sender' ? 'flex-start' : 'flex-end'};
`

const MessagesContainer = styled.View`
    margin-top: 100%;
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