import { style } from '@vanilla-extract/css';

export const inputElement = style({
  padding: '1.4rem 1.5rem',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  background: 'transparent',
  fontSize: '1.1rem',
  fontWeight: '500',
  fontFamily: 'Pretendard',
  color: '#8C8C8C',
  borderBottom: '1px solid #D7D7D7',

  selectors: {
    '&:placeholder': {
      color: 'black',
      transition: 'opacity 0.25s ease 0s',
      MozTransition: 'opacity 0.25s ease 0s',
      msTransition: 'opacity 0.25s ease 0s',
      WebkitTransition: 'opacity 0.25s ease 0s',
    },
    '&:focus::placeholder': {
      fontSize: '1.1rem',
      fontWeight: '500',
      fontFamily: 'Pretendard',
      opacity: 1,
      color: '#8C8C8C',
      transition: 'opacity 0.25s ease 0s',
    },
  },
});
