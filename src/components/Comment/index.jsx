import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Reply } from '../../assets/icons/reply.svg';
import Avatar from '../Avatar';
import Button from '../Button';
import Voting from '../Voting';

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

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors['neutral-800']};
  font-weight: 500;
  text-transform: lowercase;
`;

const Label = styled.span`
  background: ${({ theme }) => theme.colors['primary-500']};
  border-radius: .25rem;
  color: ${({ theme }) => theme.colors['neutral-100']};
  font-size: ${({ theme }) => theme.fontSizes[300]};
  font-weight: 500;
  line-height: 1.1;
  padding: .2rem .5rem;
  text-align: center;
`;

function Comment({
  author, date, body, likes, onDelete, onEdit, onReply, you,
}) {
  const [votes, setVotes] = useState(likes);

  return (
    <Wrapper>
      <header>
        <Avatar user={author} />
        <Nickname>{author}</Nickname>
        { you && (
          <Label>you</Label>
        )}
        <span>{date}</span>
      </header>
      <p>{body}</p>
      <div id="votes">
        <Voting onVote={setVotes} votes={votes} />
      </div>
      <div id="buttons">
        {
          you ? (
            <>
              <Button
                color="secondary"
                icon={Delete}
                label="Delete"
                onClick={onDelete}
              />
              <Button
                color="primary"
                icon={Edit}
                label="Edit"
                onClick={onEdit}
              />
            </>
          ) : (
            <Button
              color="primary"
              icon={Reply}
              label="Reply"
              onClick={onReply}
            />
          )
        }
      </div>
    </Wrapper>
  );
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.number,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onReply: PropTypes.func,
  you: PropTypes.bool,
};

Comment.defaultProps = {
  likes: 0,
  onDelete: null,
  onEdit: null,
  onReply: null,
  you: false,
};

export default Comment;
