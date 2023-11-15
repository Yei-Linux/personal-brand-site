import { Link } from '@nextui-org/react';

export type IBlogItems = Array<{
  name: string;
  description: string;
}>;

export interface IBlogFiles {
  blogFiles: IBlogItems;
}

export const BlogFiles = ({ blogFiles }: IBlogFiles) => {
  return (
    <div>
      {blogFiles.map(({ name, description }) => (
        <div key={name}>
          <Link href={`/blog/${name.split(' ').join('-')}`}>{name}</Link>
          {description && <p>{description}</p>}
        </div>
      ))}
    </div>
  );
};
