import styled from 'styled-components';

export const ContainerForm = styled.form`
  margin-top: 1.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1rem;
  @media (min-width: 800px) {
    gap: 0.8rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: end;
  }
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
`;

export const BlocoId = styled.div`
  grid-column: 1/3;
  @media (min-width: 800px) {
    grid-column: 1/2;
  }
`;

export const BlocoNome = styled.div`
  grid-column: 1/3;
  @media (min-width: 800px) {
    grid-column: 1/4;
  }
`;

export const BlocoEmail = styled.div`
  grid-column: 1/3;
  @media (min-width: 800px) {
    grid-column: 4/7;
  }
`;
export const BlocoTelefone = styled.div`
  grid-column: 1/3;
  @media (min-width: 800px) {
    grid-column: 1/4;
  }
`;
export const SelectStyled = styled.select`
  margin-top: 0.3125rem;
  width: 100%;
  height: 2.1875rem;
  color: ${({ theme }) => theme.colors.letter_color};
`;

export const ContainerSelectLanguage = styled.div`
  @media (min-width: 50rem) {
    grid-column: span(2);
  }
`;
export const ContainerSelectFrameWork = styled.div`
  @media (min-width: 50rem) {
    grid-column: span(2);
  }
`;
