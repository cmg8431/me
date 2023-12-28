import { globalStyle } from '@vanilla-extract/css';

import { vars } from './vars.css';

const parentElements = ['canvas', 'iframe', 'img', 'svg', 'video'];
const childElements = ['svg *', 'symbol *'];

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
  display: 'revert',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
});

globalStyle('html, body, #__next', {
  height: '100%',
});

globalStyle('html', {
  fontSize: '13px',

  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '14px',
    },
  },
});

globalStyle('#__next', {
  fontSize: '1.6rem',
  fontWeight: 400,
  fontFamily:
    'Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
});

globalStyle('br.mobile-only', {
  display: 'none',

  '@media': {
    'screen and (min-width: 768px)': {
      display: 'block',
    },
  },
});

globalStyle('br.desktop-only', {
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});
