import { Typo } from '../Typography';
import * as S from './styled';

const SITE_FOOTER_CONTENT = [
  {
    title: '사이트맵',
    contents: [
      {
        text: '홈',
        href: '/home',
      },
      {
        text: '프로필',
        href: '/home',
      },
      {
        text: '블로그',
        href: '/home',
      },
    ],
  },
];

export const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <div>
          {SITE_FOOTER_CONTENT.map((v) => {
            return (
              <div>
                <div>{v.title}</div>
                {v.contents.map((content) => {
                  return <div>{content.text}</div>;
                })}
              </div>
            );
          })}
        </div>
        <Typo.Detail
          style={{
            color: 'var(--colors-gray600)',
            fontSize: '0.7rem',
            textAlign: 'center',
          }}
        >
          Copyright ⓒ 2023 <strong>mingi</strong> All rights reserved.
          <br /> Created by <strong>@cmg8431.</strong>Powered By{' '}
          <strong>@cmg8431</strong>
        </Typo.Detail>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};
