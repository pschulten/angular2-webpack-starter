// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';
var HMR = process.argv.join('').indexOf('hot') > -1;

var ProvidePlugin = require('webpack/lib/ProvidePlugin');
const autoprefixer = require('autoprefixer');


var metadata = {
  title: 'Kartoffelsalat deluxe',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV,
  HMR: HMR
};
/*
 * Config
 */
module.exports = helpers.validate({
  // static data for index.html
  metadata: metadata,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,
  // cache: false,
  postcss: [autoprefixer],

  // our angular app
  entry: { 'polyfills': './src/polyfills.ts', 'main': './src/main.ts' },

  // Config for our build files
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['', '.ts', '.async.ts', '.js', '.css', '.scss']
  },

  module: {
    preLoaders: [
      // { test: /\.ts$/, loader: 'tslint-loader', exclude: [ helpers.root('node_modules') ] },
      // TODO(gdi2290): `exclude: [ helpers.root('node_modules/rxjs') ]` fixed with rxjs 5 beta.3 release
      { test: /\.js$/, loader: "source-map-loader", exclude: [ helpers.root('node_modules/rxjs') ] }
    ],
    loaders: [
      // Support for .ts files.
      { test: /\.ts$/, loader: 'ts-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader', exclude: [ helpers.root('src/index.html') ] },

      //{ test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /.scss$/, loaders: ['raw-loader','sass-loader'] },
      

      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }

      // if you add a loader include the resolve file extension above
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: 'polyfills', filename: 'polyfills.bundle.js', minChunks: Infinity }),
    // static assets
    new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]),
    // generating html
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    // replace
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV),
        'HMR': HMR
      }
    }),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether"
    })
  ],

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  // our Webpack Development Server config
  devServer: {
    port: metadata.port,
    host: metadata.host,
    // contentBase: 'src/',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },
  // we need this due to problems with es6-shim
  node: {global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false}
});
