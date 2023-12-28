'use client';
import { usePathname, useRouter } from 'next/navigation';

import * as styles from './styles.css';

export type MenuType = {
  to: string;
  label: string;
};

export interface TabsProps {
  menus: MenuType[];
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();

  let activeTab = props.menus.findIndex((item) => item.to === pathname);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (!pathname && props.menus[0].to === '') activeTab = 0;

  return (
    <ul className={styles.tabItemsContainer}>
      {props.menus.map(({ to, label }, index) => {
        return (
          <li
            key={`${label}-${index}`}
            className={styles.tabItem({ active: activeTab === index })}
            onClick={() => router.push(to)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};
