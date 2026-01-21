import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}
