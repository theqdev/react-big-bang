import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
};

export default {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Automatically resolve these extensions
  },
  devtool: 'source-map', // Generate source maps for better debugging in production
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js', // Use contenthash for better caching
    clean: true, // Clean the output directory before emit
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Use contenthash for CSS as well
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/Images/favicon.png',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Optimize chunk merging
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // Use babel-loader to transpile JS/JSX files
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        type: 'asset/resource', // Handle eot files as resources
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: 'asset/resource', // Handle woff files as resources
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        type: 'asset/resource', // Handle ttf files as resources
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource', // Handle svg files as resources
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        type: 'asset/resource', // Handle image files as resources
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')(), // Automatically add vendor prefixes
                ],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'), // Use Dart Sass instead of node-sass
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src', 'scss')],
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
