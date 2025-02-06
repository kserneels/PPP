const path = require('path');

module.exports = {
    mode: 'development',  // or 'production'
    entry: './src/index.js', // your entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/, // regex to match all .css files
                use: ['style-loader', 'css-loader'], // the loaders to use
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), // your public directory
        port: 8080,
    },
};
