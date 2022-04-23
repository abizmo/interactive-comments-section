import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Interactive comments section', () => {
  render(<App />);
  const linkElement = screen.getByText(/Interactive comments section/i);
  expect(linkElement).toBeInTheDocument();
});
