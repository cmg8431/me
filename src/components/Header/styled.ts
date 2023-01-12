import { styled } from '@/stitches.config';

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem 0 1.5rem',
  height: '60px',
  borderBottom: '1px solid #e5e8eb',
});

export const HeaderMenuContainer = styled('ul', {
  display: 'flex',
  gap: '2rem',
});

export const HeaderMenuItem = styled('li', {
  fontSize: '0.96rem',
  color: '#cecece',

  variants: {
    location: {
      true: {
        color: 'black',
      },
    },
  },
});

export const CoffieButton = styled('button', {
  transition: 'background .2s ease,color .1s ease',
  border: '0 solid transparent',
  borderRadius: '0.5rem',
  fontSize: '0.95rem',
  fontWeight: '500',
  color: '#4f5052',
  padding: '0.3rem 0.7rem',
});
