// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'parser': require('postcss-scss'),
  'plugins': {
    'precss': {},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {}
  }
}
