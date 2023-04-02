import { createStitches } from '@stitches/react';

import { colors, sizes, utils, media, reset } from './styles';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    ...colors.light,
    ...sizes,
  },
  ...media,
  ...utils,
});

export const globalStyles = globalCss({
  ...reset,
});

export const darkTheme = createTheme('dark', {
  ...colors.dark,
});
