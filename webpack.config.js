'use strict'; 
 
const path = require('path'); 
const autoprefixer = require('autoprefixer'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
 
module.exports = { 
  mode: 'development', 
  entry: path.resolve(__dirname, 'src', 'index.js'), 
    output: { 
      path: path.resolve(__dirname, 'client'), 
      filename: 'bundle.js', 
      clean: true, 
    }, 
  devServer: { 
    static: path.resolve(__dirname, 'client'), 
    port: 8080, 
    hot: true, 
  }, 
  plugins: [ 
    new HtmlWebpackPlugin({ template: './src/index.html' }), 
    new MiniCssExtractPlugin({ 
      // Customize the name of the output CSS file if needed 
      filename: 'style.css', 
    }), 
  ], 
  module: { 
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      { 
        test: /\.(scss)$/, 
        use: [ 
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          { 
            loader: 'postcss-loader', 
            options: { 
              postcssOptions: { 
                plugins: [autoprefixer], 
              }, 
            }, 
          }, 
          'sass-loader', 
        ], 
      }, 
      { 
        test: /\.(jsx||js)$/, 
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader', 
          options: { 
            presets: [ 
              '@babel/preset-env', // Перетворює сучасний JS код на старі версії, які розуміють браузери 
              '@babel/preset-react' // Перетворює JSX в JS 
            ], 
            "plugins": [ 
              "babel-plugin-react-require" 
            ] 
             
          } 
        } 
      } 
    ], 
     
  }, 
};