import { Header, SideNavbar } from '@/components';

import * as S from './styled';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.DefaultLayoutContainer>
      <Header />
      <S.DefaultLayout>
        <SideNavbar />
        <S.DefaultLayoutWrapper>{children}</S.DefaultLayoutWrapper>
      </S.DefaultLayout>
    </S.DefaultLayoutContainer>
  );
};
