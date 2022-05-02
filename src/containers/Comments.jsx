import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Comment from '../components/Comment';
import NewComment from '../components/NewComment';
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
  const [comments, setComments] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setComments(data.comments);
    setCurrentUser(data.currentUser);
  }, []);

  if (!comments) return <p>Loading...</p>;

  return (
    <Wrapper>
      {comments.map(({ replies, user, ...comment }) => (
        <React.Fragment key={comment.id}>
          <Comment
            comment={comment}
            onDelete={() => {}}
            onEdit={() => {}}
            onReply={() => {}}
            user={user}
            you={user.username === currentUser.username}
          />
          { replies.length > 0 && (
            <WrapperReplies>
              { replies.map(({ user: replier, replyingTo, ...reply }) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onReply={() => {}}
                  replyingTo={replyingTo}
                  user={replier}
                  you={replier.username === currentUser.username}
                />
              ))}
            </WrapperReplies>
          )}
        </React.Fragment>
      ))}
      <NewComment user={currentUser} />
    </Wrapper>
  );
}

export default Comments;
