export const reset = {
  '*': {
    margin: 0,
    fontFamily:
      "'SUIT Variable', 'SUIT', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'",
  },

  [`*, *::before, *::after`]: {
    boxSizing: 'border-box',
  },

  [`html, body, #__next`]: {
    height: '100%',
  },

  body: {
    lineHeight: 1.5,
    backgroundColor: '$gray-100',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  [`img, picture, video, canvas, svg`]: {
    display: 'block',
    maxWidth: '100%',
  },

  [`input, button, textarea, select`]: {
    font: 'inherit',
  },

  [`p, h1, h2, h3, h4, h5, h6`]: {
    overflowWrap: 'break-word',
  },

  ul: {
    listStyleType: 'none',
  },

  [`#root, #__next`]: {
    isolation: 'isolate',
  },

  a: { textDecoration: 'none' },
  'a, button': {
    cursor: 'pointer',
  },
};
