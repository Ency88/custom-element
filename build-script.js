const fs = require('fs-extra');
const concat = require('concat');

(async () => {
  const files = [
    'dist/custom-element/runtime.js',
    'dist/custom-element/polyfills.js',
    'dist/custom-element/scripts.js',
    'dist/custom-element/main.js',
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/tp-custom-element.js');

  console.log('Element created.');
})();
