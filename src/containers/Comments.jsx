import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Comment from '../components/Comment';
import Modal from '../components/Modal';
import NewComment from '../components/NewComment';
import { useComments } from '../context/comments';
import {
  createComment,
  createReply,
  deleteComment, deleteReply, setComments, updateComment, updateReply,
} from '../context/commentsActions';
import data from '../data.json';

const Wrapper = styled.div`
  display: grid;
  gap: clamp(1rem, 2vw + .5rem, 1.5rem);
`;

const WrapperReplies = styled(Wrapper)`
  border-left: 1px solid ${({ theme }) => theme.colors['neutral-300']};
  padding-left: clamp(1rem, 5vw, 2.5rem);

  @media(${({ theme }) => theme.mediaQueries.lg}) {
    & {
      margin-left: 2.5rem;
    }
  }
`;

function Comments() {
  const { state: { comments, currentUser }, dispatch } = useComments();
  const [deleting, setDeleting] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(0);
  const [replyToDelete, setReplyToDelete] = useState(0);

  useEffect(() => {
    dispatch(setComments(data));
  }, []);

  if (!comments) return <p>Loading...</p>;

  const handleCreate = (content) => {
    if (!content) return;

    dispatch(createComment(content));
  };

  const handleDelete = () => {
    if (replyToDelete !== 0) {
      dispatch(deleteReply(commentToDelete, replyToDelete));
    } else {
      dispatch(deleteComment(commentToDelete));
    }
    setDeleting(false);
    setCommentToDelete(0);
    setReplyToDelete(0);
  };

  const startDelete = (commentId, replyId) => {
    setDeleting(true);
    setCommentToDelete(commentId);
    setReplyToDelete(replyId);
  };

  const handleReply = (content, commentId, replyingTo) => {
    if (!content) return;

    dispatch(createReply(content, commentId, replyingTo));
  };

  return (
    <Wrapper>
      {comments.map(({ replies, user, ...comment }) => (
        <React.Fragment key={comment.id}>
          <Comment
            comment={comment}
            currentUser={currentUser}
            onDelete={() => startDelete(comment.id)}
            onEdit={(c) => dispatch(updateComment(comment.id, c))}
            onReply={(r) => handleReply(r, comment.id, user.username)}
            user={user}
          />
          { replies.length > 0 && (
            <WrapperReplies>
              { replies.map(({ user: replier, replyingTo, ...reply }) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  currentUser={currentUser}
                  onDelete={() => startDelete(comment.id, reply.id)}
                  onEdit={(r) => dispatch(updateReply(comment.id, reply.id, r))}
                  onReply={(r) => handleReply(r, comment.id, replier.username)}
                  replyingTo={replyingTo}
                  user={replier}
                />
              ))}
            </WrapperReplies>
          )}
        </React.Fragment>
      ))}
      <NewComment onCreate={handleCreate} user={currentUser} />
      { deleting && (
        <Modal onConfirm={handleDelete} onCancel={() => setDeleting(false)} />
      )}
    </Wrapper>
  );
}

export default Comments;
