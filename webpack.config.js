const Path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: Path.resolve('dist'),
    filename: 'bundle.js'
  }
};
