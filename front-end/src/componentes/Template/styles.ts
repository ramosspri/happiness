import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'body'
    'footer';

  @media (min-width: 50rem) {
    grid-template-columns: 2fr 8fr;

    grid-template-areas:
      'header header'
      'sidemenu body'
      'sidemenu body'
      'footer footer';
  }
`;
