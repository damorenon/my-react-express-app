const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "app"), //main file, searches for index.js by default
  output: {
    //the bundled final file
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true, //For react router
  },
  module: {
    //How we want app to be compiled
    rules: [
      {
        test: /\.jsx?/, //regexp for files to be comiled
        loader: "babel-loader",
      },
    ],
  },
};
