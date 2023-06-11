import React from 'react';

import { useRouter } from 'next/router';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';

export type GlobalNavigationBarMenuType = {
  to: string;
  icon: IconDefinition;
  text: string;
};

export interface GlobalNavigationBarProps {
  menu: GlobalNavigationBarMenuType[];
}

export const GlobalNavigationBar: React.FC<GlobalNavigationBarProps> = ({
  menu,
}) => {
  const router = useRouter();

  const menuItems = menu.map(({ to, icon: Icon, text }) => ({
    to,
    Icon,
    text,
    active: to === router.pathname,
  }));

  return (
    <S.GlobalNavigationBarContainer>
      <S.GlobalNavigationBarItemListContainer>
        {menuItems.map(({ to, Icon, text, active }) => (
          <S.GlobalNavigationItemContainer key={to} href={to}>
            <FontAwesomeIcon
              icon={Icon}
              size="lg"
              color={active ? 'var(--colors-gray900)' : 'var(--colors-gray300)'}
            />
            <S.ItemText active={active}>{text}</S.ItemText>
          </S.GlobalNavigationItemContainer>
        ))}
      </S.GlobalNavigationBarItemListContainer>
    </S.GlobalNavigationBarContainer>
  );
};
