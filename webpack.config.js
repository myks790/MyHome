const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode : devMode ? 'development' : 'production',
    entry: "./src/main/javascripts/MyHomeApp.js",

    output: {
        path: path.resolve(__dirname, "src/main/resources/static/"),
        filename: "js/MyHomeApp.js",
    },

    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
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
            filename: "css/style.css"
        })
    ],
};