import { style } from '@vanilla-extract/css';

export const backdrop = style({
  position: 'fixed',
  inset: '0',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  background: 'rgba(0, 0, 0, 0.1)',
  backdropFilter: 'saturate(180%) blur(20px)',
});

export const animator = style({
  maxWidth: '500px',
  width: '100%',
  backgroundColor: 'rgb(236, 238, 240)',
  color: 'black',
  borderRadius: '0.8rem',
  overflow: 'hidden',
  boxShadow: 'rgba(104, 112, 118, 0.08) 0px 12px 20px 6px',
});
