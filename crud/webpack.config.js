const webpack = require("webpack");
module.exports = {
  entry: "./assets/js/index.jsx",
  output:{
    path: "./public/javascripts",
    filename: "crud.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/,
        query:{
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
