'use client';
import { KBarAnimator, KBarPortal, KBarPositioner } from 'kbar';

import { RenderResults } from './RenderResults';
import { KBarSearch } from './Search';
import * as styles from './styles.css';

export const KBarComponent: React.FC = () => {
  return (
    <KBarPortal>
      <div className={styles.backdrop}>
        <KBarPositioner>
          <KBarAnimator className={styles.animator}>
            <KBarSearch />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </div>
    </KBarPortal>
  );
};
