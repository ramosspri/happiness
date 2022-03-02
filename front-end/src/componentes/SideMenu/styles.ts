import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.large};

  &&:hover {
    color: ${({ theme }) => theme.colors.letter_color};
  }

  @media (min-width: 800px) {
    color: #000;
  }
`;

export const LinkSpaces = styled.div`
  justify-content: space-between;
  padding: 30px;
  margin: 30px;
  @media (min-width: 50rem) {
    padding: 0px;
    margin: 0px;
  }
`;
export const DivMenu = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: sidemenu;

  @media (min-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
