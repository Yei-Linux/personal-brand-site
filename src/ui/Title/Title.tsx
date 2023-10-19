import classNames from 'classnames';
import { FC } from 'react';

type TLevelNumbers = 1 | 2 | 3 | 4;
export interface Ititle {
  level?: `h${TLevelNumbers}`;
  children: React.ReactNode;
  className?: string;
}

export const Title: FC<Ititle> = ({ level = 'h1', children, className }) => {
  const Component = level;

  return <Component className={classNames(className)}>{children}</Component>;
};
