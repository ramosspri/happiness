import styled from 'styled-components';

export const ContainerMain = styled.div`
  grid-area: body;
  /* background-color: green; */
  padding-left: 1.0625rem;
  padding-right: 1.0625rem;
  color: ${({ theme }) => theme.colors.letter_color};
  font-family: 'Roboto', sans-serif;
  @media (min-width: 50rem) {
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 2.25rem 3.5rem;
    border-radius: 0.625rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    box-shadow: ${({ theme }) => theme.font.shadow.shadow_container};
  }
`;
