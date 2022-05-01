import React from 'react';
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

function NewComment({ user }) {
  return (
    <WrapperForm>
      <Avatar user={user} />
      <Input
        type="text"
        name="new-comment"
        aria-label="New comment"
        placeholder="Add comment..."
      />
      <Button
        color="primary"
        label="send"
        onClick={() => {}}
        size="small"
        type="submit"
        variant="contained"
      />
    </WrapperForm>
  );
}

NewComment.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NewComment;
