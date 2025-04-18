const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require("path");

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: true
    },
    output: {
        publicPath: "http://localhost:3001/",
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.svg']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'remote',
            filename: 'remoteEntry.js',
            exposes: {
                './store': './src/store',
                './App': './src/App.tsx'
            },
            shared: {
                react: { singleton: true, eager: true, requiredVersion: '^17.0.2' },
                'react-dom': { singleton: true, requiredVersion: '^17.0.2' },
                '@reduxjs/toolkit': { singleton: true, eager: true },
                'react-redux': { singleton: true, eager: true },
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/manifest.json', to: 'manifest.json' }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            templateParameters: {
                PUBLIC_URL: 'http://localhost:3001'
            }
        })
    ]
};