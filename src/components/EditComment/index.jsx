/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

const WrapperForm = styled.form`
  display: grid;
  gap: 1rem;

  & button {
    justify-self: end;
  }
`;

const Input = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors['neutral-300']};
  border-radius: .5rem;
  color: ${({ theme }) => theme.colors['neutral-500']};
  font-family: ${({ theme }) => theme.fontFamilies.sans};
  font-size: ${({ theme }) => theme.fontSizes[500]};
  line-height: 1.5;
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

function EditComment({ at, content, onEdit }) {
  const [comment, setComment] = useState(content);
  const [inputHeight, setInputHeight] = useState(96);

  const handleChange = ({ target }) => {
    if (at) {
      const [, ...commentArray] = target.value.split(' ');
      setComment(commentArray.join(' '));
    } else {
      setComment(target.value);
    }
  };

  const handleFocus = ({ target }) => {
    const { length } = target.value;
    target.setSelectionRange(length, length);
    setInputHeight(target.scrollHeight);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onEdit(comment);
  };

  return (
    <WrapperForm onSubmit={handleSubmit}>
      <Input
        aria-label="New comment"
        autoFocus
        name="new-comment"
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Add comment..."
        style={{ height: `${inputHeight}px` }}
        type="text"
        value={`${at}${comment}`}
      />
      <Button
        color="primary"
        label="Update"
        size="small"
        type="submit"
        variant="contained"
      />
    </WrapperForm>
  );
}

EditComment.propTypes = {
  at: PropTypes.string,
  content: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

EditComment.defaultProps = {
  at: '',
};

export default EditComment;
