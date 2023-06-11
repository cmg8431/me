import { useTheme } from 'next-themes';
import Image from 'next/image';

import { GiphyGIF } from '@/assets';
import { faMagnifyingGlass, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Tabs } from '../Tabs';
import * as S from './styled';

interface NavbarProps {
  isTabs?: boolean;
}

export const Navbar = ({ isTabs }: NavbarProps) => {
  const { theme, setTheme } = useTheme();

  const handleOnClickChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <S.NavbarConatiner>
      <S.NavbarMenuContainer>
        <S.NavbarLogoContainer>
          <Image
            style={{ position: 'relative', bottom: '1px' }}
            src={GiphyGIF}
            alt="main-logo"
            width={29}
            height={29}
          />
          ME
        </S.NavbarLogoContainer>
        <S.NavbarMenuItemContainer>
          <S.ToggleButton onClick={handleOnClickChangeTheme}>
            <FontAwesomeIcon icon={faMoon} size="lg" />
          </S.ToggleButton>
          <S.ToggleButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </S.ToggleButton>
        </S.NavbarMenuItemContainer>
      </S.NavbarMenuContainer>
      {isTabs && (
        <Tabs
          menu={[
            { to: '', text: '홈' },
            { to: 'blog', text: '블로그' },
            { to: 'dog', text: '도구' },
          ]}
        />
      )}
    </S.NavbarConatiner>
  );
};
