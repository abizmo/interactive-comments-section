import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '../Avatar';
import Button from '../Button';

const WrapperForm = styled.form`
  align-items: center;
  background: ${({ theme }) => theme.colors['neutral-100']};
  border-radius: .5rem;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    'input input'
    'avatar button';
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;

  & > textarea {
    grid-area: input;
  }

  & > picture {
    grid-area: avatar;
  }

  & > button {
    grid-area: button;
    justify-self: end;
  }

  @media(${({ theme }) => theme.mediaQueries.lg}) {
    align-items: start;
    grid-template-areas:
      'avatar input button';
    grid-template-columns: min-content 1fr min-content;
  }
`;

const Input = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors['neutral-300']};
  border-radius: .5rem;
  color: ${({ theme }) => theme.colors['neutral-500']};
  font-family: ${({ theme }) => theme.fontFamilies.sans};
  font-size: ${({ theme }) => theme.fontSizes[500]};
  line-height: 1.5;
  height: 6rem;
  outline: none;
  padding: .5rem 1.5rem;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors['neutral-500']};
  }
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors['neutral-800']};
    color: ${({ theme }) => theme.colors['neutral-800']};
  }
`;

function NewComment({ onCreate, replyingTo, user }) {
  const [comment, setComment] = useState(replyingTo && `@${replyingTo} `);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onCreate(comment);
  };

  return (
    <WrapperForm onSubmit={handleSubmit}>
      <Avatar user={user} />
      <Input
        aria-label="New comment"
        name="newComment"
        onChange={({ target }) => setComment(target.value)}
        placeholder="Add comment..."
        type="text"
        value={comment}
      />
      <Button
        color="primary"
        label="send"
        size="small"
        type="submit"
        variant="contained"
      />
    </WrapperForm>
  );
}

NewComment.propTypes = {
  onCreate: PropTypes.func.isRequired,
  replyingTo: PropTypes.string,
  user: PropTypes.shape({
    image: PropTypes.shape().isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

NewComment.defaultProps = {
  replyingTo: '',
};

export default NewComment;
