import { Item } from './Item';

export interface IAchivements {
  children: React.ReactNode;
}

export const Achievements = ({ children }: IAchivements) => {
  return <ul className="flex flex-wrap justify-center gap-3">{children}</ul>;
};

Achievements.Item = Item;
