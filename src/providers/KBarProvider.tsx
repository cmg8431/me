'use client';
import { KBarProvider } from 'kbar';

import { KBarComponent } from '@/components';

export interface NextKBarProviderProps {
  children?: React.ReactNode;
}

export const NextKBarProvider = ({
  children,
  ...props
}: NextKBarProviderProps) => {
  const actions = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'writing words',
      perform: () => (window.location.pathname = 'blog'),
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['c'],
      keywords: 'email',
      perform: () => (window.location.pathname = 'contact'),
    },
  ];

  return (
    <KBarProvider actions={actions} {...props}>
      <KBarComponent />
      {children}
    </KBarProvider>
  );
};
