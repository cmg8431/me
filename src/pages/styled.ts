import Image from 'next/image';
import Link from 'next/link';

import { styled } from '@/stitches.config';

export const MyCardConatiner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '2rem 0rem 4rem 0rem',
  justifyContent: 'space-between',
  gap: '50px',
});

export const MyInfoCardConatiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const MyProfileImage = styled(Image, {
  maxWidth: '10rem',
  maxHeight: '10rem',
  borderRadius: '10%',
});

export const TextBold = styled(Link, {
  fontWeight: 900,
  fontSize: '0.9rem',
  letterSpacing: '-0.05rem',
  color: '$color',
});
