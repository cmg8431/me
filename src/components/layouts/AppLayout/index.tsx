import React from 'react';

import { Footer, Navbar } from '@/components/common';
import { GlobalNavigationBar } from '@/components/common/GlobalNavigationBar';
import { faBars, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import { DefaultLayout } from '../DefaultLayout';
import * as S from './styled';

export interface AppLayoutProps {
  children?: React.ReactNode;
  isTabs?: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, isTabs }) => {
  return (
    <S.AppLayoutContainer>
      <DefaultLayout>
        <Navbar isTabs={isTabs} />
        {children}
      </DefaultLayout>
      <GlobalNavigationBar
        menu={[
          {
            to: '/',
            icon: faHome,
            text: '홈',
          },
          {
            to: '/category',
            icon: faBars,
            text: '카테고리',
          },
          {
            to: '/profile',
            icon: faUser,
            text: '프로필',
          },
        ]}
      />
    </S.AppLayoutContainer>
  );
};
