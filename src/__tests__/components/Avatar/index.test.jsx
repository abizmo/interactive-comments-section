import React from 'react';

import { render, screen } from '@testing-library/react';
import Avatar from '../../../components/Avatar';

const user = 'amyrobson';

test('should render', () => {
  const { container } = render(<Avatar user={user} />);

  expect(screen.queryByAltText(user)).toBeTruthy();
  expect(container).toMatchSnapshot();
});
