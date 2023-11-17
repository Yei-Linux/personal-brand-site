import path from 'path';
import fs from 'fs';
import { BlogFiles, IBlogItem } from '@/templates/BlogFiles';
import matter from 'gray-matter';

const getBlogFiles = () => {
  const blogPath = path.join('src', 'blog');
  const blogFiles = fs.readdirSync(blogPath);
  let blogFilesResponse = [];

  for (const blog of blogFiles) {
    const blogFilePath = path.join('src', 'blog', blog);
    const markdown = fs.readFileSync(blogFilePath, 'utf-8');

    const matterResult = matter(markdown);
    const metadata = matterResult.data;

    blogFilesResponse.push({
      ...metadata,
      storyUrl: blog.replace('.md', ''),
    } as IBlogItem);
  }

  return blogFilesResponse;
};

export default function BlogFilesPage() {
  const blogFiles = getBlogFiles();

  return <BlogFiles blogFiles={blogFiles} />;
}
