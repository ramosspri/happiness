import styled from "styled-components";

export const WrapperFooter = styled.footer `
  height: 100vh;
  display: flex;
  color: ${({theme}) => isLight ? theme.colors.primary : "#F4F4F4"};
  background-color: ${({theme}) => isLight ? theme.colors.secondary : "#333"};;
`

export const isLight = false;
