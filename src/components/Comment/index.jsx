import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Reply } from '../../assets/icons/reply.svg';
import Avatar from '../Avatar';
import Button from '../Button';
import EditComment from '../EditComment';
import Voting from '../Voting';
import {
  At, Label, Nickname, Wrapper,
} from './style';

function Comment({
  comment, onDelete, onEdit, onReply, replyingTo, user, you,
}) {
  const [updating, setUpdating] = useState(false);
  const [votes, setVotes] = useState(comment.score || 0);

  const startEdit = () => {
    setUpdating(true);
  };

  const handleEdit = (c) => {
    onEdit(c);
    setUpdating(false);
  };

  const at = replyingTo ? `@${replyingTo} ` : '';

  return (
    <Wrapper>
      <header>
        <Avatar user={user} />
        <Nickname>{user.username}</Nickname>
        { you && (
          <Label>you</Label>
        )}
        <span>{comment.createdAt}</span>
      </header>
      <div id="content">
        {
          updating ? (
            <EditComment value={`${at}${comment.content}`} onEdit={handleEdit} />
          ) : (
            <p>
              { replyingTo && (
                <At>
                  {at}
                </At>
              )}
              {comment.content}
            </p>
          )
        }
      </div>
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
                onClick={startEdit}
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
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    score: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
  replyingTo: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  you: PropTypes.bool,
};

Comment.defaultProps = {
  replyingTo: null,
  you: false,
};

export default Comment;
