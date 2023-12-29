import clsx from 'clsx';

import * as styles from './styles.css';

interface SpinnerProps {
  className?: string;
  variant?: keyof typeof styles.spinnerVariants;
}

export const Spinner: React.FC = ({
  className,
  variant = 'short',
}: SpinnerProps) => (
  <div className={styles.spinnerContainer}>
    <div className={clsx(styles.spinnerVariants[variant], className)} />
    <div className={styles.spinnerText}>로딩 중</div>
  </div>
);
