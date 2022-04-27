import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Reply } from '../../assets/icons/reply.svg';
import Avatar from '../Avatar';
import Button from '../Button';
import Voting from '../Voting';

function doNothing() {}

const Wrapper = styled.article`
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
    grid-template-columns: min-content repeat(2, 1fr);
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
  }
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors['neutral-800']};
  font-weight: 500;
  text-transform: lowercase;
`;

function Comment({
  user, date, body, likes,
}) {
  const [votes, setVotes] = useState(likes);

  return (
    <Wrapper>
      <header>
        <Avatar user={user} />
        <Nickname>{user}</Nickname>
        <span>{date}</span>
      </header>
      <p>{body}</p>
      <div id="votes">
        <Voting onVote={setVotes} votes={votes} />
      </div>
      <div id="buttons">
        <Button
          color="primary"
          icon={Reply}
          label="Reply"
          onClick={doNothing}
        />
      </div>
    </Wrapper>
  );
}

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  likes: PropTypes.number,
};

Comment.defaultProps = {
  likes: 0,
};

export default Comment;
