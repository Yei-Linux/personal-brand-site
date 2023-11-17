const request = require('request');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const gfm = require('turndown-plugin-gfm').gfm;

const converters = require('./md-converters');

const turndownService = new TurndownService();
turndownService.use(gfm);

let metadata = {};
const buildingMetadata = (newValues) => {
  if (metadata[Object.keys(newValues)[0]]) {
    return;
  }
  metadata = { ...metadata, ...newValues };
};

const convertMetadataToMDFormat = (metadata, blogFileMD) => {
  metadata = {
    ...metadata,
    storyTitle: blogFileMD.split('-').slice(0, -1).join(' '),
  };

  const mdFormat = Object.entries(metadata).reduce((acc, [key, value]) => {
    return `${acc}${key}: ${value}\n`;
  }, '---\n');

  return `${mdFormat}---\n\n`;
};

converters.forEach((converter) => {
  turndownService.addRule(converter.key, converter.rule(buildingMetadata));
});

function convertFromUrl(url, blogFileMD) {
  return new Promise(function (resolve, reject) {
    request(
      {
        uri: url,
        method: 'GET',
      },
      function (err, httpResponse, body) {
        if (err) return reject(err);

        const $ = cheerio.load(body);
        const html = $('article').html() || '';

        const markdown = turndownService.turndown(html);
        const metadataFormatted = convertMetadataToMDFormat(
          metadata,
          blogFileMD
        );
        resolve(metadataFormatted + markdown);
      }
    );
  });
}

module.exports = convertFromUrl;
