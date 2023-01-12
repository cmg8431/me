import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styled';

export const Header = () => {
  const router = useRouter();
  const isRouter = router.pathname;

  const MENU_ITEM = [
    {
      name: 'about',
      path: '/',
    },
    {
      name: 'blog',
      path: '/blog',
    },
    {
      name: 'feed',
      path: '/feed',
    },
  ];

  return (
    <S.HeaderContainer>
      <div>me</div>
      <div>
        <S.HeaderMenuContainer>
          {MENU_ITEM.map((item) => {
            return (
              <Link href={item.path}>
                <S.HeaderMenuItem location={isRouter === item.path}>
                  {item.name}
                </S.HeaderMenuItem>
              </Link>
            );
          })}
        </S.HeaderMenuContainer>
      </div>
      <Link href="https://toss.me/cmg8431">
        <S.CoffieButton>☕ coffie</S.CoffieButton>
      </Link>
    </S.HeaderContainer>
  );
};
