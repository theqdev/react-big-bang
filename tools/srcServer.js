// This file configures the development web server
// which supports hot reloading and synchronized testing.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev'; // Ensure this is your webpack config file

const bundler = webpack(config);

// Run BrowserSync and use middleware for Hot Module Replacement
browserSync({
  port: 3000,
  ui: {
    port: 3001,
  },
  server: {
    baseDir: 'src',

    middleware: [
      historyApiFallback(), // Handles client-side routing

      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath, // Public path from webpack config
        stats: 'minimal', // Use 'minimal' or another preset instead of noInfo/quiet
        writeToDisk: false, // Ensure files are not written to disk
      }),

      webpackHotMiddleware(bundler, {
        log: false, // Set to false to reduce the noise in your console
        path: '/__webpack_hmr', // The path which the middleware serves the event stream on
        heartbeat: 2000, // Ping interval to keep the connection alive
      }),
    ],
  },

  files: [
    'src/*.html', // Watch .html files in the src directory
  ],
});
