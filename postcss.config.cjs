const prefixWrap = require('postcss-prefixwrap');

module.exports = {
  plugins: [
    prefixWrap('.bs4', {
      whitelist: ['.container', '.row', '.col', /^\.col-/], // optional
    }),
    prefixWrap('.bs5', {
      whitelist: ['.container', '.row', '.col', /^\.col-/], // optional
    }),
  ],
};