const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
    entry: path.join(__dirname, '/src/index.tsx'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            favicon: path.join(__dirname, '/src/favicon.ico'),
        }),
    ],
}
