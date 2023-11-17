const mediumToMarkdown = require('./medium-to-markdown');
const fs = require('fs');
const path = require('path');

/**
 * Generates a markdown file for a blog post from a Medium URL.
 *
 * @param {string} mediumUrl - The URL of the Medium post to convert.
 * @return {Promise<void>} - A promise that resolves when the markdown file is created.
 */
const getMediumToMyBlog = async () => {
  try {
    const mediumUrl = process.argv[2];
    if (!mediumUrl) {
      throw new Error('Medium url is not passed');
    }

    const blogFileMD = mediumUrl.split('/').slice(-1) + '.md';
    const markdown = await mediumToMarkdown(mediumUrl, blogFileMD);
    if (!markdown) {
      throw new Error('Medium url was nos found');
    }

    const blogPath = path.join('src', 'blog', blogFileMD);

    const isExists = fs.existsSync(blogPath);
    if (isExists) console.log('This blog exists, it will be override.');

    fs.writeFileSync(blogPath, markdown, { flag: 'w' });
    console.log('Post Medium created');
  } catch (error) {
    console.error('Error: ', error.message);
    process.exit(1);
  }
};

getMediumToMyBlog();
