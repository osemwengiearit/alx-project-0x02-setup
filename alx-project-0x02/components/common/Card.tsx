import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
