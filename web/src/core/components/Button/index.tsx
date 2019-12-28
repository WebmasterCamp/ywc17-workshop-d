import React from 'react';

export const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  className,
  children,
}) => {
  return (
    <button onClick={onClick} className={className || `p-2 bg-red-200`}>
      {children}
    </button>
  );
};

export interface ButtonProps {
  onClick?: () => void;
  className?: string;
}
