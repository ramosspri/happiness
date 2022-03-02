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
    color: #444444;
  }
`;

export const LinkSpaces = styled.div`
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  margin: 0px;
  @media (min-width: 50rem) {
    margin-top: 30px;
  }
`;
export const DivMenu = styled.div`
  justify-content: space-between;
  grid-area: sidemenu;
  @media (min-width: 800px) {
    border-radius: 10px;
    width: 255px;
    height: 506px;
    left: 0px;
    border: 1px solid ${({ theme }) => theme.colors.border_grey};
    box-shadow: ${({ theme }) => theme.font.shadow.shadow_container};
    padding: 1.9rem 1.6875rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Line = styled.hr`

  @media (min-width: 800px) {
    border-bottom: 2px solid;
    color: ${({ theme }) => theme.colors.assets_blue};
    width: 199px;
    height: 2px;
  }
`
