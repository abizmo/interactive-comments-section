import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  'body, h1, h2, h3, p': {
    margin: 0,
  },
  'h1, h2, h3, p': {
    fontWeight: 400,
  },
  body: {
    background: theme.colors['neutral-200'],
    color: theme.colors['neutral-500'],
    fontFamily: theme.fontFamilies.sans,
    fontSize: theme.fontSizes[500],
    lineHeight: 1.5,
    minHeight: '100vh',
    width: '100vw',
  },
  main: {
    marginInline: 'auto',
    maxWidth: '45rem',
    padding: '2rem 1rem',
    width: '100%',
  },
  footer: {
    color: theme.colors['neutral-800'],
    fontSize: theme.fontSizes[100],
    textAlign: 'center',
    '& a': {
      color: theme.colors['primary-blue-500'],
    },
  },
  '.sr-only': {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
}));

export default GlobalStyle;
