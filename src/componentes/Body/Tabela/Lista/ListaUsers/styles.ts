import styled from 'styled-components';

export const BlocoUserInfo = styled.div`
  display: inline-grid;
  grid-template-columns: 30px 2.25fr 4fr 30px 30px;
  justify-content: space-between 1rem;
`;

export const ButtonEditar = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ButtonLixeira = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
