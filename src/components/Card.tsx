import React from 'react';
import { Card as AntCard, CardProps as AntCardProps } from 'antd';

export interface CardProps extends AntCardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <AntCard
      className={`bg-background text-text rounded-lg shadow-md ${className ?? ''}`}
      bodyStyle={{ padding: '1rem' }}
      {...props}
    >
      {children}
    </AntCard>
  );
};
