import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const tabItemsContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0.3rem  0 0.5rem 0',
  height: '2.4rem',
  width: '100%',
  borderBottom: '2px solid #F8F8F8 !important',
});

export const tabItem = recipe({
  base: {
    width: '100%',
    padding: '0.7rem 0',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 500,
    cursor: 'pointer',
    listStyleType: 'none',
    maxWidth: '6rem',
    position: 'relative',
    bottom: '-0.37rem',
    backgroundColor: 'none',

    selectors: {
      '&:active': {
        transition: 'all 0.1s ease-in',
        backgroundColor: '#E5E5E5 !important',
      },
      '&:hover': {
        transition: 'all 0.2s ease-in',
        backgroundColor: '#F5F5F5',
        opacity: '0.7',
      },
    },
  },

  variants: {
    active: {
      true: {
        color: 'black',
        borderBottom: '2px solid black !important',
      },
      false: {
        color: '#B9B9B9',
        borderBottom: '2px solid transparent !important',
      },
    },
  },
});
