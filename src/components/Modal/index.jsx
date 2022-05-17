import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors['neutral-800']};
  font-size: ${({ theme }) => theme.fontSizes[700]};
`;

const Actions = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const Backdrop = styled.div`
  background-color: hsl(0, 0%, 0%, .55);
  display: grid;
  inset: 0;
  padding: 1rem;
  place-content: center;
  position: fixed;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['neutral-100']};
  border-radius: .5rem;
  display: grid;
  gap: 1rem;
  max-width: 25rem;
  padding: 1.5rem;

  @media(${({ theme }) => theme.mediaQueries.lg}) {
    padding: 2rem;
  }
`;

function Modal({ onConfirm, onCancel }) {
  return (
    <Backdrop>
      <Wrapper>
        <Title>Delete Comment</Title>
        <p>
          Are you sure you want to delete this comment?
          This will remove the comment and can’t be undone.
        </p>
        <Actions>
          <li>
            <Button
              color="neutral"
              label="No, cancel"
              onClick={onCancel}
              size="big"
              type="button"
              variant="contained"
            />
          </li>
          <li>
            <Button
              color="secondary"
              label="Yes, delete"
              onClick={onConfirm}
              size="big"
              type="button"
              variant="contained"
            />
          </li>
        </Actions>
      </Wrapper>
    </Backdrop>
  );
}

Modal.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  onConfirm: () => {},
};

export default Modal;
