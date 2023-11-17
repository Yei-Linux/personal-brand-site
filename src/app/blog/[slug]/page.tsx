import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Blog } from '@/templates/Blog';

const handleMD = async (slug: string) => {
  const blogFilesPath = path.join('src', 'blog', `${slug}.md`);
  const markdown = fs.readFileSync(blogFilesPath, 'utf-8');

  const matterResult = matter(markdown);
  const metadata = matterResult.data;
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHTML = processedContent.toString();

  return { contentHTML, metadata };
};

type PageProps = {
  params: {
    slug: string;
  };
};
export default async function BlogFile({ params: { slug } }: PageProps) {
  const { contentHTML, metadata } = await handleMD(slug);

  return <Blog contentHTML={contentHTML} />;
}
