import React, { NextPage } from 'next';

import { DefaultLayout } from '@/layouts';

import * as S from './styled';

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <div>
        <div>
          <S.H1>최민기</S.H1>
          <S.H1>Frontend Engineer</S.H1>
        </div>
        <S.P1>
          테스트 문구의 굉장히 디테일한 집착과 고민해요. <br />
          테스트를 탐구하고 테스트 해결책을 테스트해요. <br />
          테스트를 제공하기위해 테스트에 대해 매번 고민해요 <br />
          이런 테스트들로 더 멋진 테스트 문구를 작성할 수 있다고 생각해요
        </S.P1>
        <div>
          <S.Button>GitHub 방문하기</S.Button>
        </div>
      </div>

      <div>
        <div>경력</div>
        <div>
          <div>
            <h3>인포크링크</h3>
            <div>2022.08 ~</div>
            <div>Frontend Engineer</div>
            <div>개발팀</div>
          </div>
          <div>
            <h3>인포크링크 웹 프론트엔드 개발</h3>
            <div>간단 소개 : 대충 간단한 소개글이라는 뜻입니다.</div>
            <div>사용 기술 : Vue, Javascript, Nuxtjs</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
