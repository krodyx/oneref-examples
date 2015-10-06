// webpack.config.js

var webpack = require('webpack');


module.exports = {
    entry: {
      todomvc: "./js/app.js"
    },
    output: {
        path: "./build/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(json)$/, loader: "json-loader" }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"]
    }
};