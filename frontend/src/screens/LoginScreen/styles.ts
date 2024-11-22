import styled from "styled-components/native";
import { TextBase } from "@styles/base";
import colors from "@utils/constants/colors";
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    background-color: ${colors["white-00"]};
    
    width: 80%;
    height: 225px;
    padding-top: 20px;

    flex-direction: column;
    align-items: center;
    gap: 30px;

    border-radius: 12px;
`
const Text = styled(TextBase)`
    font-size: 28px;
    font-weight: bold;
`
export {
    Container,
    Text,
    Content
}