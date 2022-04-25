import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import 'jest-styled-components';

import Button from '../../../components/Button';
import Theme from '../../../theme';

test('renders default button and match snapshot', () => {
  const handleClick = jest.fn();
  const { container, getByText } = render(
    <Theme>
      <Button label="Test" onClick={handleClick} />
    </Theme>,
  );

  const result = getByText(/Test/);
  expect(container).toMatchSnapshot();
  expect(result).toHaveStyle('background: transparent');
  expect(result).toHaveStyle('color: hsl( 211, 10%, 45%)');
  expect(result.getAttribute('color')).toEqual('neutral');

  fireEvent.click(screen.getByText(/Test/));
  expect(handleClick).toHaveBeenCalled();
});

test('renders primary contained button and match snapshot', () => {
  const { container, getByText } = render(
    <Theme>
      <Button
        color="primary"
        label="Test"
        onClick={jest.fn}
        size="big"
        variant="contained"
      />
    </Theme>,
  );

  const result = getByText(/Test/);
  expect(container).toMatchSnapshot();
  expect(result).toHaveStyle('background: hsl(238, 40%, 52%)');
  expect(result).toHaveStyle('color: hsl( 0, 0%, 100%)');
  expect(result).toHaveStyle('width: 8.75rem');
  expect(result.getAttribute('color')).toEqual('primary');
});
