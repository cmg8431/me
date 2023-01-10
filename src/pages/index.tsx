import React, { NextPage } from 'next';

import * as S from './styled';

const HomePage: NextPage = () => {
  return (
    <S.PreparationGuideWrapper>
      <p>
        아직 서비스 준비 중이에요!
        <br /> 곧 좋은 모습으로 찾아 뵐게요 :)
      </p>
    </S.PreparationGuideWrapper>
  );
};

export default HomePage;
