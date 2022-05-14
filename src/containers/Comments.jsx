import React, { useEffect } from 'react';
import styled from 'styled-components';

import Comment from '../components/Comment';
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

  useEffect(() => {
    dispatch(setComments(data));
  }, []);

  if (!comments) return <p>Loading...</p>;

  const handleCreate = (content) => {
    if (!content) return;

    dispatch(createComment(content));
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
            onDelete={() => dispatch(deleteComment(comment.id))}
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
                  onDelete={() => dispatch(deleteReply(comment.id, reply.id))}
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
    </Wrapper>
  );
}

export default Comments;
