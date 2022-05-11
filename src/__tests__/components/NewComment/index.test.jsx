import { render, screen } from '@testing-library/react';
import React from 'react';

import NewComment from '../../../components/NewComment';
import Theme from '../../../theme';

const user = {
  image: {
    png: '../../../assets/images/avatars/image-juliusomo.png',
    webp: '../../../assets/images/avatars/image-juliusomo.webp',
  },
  username: 'juliusomo',
};

describe('NewComment components', () => {
  test('should render', () => {
    render(
      <Theme>
        <NewComment onCreate={() => {}} user={user} />
      </Theme>,
    );

    expect(screen.queryByLabelText(/comment/i)).toBeTruthy();
    expect(screen.queryByRole('button', { name: /send/i })).toBeTruthy();
    expect(screen.queryByAltText(user.username)).toBeTruthy();
  });
});
