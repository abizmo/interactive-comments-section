import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Interactive comments section', () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});
