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

export interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
