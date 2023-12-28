import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
});

export const headerMenuContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const headerLogoContainer = style({});

export const left = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});

export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});

export const profileLinksContainer = style({
  display: 'flex',
  gap: '1rem',
  listStyleType: 'none',
});
