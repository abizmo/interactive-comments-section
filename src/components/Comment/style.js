import styled from 'styled-components';

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.colors['neutral-100']};
  border-radius: .5rem;
  display: grid;
  gap: 1rem;
  grid-template-areas: 
    'header header'
    'info info'
    'votes buttons';
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;

  @media(${({ theme }) => theme.mediaQueries.lg}) {
    column-gap: 1.5rem;
    grid-template-areas:
      'votes header buttons'
      'votes info info';
    grid-template-columns: min-content 3fr 1fr;
    padding: 1.5rem;
  }

  & > header {
    align-items: center;
    grid-area: header;
    display: flex;
    gap: 1rem;
    line-height: 1.1;
  }

  & > p {
    grid-area: info;
  }

  & > #votes {
    grid-area: votes;
  }

  & > #buttons {
    align-self: center;
    grid-area: buttons;
    justify-self: end;
    display: flex;
    gap: 1rem;
  }
`;

export const Nickname = styled.span`
  color: ${({ theme }) => theme.colors['neutral-800']};
  font-weight: 500;
  text-transform: lowercase;
`;

export const Label = styled.span`
  background: ${({ theme }) => theme.colors['primary-500']};
  border-radius: .25rem;
  color: ${({ theme }) => theme.colors['neutral-100']};
  font-size: ${({ theme }) => theme.fontSizes[300]};
  font-weight: 500;
  line-height: 1.1;
  padding: .2rem .5rem;
  text-align: center;
`;
