import { Image, Link } from '@nextui-org/react';

export const Header = () => {
  return (
    <header className="flex justify-between p-4 sticky top-0 shadow-sm bg-white z-[100] mb-10">
      <div className="text-primary font-bold flex items-center justify-center gap-2">
        <Link href="/">Jesus Alvan</Link> <span>🚀</span>
      </div>
      <div>
        <ul className="flex gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
