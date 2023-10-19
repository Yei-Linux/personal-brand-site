import classNames from 'classnames';
import { FC } from 'react';

export interface IText {
  children: React.ReactNode;
  className?: string;
}

export const Text: FC<IText> = ({ children, className }) => {
  return <p className={classNames(className)}>{children}</p>;
};
