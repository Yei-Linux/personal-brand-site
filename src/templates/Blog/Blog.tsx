'use client';

export interface IBlog {
  contentHTML: string;
}

export const Blog = ({ contentHTML }: IBlog) => {
  return (
    <main className="flex flex-col items-center gap-24 min-h-screen p-4 home-container">
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </main>
  );
};
