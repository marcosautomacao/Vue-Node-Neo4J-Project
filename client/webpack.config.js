const path = require('path')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
        { test: /\.vue$/, include: /src/, loader: 'vue-loader', options: { loaders: { js: 'awesome-typescript-loader?silent=true' } } }
    ]
},
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
}