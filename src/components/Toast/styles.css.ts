import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const toastContainer = recipe({
  base: {
    opacity: 1,
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: 'transparent',
    zIndex: 9999,
    fontSize: '1.4rem',
    position: 'fixed',
  },
  variants: {
    position: {
      topLeft: {
        top: '2.5%',
        left: '1.4rem',
      },
      topRight: {
        top: '2.5%',
        right: '1.4rem',
      },
      topCenter: {
        top: '2.5%',
        left: 0,
        right: 0,
      },
      bottomLeft: {
        bottom: '2.5%',
        left: '1.4rem',
      },
      bottomRight: {
        bottom: '2.5%',
        right: '1.4rem',
      },
      bottomCenter: {
        bottom: '2.5%',
        left: 0,
        right: 0,
      },
    },
  },
});

export const backgroundColor = createVar('backgroundColor');

export const toastIconWrapper = style({
  width: '2rem',
  height: '2rem',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor,
});

export const toastWrapper = style({
  width: 'fit-content',
  borderRadius: '1rem',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  backdropFilter: 'blur(2px)',
  color: 'white',
  letterSpacing: '-0.02rem',
  height: '4.5rem',
  padding: '0 1.4rem',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  textAlign: 'left',
});
