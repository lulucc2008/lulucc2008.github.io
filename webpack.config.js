var path = require('path');
var webpack = require('webpack');
//var autoprefixer = require('autoprefixer');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var CopyWebpackPlugin = require('copy-webpack-plugin');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: path.resolve('app'),
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('build/'),
        publicPath: '/public/assets/'
    },
    devServer: {
        contentBase: './',
        port: 7222
    },
    //postcss: [
    //    autoprefixer({
    //        browsers: [ 'last 2 version' ]
    //    })
    //],
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            _:'lodash'
        }),
        //new ExtractTextPlugin('[name].[hash].css', { disable: false }),
        //new CopyWebpackPlugin([ {
        //    from: __dirname + '/css'
        //}])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css!'
                //loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            },
            {
                test: /\.less$/,
                loader: "style!css!less",
                exclude: /node_modules/
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }
        ]
    }
}