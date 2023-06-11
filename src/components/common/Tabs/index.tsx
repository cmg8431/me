import { useRouter } from 'next/router';

import * as S from './styled';

interface TabItemProps {
  to: string;
  text: string;
}

interface TabsProps {
  menu: TabItemProps[];
}

export const Tabs = ({ menu }: TabsProps) => {
  const router = useRouter();
  let activeTab = menu.findIndex((item) => item.to === router.query.tab);

  if (!router.query.tab && menu[0].to === '') activeTab = 0;

  return (
    <S.TabItemListContainer>
      {menu.map(({ to, text }, index) => (
        <S.TabItem
          href={to === '' ? '' : `/?tab=${to}`}
          key={to}
          active={activeTab === index}
        >
          {text}
        </S.TabItem>
      ))}
    </S.TabItemListContainer>
  );
};
