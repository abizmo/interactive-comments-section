import React from 'react';
import styled from 'styled-components';

import Comment from '../components/Comment';
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
  return (
    <Wrapper>
      {data.comments.map(({ replies, user, ...comment }) => (
        <React.Fragment key={comment.id}>
          <Comment
            body={comment.content}
            author={user.username}
            date={comment.createdAt}
            likes={comment.score}
            onDelete={() => {}}
            onEdit={() => {}}
            onReply={() => {}}
            you={user.username === data.currentUser.username}
          />
          { replies.length > 0 && (
            <WrapperReplies>
              { replies.map((reply) => (
                <Comment
                  key={reply.id}
                  body={reply.content}
                  author={reply.user.username}
                  date={reply.createdAt}
                  likes={reply.score}
                  onDelete={() => {}}
                  onEdit={() => {}}
                  onReply={() => {}}
                  replyingTo={reply.replyingTo}
                  you={reply.user.username === data.currentUser.username}
                />
              ))}
            </WrapperReplies>
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

export default Comments;
