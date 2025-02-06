const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Your main JS file
    output: {
        filename: 'bundle.js',  // Output bundle file
        path: path.resolve(__dirname, 'dist'),  // Output folder
    },
    mode: 'development', // Development mode for debugging
    devtool: 'source-map',  // Source maps for debugging
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Use Babel to transpile JavaScript
                    options: {
                        presets: ['@babel/preset-env'],  // Ensure compatibility with older browsers
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Handle CSS files
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Template for generating HTML
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),  // Directory to serve static files
        },
        port: 3000,
        open: true,
    },
};
