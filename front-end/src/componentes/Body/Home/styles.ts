import styled from "styled-components";

export const TextHome = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  padding: 0.1875rem;
`;

export const TextHomeBold = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weights.bold};
  padding: 0.1875rem;
`;

export const ImgUsers = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
`;


