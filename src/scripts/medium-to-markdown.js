const request = require('request');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const gfm = require('turndown-plugin-gfm').gfm;

const converters = require('./md-converters');

const turndownService = new TurndownService();
turndownService.use(gfm);

converters.forEach((converter) => {
  turndownService.addRule(converter.key, converter.rule);
});

/**
 * Converts the content from a given URL into markdown format.
 *
 * @param {string} url - The URL of the content to convert.
 * @return {Promise<string>} A promise that resolves with the converted markdown content.
 */
function convertFromUrl(url) {
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
        resolve(markdown);
      }
    );
  });
}

module.exports = convertFromUrl;
