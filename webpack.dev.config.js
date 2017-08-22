const path = require("path");
var webpack = require('webpack');
module.exports = {
    devtool: "inline-source-map",
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'babel-polyfill',
        './src/js/main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        hot: true,
        publicPath: "/",
        historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.jsx$/,
                loader: 'eslint-loader',
                options: {
                    fix: false
                },
                exclude: /(node_modules)/
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loaders: [{
                    loader: "style-loader"
                },
                    {
                        loader: "css-loader"
                    }]
            }
        ]
    }
};