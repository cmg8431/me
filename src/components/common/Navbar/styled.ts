import { styled } from '@/stitches.config';

export const NavbarLogoContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  fontWeight: '900',
  gap: '2px',
  fontSize: '1.45rem',
  userSelect: 'none',
  cursor: 'pointer',
});

export const NavbarConatiner = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0.9rem 0',
  gap: '4px',
});

export const NavbarMenuContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const NavbarMenuItemContainer = styled('ul', {
  display: 'flex',
  gap: '2px`',
});

export const ToggleButton = styled('div', {
  fontWeight: '400',
  cursor: 'pointer',
  padding: '0.3rem 0.8rem',
  borderRadius: '0.2rem',
  transition: 'background 0.1s ease-in',
  fontSize: '0.93rem',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});

export const IconToggleButton = styled(ToggleButton, {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
