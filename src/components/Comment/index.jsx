import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Reply } from '../../assets/icons/reply.svg';
import Avatar from '../Avatar';
import Button from '../Button';
import Voting from '../Voting';
import { Label, Nickname, Wrapper } from './style';

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
