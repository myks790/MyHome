const path = require('path');


module.exports = {
    mode: "development",
    entry: "./src/main/javascripts/MyHomeApp.js",

    output: {
        path: path.resolve(__dirname, "src/main/resources/static"),
        filename: "MyHomeApp.js",
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
            }
        ]
    }
};