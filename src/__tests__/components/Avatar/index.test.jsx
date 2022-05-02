import React from 'react';

import { render, screen } from '@testing-library/react';
import Avatar from '../../../components/Avatar';

const user = {
  image: {
    png: '../../../assets/images/avatars/image-juliusomo.png',
    webp: '../../../assets/images/avatars/image-juliusomo.webp',
  },
  username: 'juliusomo',
};

test('should render', () => {
  const { container } = render(<Avatar user={user} />);

  expect(screen.queryByAltText(user.username)).toBeTruthy();
  expect(container).toMatchSnapshot();
});
