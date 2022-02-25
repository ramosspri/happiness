import styled from 'styled-components';

export const ContainerForm = styled.form`
  margin-top: 1.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const InputStyled = styled.input`
  margin-top: 0.3125rem;
  border: 1px solid ${({ theme }) => theme.colors.border_grey};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.letter_color};
  width: 100%;
  height: 2.1875rem;
  padding-left: 10px;
  font-size: 18px;

  box-sizing: border-box;
`;

export const BlocoInput = styled.div`
  grid-column: 1/3;
`;

export const SelectStyled = styled.select`
  margin-top: 0.3125rem;
  width: 100%;
  height: 2.1875rem;
  color: ${({ theme }) => theme.colors.letter_color};
`;
