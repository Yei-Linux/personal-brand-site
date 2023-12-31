const getUrlImage = (node) => {
  const src = node.getAttribute('srcSet');
  if (!src) return '';

  const [firstOne] = src.split(',');
  if (!firstOne) return '';

  const [url] = firstOne.split(' ');
  if (url.includes('format:webp')) return '';

  return url;
};

const converters = [
  {
    key: 'metadata',
    rule: (buildingMetadata) => ({
      filter: function (node, options) {
        return ['storyReadTime', 'storyPublishDate'].includes(
          node.getAttribute('data-testid')
        );
      },

      replacement: function (content, node) {
        buildingMetadata({
          [node.getAttribute('data-testid')]: content,
        });
        if (
          ['storyReadTime', 'storyPublishDate'].includes(
            node.getAttribute('data-testid')
          )
        ) {
          return '';
        }
        return content;
      },
    }),
  },
  {
    key: 'mediumInlineLink',
    rule: () => ({
      filter: function (node, options) {
        return (
          options.linkStyle === 'inlined' &&
          node.nodeName === 'A' &&
          node.getAttribute('href')
        );
      },

      replacement: function (content, node) {
        let href = node.getAttribute('href');
        if (href.includes('@jesusalvan2010?') || href.includes('signin?')) {
          return '';
        }

        if (href.startsWith('/')) {
          href = 'https://medium.com' + href;
        }

        const title = node.title ? ' "' + node.title + '"' : '';
        return '[' + content + '](' + href + title + ')';
      },
    }),
  },
  {
    key: 'mediumHeader',
    rule: () => ({
      filter: function (node, options) {
        return [
          'authorPhoto',
          'authorName',
          'audioPlayButton',
          'headerSocialShareButton',
        ].includes(node.getAttribute('data-testid'));
      },

      replacement: function (content, node) {
        return '';
      },
    }),
  },
  {
    key: 'pre',
    rule: () => ({
      filter: 'pre',
      replacement: function (content, node) {
        return '```\n' + content + '\n```';
      },
    }),
  },
  {
    key: 'section',
    rule: () => ({
      filter: 'section',
      replacement: function (content) {
        return content;
      },
    }),
  },
  {
    key: 'div',
    rule: () => ({
      filter: 'div',
      replacement: function (content) {
        return content;
      },
    }),
  },
  {
    key: 'source',
    rule: (buildingMetadata) => ({
      filter: 'source',
      replacement: function (content, node) {
        const url = getUrlImage(node);
        if (!url) return '';

        buildingMetadata({
          storyImage: url,
        });

        return '![Alt text](' + url + ')' + '\n';
      },
    }),
  },
  {
    key: 'figure',
    rule: () => ({
      filter: 'figure',
      replacement: function (content) {
        return content;
      },
    }),
  },
  {
    key: 'figcaption',
    rule: () => ({
      filter: 'figcaption',
      replacement: function (content) {
        return content;
      },
    }),
  },
];

module.exports = converters;
