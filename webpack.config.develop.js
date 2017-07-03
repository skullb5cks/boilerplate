const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        sourceMapFilename: '[name].map'
    },
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ]
};
