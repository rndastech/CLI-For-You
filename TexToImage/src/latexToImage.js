const katex = require('katex');
const { JSDOM } = require('jsdom');

async function latexToImage(latex, outputFile) {
  const dom = new JSDOM('<div></div>');
  const document = dom.window.document;
  katex.render(latex, document.createElement('span'), { displayMode: true });
}

module.exports = { latexToImage };
