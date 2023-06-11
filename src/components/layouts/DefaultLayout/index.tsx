import { motion } from 'framer-motion';

import * as S from './styled';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <S.DefaultLayoutContainer>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        {children}
      </motion.main>
    </S.DefaultLayoutContainer>
  );
};
