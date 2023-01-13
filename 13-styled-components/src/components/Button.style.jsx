import styled from "styled-components";
import ButtonStyled from "./Button";

export const Button = styled.button`
  background: ${(prop) => prop.backgroundColor ? prop.backgroundColor : 'pink'};
  width: 120px;
  height: ${({ theme }) => theme.size.xxl};

  &:active{
    background: pink;
  }
`

export const Button2 = styled(ButtonStyled)`
  background: ${({ theme }) => theme.colors.secondary};
  width: 120px;
  height: 60px;
`