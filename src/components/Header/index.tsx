'use client';
import { Tabs } from '@/components';

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
    <header>
      <div></div>
      <Tabs menus={TAB_LIST} />
    </header>
  );
};
