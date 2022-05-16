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
};

const currentUser = {
  image: {
    png: './images/avatars/image-juliusomo.png',
    webp: './images/avatars/image-juliusomo.webp',
  },
  username: 'juliusomo',
};

const user = {
  image: {
    png: './images/avatars/image-amyrobson.png',
    webp: './images/avatars/image-amyrobson.webp',
  },
  username: 'amyrobson',
};

const replyingTo = 'maxblagun';

let handleDelete;
let handleEdit;
let handleReply;
let rendered;

beforeEach(() => {
  handleDelete = jest.fn();
  handleEdit = jest.fn();
  handleReply = jest.fn();
});
afterEach(cleanup);

describe('Comment from other user', () => {
  beforeEach(() => {
    rendered = render(
      <Theme>
        <Comment
          comment={comment}
          currentUser={currentUser}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
          user={user}
        />
      </Theme>,
    );
  });

  test('should render a comment', () => {
    const { container } = rendered;

    expect(screen.getByText(user.username)).toBeTruthy();
    expect(screen.getByText(comment.content)).toBeTruthy();

    expect(screen.queryByText('Delete')).toBeFalsy();
    expect(screen.queryByText('you')).toBeFalsy();
    expect(screen.queryByText('@')).toBeFalsy();

    expect(container).toMatchSnapshot();
  });

  test('click reply button', () => {
    const button = screen.getByText('Reply');

    fireEvent.click(button);
    const updateButton = screen.getByText(/send/i);

    fireEvent.click(updateButton);
    expect(handleReply).toHaveBeenCalled();
  });
});

describe('Comment from current user', () => {
  beforeEach(() => {
    rendered = render(
      <Theme>
        <Comment
          comment={comment}
          currentUser={user}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
          user={user}
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
    const deleteButton = screen.getByText(/yes/i);

    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalled();
  });

  test('click edit button', () => {
    const button = screen.getByText('Edit');

    fireEvent.click(button);
    const updateButton = screen.getByText(/update/i);

    fireEvent.click(updateButton);
    expect(handleEdit).toHaveBeenCalled();
  });
});

describe('Replied to some user', () => {
  beforeEach(() => {
    render(
      <Theme>
        <Comment
          comment={comment}
          currentUser={currentUser}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
          replyingTo={replyingTo}
          user={user}
        />
      </Theme>,
    );
  });

  test('should show the user who has been replied', () => {
    expect(screen.getByText(`@${replyingTo}`)).toHaveStyle('color: hsl(238,40%, 52%)');
  });
});
