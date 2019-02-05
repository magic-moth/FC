const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${SRC_DIR}/app.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
  }
};