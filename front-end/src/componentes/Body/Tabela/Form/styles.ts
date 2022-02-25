import styled from 'styled-components';

export const ContainerForm = styled.form``;

export const InputStyled = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border_grey};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.letter_color};
  width: 100%;
  height: 1.875rem;
`;
