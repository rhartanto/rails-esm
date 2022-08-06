const path    = require("path")
const webpack = require("webpack")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    bundle: "./app/javascript/application_bundle.js",
    book_list: "./app/javascript/book_list.js",
    book_show: "./app/javascript/book_show.js",
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: "[name].map",
    path: path.resolve(__dirname, '..', '..', 'app/assets/builds'),
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
      BROWSER_SUPPORTS_HTML5: true
    })
  ]
}