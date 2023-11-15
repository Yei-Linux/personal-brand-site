import path from 'path';
import fs from 'fs';
import { BlogFiles } from '@/templates/BlogFiles';

const getBlogFiles = () => {
  const blogPath = path.join('src', 'blog');
  const blogFiles = fs.readdirSync(blogPath);
  let blogFilesResponse = [];

  for (const blog of blogFiles) {
    blogFilesResponse.push({
      name: blog.split('-').join(' ').replace('.md', ''),
      description: '',
    });
  }

  return blogFilesResponse;
};

export default function BlogFilesPage() {
  const blogFiles = getBlogFiles();

  return <BlogFiles blogFiles={blogFiles} />;
}
