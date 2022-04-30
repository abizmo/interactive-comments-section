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

test('renders a comment and MatchSnapshot', () => {
  const { container } = render(
    <Theme>
      <Comment
        author={comment.author}
        date={comment.date}
        body={comment.body}
        likes={comment.votes}
      />
    </Theme>,
  );

  expect(screen.getByText(comment.author)).toBeTruthy();
  expect(screen.getByText(comment.body)).toBeTruthy();
  expect(screen.queryByText('Delete')).toBeFalsy();
  expect(screen.queryByText('Reply')).toBeTruthy();
  expect(screen.queryByText('you')).toBeFalsy();

  expect(container).toMatchSnapshot();
});

test("renders a current user's comment", () => {
  render(
    <Theme>
      <Comment
        author={comment.author}
        date={comment.date}
        body={comment.body}
        likes={comment.votes}
        you
      />
    </Theme>,
  );

  expect(screen.queryByText('Delete')).toBeTruthy();
  expect(screen.queryByText('Edit')).toBeTruthy();
  expect(screen.queryByText('Reply')).toBeFalsy();
  expect(screen.queryByText('you')).toBeTruthy();
});
