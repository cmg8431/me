import React, { NextPage } from 'next';

import { AppLayout } from '@/components/layouts';

import * as S from './styled';

const ProfilePage: NextPage = () => {
  return (
    <AppLayout>
      아직 서비스 준비 중이에요! <br /> 곧 좋은 모습으로 찾아 뵐게요 :)
    </AppLayout>
  );
};

export default ProfilePage;
