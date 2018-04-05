const path = require('path');


module.exports = {

    entry: './src/main.js',
    output: {
        filename: 'build.js',
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
                use:  ['style-loader', 'css-loader', 'sass-loader']            
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
    }
};