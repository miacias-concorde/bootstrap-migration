import prefixWrap from 'postcss-prefixwrap';

export default {
  plugins: [
    prefixWrap('.bs4', {
      whitelist: ['.container', '.row', '.col', /^\.col-/], // optional
    }),
    prefixWrap('.bs5', {
      whitelist: ['.container', '.row', '.col', /^\.col-/], // optional
    }),
  ],
};
