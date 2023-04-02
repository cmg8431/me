import Image from 'next/image';

import { Variants } from 'framer-motion';

import * as S from './styled';

type ButtonThemeType = 'default';

interface ButtonProps extends React.ComponentProps<typeof S.ButtonElement> {
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  interval?: boolean;
  theme?: ButtonThemeType;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const Button = ({
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  theme = 'default',
  size = 'lg',
  ...props
}: ButtonProps) => {
  const getButtonVariants = (disabled: boolean): Variants => {
    if (disabled) return {};
    return {
      hover: {
        scale: 1.03,
        transition: {
          duration: 0.15,
        },
      },
      tap: {
        scale: 0.97,
        opacity: 0.65,
        transition: {
          duration: 0.15,
        },
      },
    };
  };

  return (
    <S.ButtonElement
      type="button"
      size={size}
      fw={fullWidth}
      theme={theme}
      disabled={disabled}
      whileHover="hover"
      whileTap="tap"
      variants={getButtonVariants(disabled)}
      {...props}
    >
      {icon && <Image src={icon} alt={''} />}
      <p>{loading ? '로딩 중' : props.children}</p>
    </S.ButtonElement>
  );
};
