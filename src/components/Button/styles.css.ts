import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonWrapper = recipe({
  base: {
    height: '48px',
    borderRadius: '8px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionTimingFunction: 'ease-out',
    transitionDuration: '0.2s',
    cursor: 'pointer',
    color: 'black',
    selectors: {
      '&:disabled': {
        transitionDuration: '0.4s',
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    variant: {
      filled: {},
      line: {},
    },
    color: { primary: {}, secondary: {}, ghost: {}, default: {} },
    size: { xsmall: {}, small: {}, large: {}, middle: {}, full: {} },
  },
});

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const spinner = style({
  borderRadius: '50%',
  border: '1.8px solid #adadad',
  borderBottomColor: 'transparent',
  boxSizing: 'border-box',
  display: 'inline-block',
  animation: `${rotation} 1s linear infinite`,
});

export const spinnerVariants = styleVariants({
  default: [
    spinner,
    {
      width: '24px',
      height: '24px',
    },
  ],
  short: [
    spinner,
    {
      width: '16px',
      height: '16px',
    },
  ],
});
export const spinnerContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const spinnerText = style({});
