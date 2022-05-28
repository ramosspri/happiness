import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Montserrat', sans-serif ;
  box-shadow: 0rem -0.1875rem 0.25rem 0rem rgb(0 0 0 / 25%);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.letter_color};
  height: 6.25rem;
  z-index: 100;
  margin-top: 3.125rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  bottom: 0vh;
  width: 100%;
  @media (min-width: 50rem) {
    position: static;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 1.25rem;
  }
`;

export const DivTextIcon = styled.div`
  display: flex;
  margin: 2px;
`;

export const DivIcon = styled.div`
  margin-right: 5px;
`;

export const SeparateContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
