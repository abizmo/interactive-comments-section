import React from 'react';
import {
  fireEvent, render, screen, cleanup,
} from '@testing-library/react';

import Comment from '../../../components/Comment';
import Theme from '../../../theme';

const comment = {
  id: 1,
  author: 'amyrobson',
  date: '1 month ago',
  body: 'Impressive!',
  votes: 0,
  replyingTo: 'maxblagun',
};

afterEach(cleanup);

describe('Comment from other user', () => {
  let handleDelete;
  let handleEdit;
  let handleReply;
  let rendered;

  beforeEach(() => {
    handleDelete = jest.fn();
    handleEdit = jest.fn();
    handleReply = jest.fn();

    rendered = render(
      <Theme>
        <Comment
          author={comment.author}
          date={comment.date}
          body={comment.body}
          likes={comment.votes}
          onDelete={handleDelete}
          onEdit={handleEdit}
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
    expect(screen.queryByText('@')).toBeFalsy();

    expect(container).toMatchSnapshot();
  });

  test('click reply button', () => {
    const button = screen.getByText('Reply');

    fireEvent.click(button);
    expect(handleReply).toHaveBeenCalled();
  });
});

describe('Comment from current user', () => {
  let handleDelete;
  let handleEdit;
  let handleReply;
  let rendered;

  beforeEach(() => {
    handleDelete = jest.fn();
    handleEdit = jest.fn();
    handleReply = jest.fn();

    rendered = render(
      <Theme>
        <Comment
          author={comment.author}
          date={comment.date}
          body={comment.body}
          likes={comment.votes}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
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

describe('Replied to some user', () => {
  let handleDelete;
  let handleEdit;
  let handleReply;

  beforeEach(() => {
    handleDelete = jest.fn();
    handleEdit = jest.fn();
    handleReply = jest.fn();

    render(
      <Theme>
        <Comment
          author={comment.author}
          date={comment.date}
          body={comment.body}
          likes={comment.votes}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
          replyingTo={comment.replyingTo}
        />
      </Theme>,
    );
  });

  test('should show the user who has been replied', () => {
    expect(screen.getByText(`@${comment.replyingTo}`)).toHaveStyle('color: hsl(238,40%, 52%)');
  });
});
