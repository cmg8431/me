import { useTheme } from 'next-themes';
import Image from 'next/image';

import { GiphyGIF } from '@/assets';
import {
  faBars,
  faChevronDown,
  faLanguage,
  faMagnifyingGlass,
  faMoon,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';

export const Navbar = () => {
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
          <S.ToggleButton>
            <FontAwesomeIcon icon={faLanguage} />
          </S.ToggleButton>
          <S.ToggleButton onClick={handleOnClickChangeTheme}>
            <FontAwesomeIcon icon={faMoon} />
          </S.ToggleButton>
          <S.ToggleButton>
            <FontAwesomeIcon icon={faWineGlass} />
          </S.ToggleButton>
          <S.IconToggleButton>
            최민기님
            <FontAwesomeIcon icon={faChevronDown} />
          </S.IconToggleButton>
        </S.NavbarMenuItemContainer>
      </S.NavbarMenuContainer>

      <S.NavbarMenuContainer>
        <S.IconToggleButton style={{ position: 'relative', right: '6px' }}>
          <FontAwesomeIcon icon={faBars} />
          카테고리
        </S.IconToggleButton>
        <S.NavbarMenuItemContainer>
          <S.ToggleButton>홈</S.ToggleButton>
          <S.ToggleButton>프로필</S.ToggleButton>
          <S.ToggleButton>블로그</S.ToggleButton>
          <S.ToggleButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </S.ToggleButton>
        </S.NavbarMenuItemContainer>
      </S.NavbarMenuContainer>
    </S.NavbarConatiner>
  );
};
