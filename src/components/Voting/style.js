import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors['neutral-200']};
  border-radius: .5rem;
  display: flex;
  gap: .5rem;
  padding: .5rem 1rem;
  width: fit-content;

  & p {
    color: ${({ theme }) => theme.colors['primary-500']};
    font-weight: 500;
    text-align: center;
    width: 4ch;
  }
`;

export const Button = styled.button`
  aspect-ratio: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  display: grid;
  line-height: 1.1;
  padding-inline: .5rem;
  place-items: center;
  transition: opacity 300ms ease-in-out;

  &:hover:enabled path {
    fill: ${({ theme }) => theme.colors['primary-500']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .5;
  }
`;
