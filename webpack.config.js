// const path = require('path');

// module.exports = {
//   // enntry file
//   entry: './src/index.js',
//   // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
//   output: {
//     path: path.resolve(__dirname, 'dist_howto/js'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include: [
//           path.resolve(__dirname, 'src/js')
//         ],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: ['@babel/plugin-proposal-class-properties']
//           }
//         }
//       }
//     ]
//   },
//   devtool: 'source-map',
//   // https://webpack.js.org/concepts/mode/#mode-development
//   mode: 'development'
// };

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8080;

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js'
  },
  module:{
    rules:[
      { // 첫번째 룰
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      { // 두번째 룰
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico' 파비콘은 준비가 되어있지 않아 주석처리합니다.
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true
  }
};