import styled from "styled-components";

export const TextHome = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  display: flex;
  flex-direction: column;
  padding: 0.1875rem;
  align-items: flex-start;
`;

export const TextHomeBold = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  display: flex;
  flex-direction: column;
  padding: 0.1875rem;
  align-items: flex-start;
`;
