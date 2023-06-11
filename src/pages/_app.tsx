import React from 'next';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import { globalStyles, darkTheme } from '@/stitches.config';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      value={{ light: 'light', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
