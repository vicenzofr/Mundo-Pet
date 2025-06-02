const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin =  require("copy-webpack-plugin")





//   const path = require('path');

//      module.exports = {
//        mode: 'development', // Or 'production' or 'none'
//        entry: './src/img/js/index.js',
//        output: {
//          filename: 'bundle.js',
//          path: path.resolve(__dirname, 'dist'),
//        },
//      };


module.exports = {
    target: "web",
    mode: "development",

    // entry: {
    //     entry: path.resolve(__dirname, "src", "img", "main.js"),
    //     index: path.resolve(__dirname, "src", "img", "js", "index.js"),
    // },

    entry: path.resolve(__dirname, "src", "img", "main.js"),
     entry: path.resolve(__dirname, "src", "img", " js", "index.js"),


    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        static:{
            directory: path.join(__dirname, "dist")
        },
        port: 3000, 
        open: true, 
        liveReload: true,
    },

    plugins:[ 
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        }),

        new CopyWebpackPlugin({
            patterns:[ 
                {
                    from: path.resolve(__dirname, "src","img", "icon"),
                    to: path.resolve(__dirname, "dist", "src","img", "icon"),
                }
            ]
        })

    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],    
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

}