const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const urlLoader = require.resolve('url-loader');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.tsx')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[userName].[hash].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.hbs')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[hash].js',
            minChunks(module) {
                return module.context
                    && module.context.indexOf('node_modules') >= 0;
            }
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: [
            'node_modules',
            'src'
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'babel-loader',
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                loader: urlLoader,
                options: {
                    limit: 10000,
                    name: '[userName].[hash:8].[ext]'
                }
            }
        ]
    }
};
