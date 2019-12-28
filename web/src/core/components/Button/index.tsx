import React from 'react';

export const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  className,
  children,
}) => {
  return (
    <button onClick={onClick} className={`p-2 bg-red-200 ` + className}>
      {children}
    </button>
  );
};

export interface ButtonProps {
  onClick?: () => void;
  className?: string;
}
