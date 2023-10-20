export interface IItem {
  title: string;
  description: string;
}

export const Item = ({ title, description }: IItem) => {
  return (
    <li className="flex flex-col">
      {title && <p className="font-bold text-[19px] text-center">{title}</p>}
      {description && <p className="text-[15px] text-center">{description}</p>}
    </li>
  );
};
