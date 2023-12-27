import { globalStyle } from '@vanilla-extract/css';

import { vars } from './vars.css';

const parentElements = ['canvas', 'iframe', 'img', 'svg', 'video'];
const childElements = ['svg *', 'symbol *'];

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
  all: 'unset',
  display: 'revert',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
});
