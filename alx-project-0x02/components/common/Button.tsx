// components/common/Button.tsx

import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ label, size, shape }) => {
  return (
    <button className={`${sizeClasses[size]} ${shape} bg-blue-500 text-white`}>
      {label}
    </button>
  );
};

export default Button;
