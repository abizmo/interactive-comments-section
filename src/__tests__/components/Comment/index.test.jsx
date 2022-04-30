import React from 'react';
// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';

import Comment from '../../../components/Comment';
import Theme from '../../../theme';

const comment = {
  id: 1,
  author: 'amyrobson',
  date: '1 month ago',
  body: 'Impressive!',
  votes: 0,
};

describe('Comment from other user', () => {
  let handleReply;
  let rendered;

  beforeEach(() => {
    handleReply = jest.fn();
    rendered = render(
      <Theme>
        <Comment
          author={comment.author}
          date={comment.date}
          body={comment.body}
          likes={comment.votes}
          onReply={handleReply}
        />
      </Theme>,
    );
  });

  test('should render a comment', () => {
    const { container } = rendered;

    expect(screen.getByText(comment.author)).toBeTruthy();
    expect(screen.getByText(comment.body)).toBeTruthy();

    expect(screen.queryByText('Delete')).toBeFalsy();
    expect(screen.queryByText('you')).toBeFalsy();

    expect(container).toMatchSnapshot();
  });

  test('click reply button', () => {
    const button = screen.getByText('Reply');

    fireEvent.click(button);
    expect(handleReply).toHaveBeenCalled();
  });
});

describe('Comment from current user', () => {
  let handleEdit;
  let handleDelete;
  let rendered;

  beforeEach(() => {
    handleEdit = jest.fn();
    handleDelete = jest.fn();
    rendered = render(
      <Theme>
        <Comment
          author={comment.author}
          date={comment.date}
          body={comment.body}
          likes={comment.votes}
          onEdit={handleEdit}
          onDelete={handleDelete}
          you
        />
      </Theme>,
    );
  });

  test('should render a comment', () => {
    const { container } = rendered;

    expect(screen.queryByText('Reply')).toBeFalsy();
    expect(screen.queryByText('you')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  test('click delete button', () => {
    const button = screen.getByText('Delete');

    fireEvent.click(button);
    expect(handleDelete).toHaveBeenCalled();
  });

  test('click edit button', () => {
    const button = screen.getByText('Edit');

    fireEvent.click(button);
    expect(handleEdit).toHaveBeenCalled();
  });
});
