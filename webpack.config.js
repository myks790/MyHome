const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: {
        'public/MyHomeApp': './src/main/javascripts/public/MyHomeApp.js'
    },

    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },

    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)\/(?!(bootstrap)\/).*/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }]
            },
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules)\/(?!(bootstrap|react-summernote|normalize\.css)\/).*/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules\/(?!(bootstrap|react-summernote)\/).*/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 20 * 1024,
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
};