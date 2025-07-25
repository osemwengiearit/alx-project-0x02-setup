// This will hold TypeScript interfaces later
export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}
