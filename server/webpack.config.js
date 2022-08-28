const nodeExternals = require('webpack-node-externals')

const path = require('path')

module.exports = {
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'server.bundle.js',
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
}
