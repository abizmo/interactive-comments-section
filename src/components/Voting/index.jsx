import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { Button, Wrapper } from './style';

function Voting({ onVote, votes }) {
  return (
    <Wrapper data-testid="voting">
      <Button onClick={() => onVote((prv) => prv + 1)} type="button">
        <Plus />
        <span className="sr-only">Plus</span>
      </Button>
      <p>{votes}</p>
      <Button disabled={votes === 0} onClick={() => onVote((prv) => prv - 1)} type="button">
        <Minus />
        <span className="sr-only">Minus</span>
      </Button>
    </Wrapper>
  );
}

Voting.propTypes = {
  onVote: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Voting;
