import React from 'react';
// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';

import Voting from '../../../components/Voting';
import Theme from '../../../theme';

test('renders and MatchSnapshot', () => {
  const handleVote = jest.fn();

  const { container } = render(
    <Theme>
      <Voting onVote={handleVote} votes={5} />
    </Theme>,
  );

  expect(screen.getByText('0005')).toBeTruthy();
  expect(screen.getByRole('widget')).toHaveStyle('background: hsl( 228, 33%, 97%)');

  fireEvent.click(screen.getByText('Plus'));
  expect(handleVote).toHaveBeenCalled();

  fireEvent.click(screen.getByText('Minus'));
  expect(handleVote).toHaveBeenCalled();

  expect(container).toMatchSnapshot();
});
