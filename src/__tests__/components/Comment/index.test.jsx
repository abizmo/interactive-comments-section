import React from 'react';
// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';

import Comment from '../../../components/Comment';
import Theme from '../../../theme';

const comment = {
  id: 1,
  user: 'amyrobson',
  date: '1 month ago',
  body: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
  votes: 0,
};

test('renders and MatchSnapshot', () => {
  const { container } = render(
    <Theme>
      <Comment
        user={comment.user}
        date={comment.date}
        body={comment.body}
        likes={comment.votes}
      />
    </Theme>,
  );

  // expect(screen.getByText('5')).toBeTruthy();
  // expect(screen.getByRole('widget')).toHaveStyle('background: hsl( 228, 33%, 97%)');

  // fireEvent.click(screen.getByText('Plus'));
  // expect(handleVote).toHaveBeenCalled();

  // fireEvent.click(screen.getByText('Minus'));
  // expect(handleVote).toHaveBeenCalled();

  expect(container).toMatchSnapshot();
});
