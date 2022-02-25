import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 4.9rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  margin-bottom: 2.625rem;
`;
