const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
});

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias : {
      "@components": path.resolve(__dirname, 'src/components'),
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@config": path.resolve(__dirname, 'src/config'),
      "@helpers": path.resolve(__dirname, 'src/helpers'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    static: path.join(__dirname, "build"),
    port: 4000,
  },
  plugins: [htmlPlugin],
};
