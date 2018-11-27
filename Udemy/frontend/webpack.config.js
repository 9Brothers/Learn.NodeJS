const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue.common.js' para webpack 1
    },
    extensions: [ '*', '.tsx', '.ts', '.js', '.json', '.vue' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}