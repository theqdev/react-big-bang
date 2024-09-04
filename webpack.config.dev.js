import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';

export default {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Automatically resolve these extensions
  },
  devtool: 'cheap-module-source-map', // Fastest option for dev while still providing good debugging
  entry: [
    './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js'), // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(), // React Fast Refresh plugin
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      favicon: 'src/Images/favicon.png',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', // Transpile modern JavaScript to ES5
                '@babel/preset-react', // Transpile JSX and other React features
              ],
              plugins: [
                'react-refresh/babel', // For React Fast Refresh
                '@babel/plugin-transform-react-constant-elements', // Optimization plugin for React
                'babel-plugin-transform-react-remove-prop-types', // Removes propTypes in production builds
                '@babel/plugin-transform-class-properties', // Enable class properties syntax
                '@babel/plugin-transform-object-rest-spread', // Enable object rest/spread syntax
              ],
            },
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
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
