import React, { NextPage } from 'next';
import Image from 'next/image';

import { ProfilePNG } from '@/assets';
import { Typo } from '@/components';
import { DefaultLayout } from '@/layouts';

import * as S from './styled';

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <S.MyCardConatiner>
        <S.MyInfoCardConatiner>
          <Typo.H2 fw="900">Mingi Choe</Typo.H2>
          <Typo.Detail fw="300">
            Software Engineer in{' '}
            <S.TextBold
              href="https://www.notion.so/inpock/INPOCK-TEAM-8ecc728639d94704b7b25ef8e770b117/"
              target="_blank"
            >
              @AB-Z
            </S.TextBold>
          </Typo.Detail>
          <Typo.Detail fw="100">
            새로운 기술과 트렌드를 학습하며 끊임없이 발전하는 것을 추구하며,
            새로운 도전과 학습의 기회를 소중히 여기고 이를 통해 더 나은 성과를
            창출하고자 합니다.
          </Typo.Detail>
        </S.MyInfoCardConatiner>
        <S.MyProfileImage src={ProfilePNG} alt="profile-image" />
      </S.MyCardConatiner>
      <div>
        <Typo.H6 fw="800">최근 작성된 글</Typo.H6>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
