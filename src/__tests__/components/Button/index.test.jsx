import React from 'react';
// import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';
import Button from '../../../components/Button';
import theme from '../../../theme/theme';

test('renders default button and match snapshot', () => {
  const testRenderer = renderer.create(
    <ThemeProvider theme={theme}>
      <Button label="Test" onClick={jest.fn} />
    </ThemeProvider>,
  );

  const testInstance = testRenderer.root;

  expect(testRenderer.toJSON()).toMatchSnapshot();
  expect(testInstance.findByType(Button).props.color).toBe('neutral');
  expect(testInstance.findByType(Button).props.size).toBe('fit');
  expect(testInstance.findByType(Button).props.variant).toBe('text');
  expect(testInstance.findByType('button').children).toEqual(['Test']);
});
