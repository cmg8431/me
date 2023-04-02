import { Navbar } from '@/components/common/Navbar';

import * as S from './styled';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.DefaultLayoutContainer>
      <Navbar />
      {children}
    </S.DefaultLayoutContainer>
  );
};
