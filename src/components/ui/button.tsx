import React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

export type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const buttonVariants = cva(
  cn(
    'inline-flex justify-center items-center cursor-pointer whitespace-nowrap rounded-[4px] font-normal',
    'disabled:bg-background-inactive disabled:text-text-inactive disabled:border-line-line2 disabled:pointer-events-none'
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-key-color-primary text-white border border-gray-scale-gray-90',
          'hover:bg-orange-scale-orange-60'
        ),
        secondary: cn(
          'bg-gray-scale-white text-key-color-primary border border-key-color-primary',
          'hover:bg-orange-scale-orange-10'
        ),
        outlined: cn(
          'bg-gray-scale-white text-text-main border border-line-line2',
          'hover:bg-gray-scale-gray-5',
          'active:bg-gray-scale-gray-10'
        ),
      },
      size: {
        large: 'h-[64px] px-[26px] text-[20px]',
        small: 'h-[40px] px-[16px] text-[16px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  }
);

export const Button = ({
  className,
  variant,
  size,
  children,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot.Root : 'button';

  return (
    <Component
      type={asChild ? undefined : 'button'}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
