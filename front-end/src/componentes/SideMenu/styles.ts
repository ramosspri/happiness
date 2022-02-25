import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.large};

  &&:hover {
    color: ${({ theme }) => theme.colors.letter_color}
  }
`;

export const LinkSpaces = styled.div`
  justify-content: space-between;
  padding: 30px;
  margin: 30px;
`
