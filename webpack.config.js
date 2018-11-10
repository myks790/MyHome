const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: {
        'public/MyHomeApp': './src/main/javascripts/public/MyHomeApp.js',
        'admin/AdminApp': './src/main/javascripts/admin/AdminApp.js',
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
                exclude: /(node_modules)/,
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
                exclude: /(node_modules)\/(?!(bootstrap|normalize\.css)\/).*/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],
};