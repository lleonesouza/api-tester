const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/client.js',
        config: './src/client.js',
        newMethod: './src/client.js',
        newServer: './src/client.js',
        cron: './src/client.js',
        docker: './src/client.js',
    },
    output: {
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/env",
                            {
                              "useBuiltIns": "entry",
                              targets: {browsers: [
                                  '>1%',
                                  'not ie 11',
                                  'not op_mini all'
                                ]}
                            }
                          ], "@babel/react"
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'addWindow.html',
            template: './src/index.html',
            chunks: ['addWindow']
        }),
        new HtmlWebpackPlugin({
            filename: 'newMethod.html',
            template: './src/index.html',
            chunks: ['newMethod']
        }),
        new HtmlWebpackPlugin({
            filename: 'newServer.html',
            template: './src/index.html',
            chunks: ['newServer']
        }),
        new HtmlWebpackPlugin({
            filename: 'cron.html',
            template: './src/index.html',
            chunks: ['cron']
        }),
        new HtmlWebpackPlugin({
            filename: 'docker.html',
            template: './src/index.html',
            chunks: ['docker']
        })
      ],
}