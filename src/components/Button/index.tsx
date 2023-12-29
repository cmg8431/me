import React from 'react';

import clsx from 'clsx';

import { Spinner } from './Spinner';
import * as styles from './styles.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { loading, disabled, className, children, ...rest } = props;
    return (
      <button />
      // <button
      //   ref={ref}
      //   className={clsx([
      //     styles.buttonWrapper({ variant, color, size }),
      //     className,
      //   ])}
      //   disabled={loading || disabled}
      //   {...rest}
      // >
      //   {loading ? (
      //     <Spinner />
      //   ) : (
      //     <>
      //       {/* {renderedIcon && (
      //         <div className={styles.prefixIcon}>{renderedIcon}</div>
      //       )} */}
      //       {children}
      //     </>
      //   )}
      // </button>
    );
  }
);
