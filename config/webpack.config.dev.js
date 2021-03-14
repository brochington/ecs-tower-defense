const path = require('path');
const webpack = require('webpack');
const aliases = require('./aliases');

const babelLoaderConfig = {
  loader: 'babel-loader',
  options: {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      'react-hot-loader/babel'
    ],
    presets: [
      '@babel/preset-react',
      '@babel/typescript'
    ]
  }
};

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(process.cwd(), 'src/client/index.tsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/static/'
  },
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      ...aliases,
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.mjs', '.ts', '.tsx', '.wasm'],
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      include: path.join(process.cwd(), 'src/client'),
      use: [babelLoaderConfig]
    }, {
      test: /\.m?js$/,
      include: path.join(process.cwd(), 'src/client'),
      use: [babelLoaderConfig]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },       {
      test: /\.mdx?$/,
      use: [babelLoaderConfig, '@mdx-js/loader']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}