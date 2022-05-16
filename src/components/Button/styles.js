import styled from 'styled-components';

const width = {
  big: '9.25rem',
  small: '6.5rem',
};

export const Btn = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: ${({ color, theme }) => theme.colors[`${color}-500`]};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[500]};
  font-weight: 500;
  gap: .5rem;
  height: 3rem;
  justify-content: center;
  line-height: 1.1;
  padding: 0;
  transition: opacity 300ms ease-in;

  &:hover {
    opacity: .4;
  }
`;

export const BtnContained = styled(Btn)`
  background: ${({ color, theme }) => theme.colors[`${color}-500`]};
  border-radius: .5rem;
  color: ${({ theme }) => theme.colors['neutral-100']};
  font-size: ${({ theme }) => theme.fontSizes[600]};
  padding: .5rem 1rem;
  text-transform: uppercase;
  width: ${({ size }) => (size !== 'fit' ? width[size] : 'fit-content')};
`;
