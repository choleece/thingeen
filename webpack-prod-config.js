/**
 * Created by choleece on 2017/8/9.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: "/"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('pro')
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        openPage: './dist/index.html',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ],
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    }
};