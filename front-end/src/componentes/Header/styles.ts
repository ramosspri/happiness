import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-area: header;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 4.9rem;
  box-shadow: 0rem 0.1875rem 0.25rem 0rem rgb(0 0 0 / 25%);
  border-bottom-right-radius: 0.3125rem;
  border-bottom-left-radius: 0.3125rem;
  margin-bottom: 2.625rem;
`;
