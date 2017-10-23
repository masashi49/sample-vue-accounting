const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.join(__dirname, 'www'),
    filename: './dist/js/bundle.js'
  },
  devServer: {
    contentBase: 'www',
    port: 4000,
    inline: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};