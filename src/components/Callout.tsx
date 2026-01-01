import { ReactNode } from 'react';
import type { CalloutType } from '@/data/chapters';

type CalloutProps = {
  type?: CalloutType;
  children: ReactNode;
};

export function Callout({ type = 'info', children }: CalloutProps) {
  const className = ['callout', type !== 'info' ? type : ''].filter(Boolean).join(' ');
  return <div className={className}>{children}</div>;
}
