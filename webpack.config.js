const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        // publicPath: '/build/public'
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
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //       fallback: "style-loader",
            //       use: [{
            //           loader: "css-loader",
            //           options: {importLoaders: 1}
            //       },
            //        {
            //            loader: 'postcss-loader',
            //            options: {plugins: [autoprefixer()]}
            //         },
            //     ]
            //     })
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new ExtractTextPlugin({
        //     filename: "[name].css"
        // }),
      ],
      
   
}