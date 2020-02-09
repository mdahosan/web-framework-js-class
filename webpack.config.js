// entry:'./src/index.js',
// filename: 'bundle.js'
// arrow_functions: './src/arrow-function.js',

const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
        arrow_function: './src/arrow-function.js',
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
