import type { Metadata } from 'next';

import { NextThemesProvider } from '@/providers';
import { darkTheme, font, lightTheme } from '@/styles';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={font.className}>
      <body>
        <NextThemesProvider
          storageKey="theme"
          attribute="class"
          value={{
            light: lightTheme,
            dark: darkTheme,
          }}
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
