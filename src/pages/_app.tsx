import React from 'next';
import { AppProps } from 'next/app';

import { globalStyles } from '@/stitches.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return <Component {...pageProps} />;
};

export default MyApp;
