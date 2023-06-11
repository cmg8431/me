import { styled } from '@/stitches.config';

export const FooterWrapper = styled('footer', {
  width: '100%',
  bottom: '0',
  left: '0',
  borderTop: '1px solid $gray100',
  marginTop: '2rem',
});

export const FooterContainer = styled('div', {
  display: 'flex',
  maxWidth: '700px',
  padding: '2rem 0rem',
  margin: '0 auto',
  flexDirection: 'column',
});
