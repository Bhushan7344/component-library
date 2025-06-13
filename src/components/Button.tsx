import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-white hover:bg-primary/80',
        secondary: 'bg-secondary text-white hover:bg-secondary/80',
      },
      customSize: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      intent: 'primary',
      customSize: 'md',
    },
  }
);

export interface ButtonProps
  extends Omit<AntButtonProps, 'size'>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  intent?: 'primary' | 'secondary';
  customSize?: 'sm' | 'md';
  size?: AntButtonProps['size'];
}

export const MyButton: React.FC<ButtonProps> = ({
  intent = 'primary',
  customSize = 'md',
  size,
  className,
  children,
  ...props
}) => {
  return (
    <AntButton
      size={size}
      {...props}
      className={`${buttonStyles({ intent, customSize })} ${className ?? ''}`}
    >
      {children}
    </AntButton>
  );
};
