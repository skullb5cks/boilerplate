const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './src/index.js'
    ],
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        sourceMapFilename: '[name].map'
    },
    devServer: {
        // hot: true, // Tell the dev-server we're using HMR
        hotOnly: true,
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ]
};
