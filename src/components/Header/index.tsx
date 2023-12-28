'use client';
import Image from 'next/image';

import { GiphyGIF, MeFontSVG } from '@/assets';
import { Tabs } from '@/components';

import * as styles from './styles.css';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

const TAB_LIST = [
  { to: '/blog', label: '블로그' },
  { to: '/resume', label: '이력서' },
  { to: '/tool', label: '도구' },
  { to: '/guestbook', label: '방명록' },
];

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMenuContainer}>
        <div className={styles.left}>
          <Image
            style={{ position: 'relative', bottom: '1px' }}
            src={GiphyGIF}
            alt="main-logo"
            width={38}
            height={38}
          />
          <MeFontSVG />
        </div>
        <div className={styles.right}>
          <div>sns</div>
          <div>search</div>
          <div>sponsor</div>
        </div>
      </div>
      <Tabs menus={TAB_LIST} />
    </header>
  );
};
