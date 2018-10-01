const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");

module.exports = {
  // Changed the entry point to a .tsx file
  entry: "./src/index.tsx",
  // Enable sourcemaps for debugging Webpack's output
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [{
        module: "react",
        entry: "umd/react.development.js",
        global: "React",
      }, {
        module: "react-dom",
        entry: "umd/react-dom.development.js",
        global: "ReactDOM",
      }]
    })
  ]
}