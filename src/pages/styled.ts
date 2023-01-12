import { styled } from '@/stitches.config';

export const PreparationGuideWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '1.2rem',
  letterSpacing: '-0.02rem',
});

export const H1 = styled('h1', {});

export const P1 = styled('p', {
  fontSize: '1.25rem',
  lineHeight: '40px',
  fontWeight: 300,
});

export const Button = styled('button', {
  maxWidth: '100%',
  padding: '0px 12px',
  cursor: 'pointer',
  borderRradius: '5px',
  width: '220px',
  height: '48px',
  color: 'white',
  border: '1px solid rgb(255, 255, 255)',
  backgroundColor: 'black',
});
