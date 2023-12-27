import { createTheme, createThemeContract } from '@vanilla-extract/css';

const colors = createThemeContract({
  background: null,
  text: null,
});

export const lightTheme = createTheme(colors, {
  background: 'white',
  text: 'black',
});

export const darkTheme = createTheme(colors, {
  background: 'black',
  text: 'white',
});

export const vars = { colors };
