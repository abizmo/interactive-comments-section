import React from 'react';
import {
  fireEvent, render, screen, cleanup,
} from '@testing-library/react';

import Comment from '../../../components/Comment';
import Theme from '../../../theme';

const comment = {
  id: 1,
  content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: '1 month ago',
  score: 12,
  user: {
    image: {
      png: './images/avatars/image-amyrobson.png',
      webp: './images/avatars/image-amyrobson.webp',
    },
    username: 'amyrobson',
  },
  replyingTo: 'maxblagun',
  replies: [],
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
          user={comment.user}
          date={comment.createdAt}
          body={comment.content}
          likes={comment.score}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
        />
      </Theme>,
    );
  });

  test('should render a comment', () => {
    const { container } = rendered;

    expect(screen.getByText(comment.user.username)).toBeTruthy();
    expect(screen.getByText(comment.content)).toBeTruthy();

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
          user={comment.user}
          date={comment.createdAt}
          body={comment.content}
          likes={comment.score}
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
          user={comment.user}
          date={comment.createdAt}
          body={comment.content}
          likes={comment.score}
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
