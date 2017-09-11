'use strict'

const debug = process.env.NODE_ENV !== 'production'

const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin(path.join('css', '[name].bundle.css'))

// The declaration below resolves a module not found error in ../~/xlsx/dist/cpexcel.js
// In the directory ./cptable; Link to bug report: github.com/SheetJS/js-xlsx/issues/285
const externals = [{'./cptable': 'var cptable'}]

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: [
    'jquery',
    path.join(__dirname, 'src', 'index.js'),
    path.join(__dirname, 'src', 'scss', 'main.scss')
  ],
  target: 'electron',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],
  externals: debug ? externals : externals.concat([nodeExternals({modulesFromFile: true})]),
  devServer: debug ? {
    inline: true,
    port: 3333,
    contentBase: 'src/static/'
  } : {},
  output: {
    path: path.join(__dirname, 'src', 'static'),
    filename: path.join('js', 'bundle.js')
  },
  // This also resolves fs module error not found error
  // In the directory ods.js; Link to bug report: github.com/SheetJS/js-xlsx/issues/285
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [{
      test: /\.json$/, loader: 'json'
    }, {
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
      }
    }, {
      test: /\.(sass|scss$)/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192&publicPath=../'
    }],
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader' // inject CSS to page
    }, {
      loader: 'css-loader' // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ]
        }
      }
    }, {
      loader: 'sass-loader' // compiles SASS to CSS
    }],
    // Same error got resolved here with jszip.js
    // Link to bug report: github.com/SheetJS/js-xlsx/issues/285
    noParse: [/jszip.js$/]
  },
  plugins: debug
    ? [
      extractCSS,
      new webpack.HotModuleReplacementPlugin()
    ]
    : [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      extractCSS,
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        mangle: true,
        sourcemap: false,
        beautify: false,
        dead_code: true
      })
    ]
}
