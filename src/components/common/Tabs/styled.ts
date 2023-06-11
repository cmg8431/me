import Link from 'next/link';

import { styled } from '@/stitches.config';

export const TabItemListContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.3rem 0',
});

export const TabItem = styled(Link, {
  width: '100%',
  textAlign: 'center',
  padding: '0.7rem 0',
  textDecoration: 'none',
  color: 'black',
  fontSize: '1rem',
  fontWeight: '500',

  '&:active': {
    transition: 'all 0.1s',
    backgroundColor: '$gray300',
    opacity: '0.4',
  },

  variants: {
    active: {
      true: {
        color: '$color',
        borderBottom: '2px solid $color',
      },
      false: {
        color: '$gray400',
        borderBottom: '1px solid $gray100',
      },
    },
  },
});

// export const TabLink = styled(Link, {
//   width: '100%',
//   height: '100%',
//   textDecoration: 'none',
//   color: 'black',
//   fontSize: '16px',
//   fontWeight: 'bold',
//   padding: '4px 12px',

//   '&:hover': {
//     backgroundColor: 'black',
//     color: 'white',
//   },
// });
