import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  height: 3.6rem;
  z-index: 100;
  margin-top: 100px;
`;

export const DivIcon = styled.div`
  margin: 0.625rem;
`;
