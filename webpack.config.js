const path = require('path');

const config = {
    entry: './app/assets/frontend/main.jsx',
    output: {

        path: __dirname + '/app/assets/javascripts',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                        presets: ['react', 'es2015']
                    }
                }],
                exclude: /node_modules/,
            }
        ]
    }
};

module.exports = config;