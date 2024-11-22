import styled from "styled-components/native";
import { TextBase } from "@styles/base";
import colors from "@utils/constants/colors";

const Card = styled.View`
  background-color: ${colors["black-02"]};
  
  padding: 10px; 
  
  max-width: 200px;

  border-radius: 14px;

`;

const TextUser = styled(TextBase)`
  color: orange;
  
`;

const TextMessage = styled(TextBase)`
  color: white;
  
  font-size: 16px; 
`;
export {
    Card,
    TextMessage,
    TextUser
}