#!/usr/bin/env node

const { latexToImage } = require('./src/latexToImage');
const { parseArgs } = require('./src/utils');

const args = parseArgs(process.argv.slice(2));

latexToImage(args.latex, args.output)
  .then(() => {
    console.log('Image generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating image:', error);
  });
