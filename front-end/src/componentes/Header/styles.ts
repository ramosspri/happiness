import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  grid-area: header;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 6.25rem;
  box-shadow: 0rem 0.1875rem 0.25rem 0rem rgb(0 0 0 / 25%);
  border-bottom-right-radius: 0.3125rem;
  border-bottom-left-radius: 0.3125rem;
  margin-bottom: 30px;
  @media (min-width: 50rem) {
    margin-bottom: 20px;
  }
`;
