const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/windows/main/client.js',
        config: './src/windows/wconfig/wconfig/client.js',
        docker: './src/windows/wconfig/wdocker/client.js',
        context: './src/windows/wconfig/context/client.js',
        newMethod: './src/windows/newMethod/client.js',
        newServer: './src/windows/newServer/client.js',
        cron: './src/windows/wcron/client.js',
        author: './src/windows/wdocker/author/client.js',
        donate: './src/windows/wdocker/donate/client.js',
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