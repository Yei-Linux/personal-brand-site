'use client';

export interface IBlog {
  contentHTML: string;
}

export const Blog = ({ contentHTML }: IBlog) => {
  return (
    <main className="flex flex-col items-center gap-24 min-h-screen blog-wrapper">
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </main>
  );
};
