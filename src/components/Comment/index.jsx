import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Reply } from '../../assets/icons/reply.svg';
import Avatar from '../Avatar';
import Button from '../Button';
import EditComment from '../EditComment';
import NewComment from '../NewComment';
import Voting from '../Voting';
import {
  At, Label, Nickname, Wrapper,
} from './style';

function Comment({
  comment, currentUser, onDelete, onEdit, onReply, replyingTo, user,
}) {
  const [replying, setReplying] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [votes, setVotes] = useState(comment.score || 0);

  const handleEdit = (c) => {
    onEdit(c);
    setUpdating(false);
  };

  const handleReply = (r) => {
    onReply(r, comment.id, user.username);
    setReplying(false);
  };

  const startEdit = () => {
    setUpdating(true);
  };

  const startReply = () => {
    setReplying(true);
  };

  const at = replyingTo && `@${replyingTo} `;
  const you = user.username === currentUser.username;

  return (
    <>
      <Wrapper>
        <header>
          <Avatar user={user} />
          <Nickname>{user.username}</Nickname>
          { you && (
          <Label>you</Label>
          )}
          <span>{comment.createdAt}</span>
        </header>
        <div className="content">
          {
          updating ? (
            <EditComment
              at={at}
              content={`${comment.content}`}
              onEdit={handleEdit}
            />
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
        <div className="votes">
          <Voting onVote={setVotes} votes={votes} />
        </div>
        <div className="buttons">
          {
          you ? (
            <>
              <Button
                color="secondary"
                icon={Delete}
                label="Delete"
                onClick={() => onDelete(comment.id)}
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
              onClick={startReply}
            />
          )
        }
        </div>
      </Wrapper>
      { replying && (
        <NewComment
          onCreate={handleReply}
          replyingTo={user.username}
          user={currentUser}
        />
      )}
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    score: PropTypes.number,
  }).isRequired,
  currentUser: PropTypes.shape({
    image: PropTypes.shape().isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
  replyingTo: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

Comment.defaultProps = {
  replyingTo: '',
};

export default Comment;
