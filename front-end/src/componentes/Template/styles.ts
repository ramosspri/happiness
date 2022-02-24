import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:'header'
                      'body' 
                      'footer';
`;
