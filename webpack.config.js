const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [            
            
            {//ES6->ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }               
            },

            {//SCSS->CSS                
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
                   
            },

            {//IMG -> public/img
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 40,
                        name: 'img/[name].[ext]'
                    }
                }            
            }

        ]
    },

    plugins: [
        new ExtractTextPlugin('css/styles.css') //beta webpack@4
    ]


};