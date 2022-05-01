import { render, screen } from '@testing-library/react';
import React from 'react';

import NewComment from '../../../components/NewComment';
import Theme from '../../../theme';

const user = 'maxblagun';

describe('NewComment components', () => {
  test('should render', () => {
    render(
      <Theme>
        <NewComment user={user} />
      </Theme>,
    );

    expect(screen.queryByLabelText(/comment/i)).toBeTruthy();
    expect(screen.queryByRole('button', { name: /send/i })).toBeTruthy();
    expect(screen.queryByAltText(user)).toBeTruthy();
  });
});
