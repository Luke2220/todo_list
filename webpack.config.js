const path = require('path');

module.exports = {
    entry: './src/todo.html',
    output: {
        filename :'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
        ],
    },
};