import Link from 'next/link';

import { styled } from '@/stitches.config';

export const GlobalNavigationBarContainer = styled('nav', {
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  maxWidth: '750px',
  margin: '0 auto',
  borderTop: '1px solid $gray100',
  borderRadius: '1.2rem 1.2rem 0 0',
  backgroundColor: '$background',
  background: 'rgba(255, 255, 255, 0.045)',
  backdropFilter: 'blur(5px)',
});

export const GlobalNavigationBarItemListContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '0.7rem 2rem',
  maxWidth: '600px',
  margin: '0 auto',
});

export const GlobalNavigationItemContainer = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
});

export const ItemText = styled('p', {
  fontSize: '0.9rem',
  fontWeight: 700,
  textAlign: 'center',
  color: '$color',
  marginTop: '0.4rem',

  variants: {
    active: {
      true: {
        color: '$gray900',
      },
      false: {
        color: '$gray300',
      },
    },
  },
});
