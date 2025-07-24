import React from 'react';
import { type CardProps } from '@/interfaces';

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
