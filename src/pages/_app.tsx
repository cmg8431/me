import React from 'next';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import { globalStyles, darkTheme } from '@/stitches.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
