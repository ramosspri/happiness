import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0rem -0.1875rem 0.25rem 0rem rgb(0 0 0 / 25%);
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.letter_color};
  height: 3.6rem;
  z-index: 100;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: 50rem) {
    position: static;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 50px;
  }
`;

export const DivIcon = styled.div`
  margin: 0.625rem;
`;
