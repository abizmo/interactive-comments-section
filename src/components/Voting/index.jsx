import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

function format(number) {
  if (number < 10) return `000${number}`;
  if (number < 100) return `00${number}`;
  if (number < 1000) return `0${number}`;
  return number;
}

const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors['neutral-200']};
  border-radius: .5rem;
  display: flex;
  gap: .5rem;
  padding: .5rem 1rem;
  width: fit-content;

  & button {
    aspect-ratio: 1;
    background: transparent;
    border: none;
    cursor: pointer;
    display: grid;
    line-height: 1.1;
    padding-inline: .5rem;
    place-items: center;
    transition: opacity 300ms ease-in-out;

    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors['primary-500']};
    font-weight: 500;
    text-align: center;
    width: 4ch;
  }
`;

function Voting({ onVote, votes }) {
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <Wrapper role="widget">
      <button onClick={() => onVote((prv) => prv + 1)} type="button">
        <Plus />
        <span className="sr-only">Plus</span>
      </button>
      <p>{format(votes)}</p>
      <button disabled={votes === 0} onClick={() => onVote((prv) => prv - 1)} type="button">
        <Minus />
        <span className="sr-only">Minus</span>
      </button>
    </Wrapper>
  );
}

Voting.propTypes = {
  onVote: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Voting;
