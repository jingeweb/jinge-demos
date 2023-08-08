/* eslint-env node */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { JingeComponentRule, JingeTemplateRule } = require('jinge-compiler');
const prod = 'PROD' in process.env;

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].[contenthash:8].js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  node: false,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: prod ? false : 'source-map',
  module: {
    rules: [
      JingeTemplateRule,
      {
        test: JingeComponentRule.test,
        use: [
          {
            loader: JingeComponentRule.use,
          },
          {
            loader: 'esbuild-loader',
            options: { loader: 'ts', target: 'es2020', charset: 'utf8' },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'esbuild-loader',
          options: { loader: 'ts', target: 'es2020', charset: 'utf8' },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
  ],
  ...(prod
    ? {
        optimization: {
          minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            '...',
            new CssMinimizerPlugin({
              minimizerOptions: {
                preset: [
                  'default',
                  {
                    discardComments: { removeAll: true },
                  },
                ],
              },
            }),
          ],
        },
      }
    : undefined),
  devServer: {
    static: __dirname,
    port: 9000,
    hot: false,
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
  },
};
