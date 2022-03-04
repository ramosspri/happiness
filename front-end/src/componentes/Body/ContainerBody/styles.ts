import styled from 'styled-components';

export const ContainerBody = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border_grey};
  box-shadow: ${({ theme }) => theme.font.shadow.shadow_container};
  padding: 1.9rem 1.6875rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};

  & + & {
    margin-top: 1rem;
  }
`;
