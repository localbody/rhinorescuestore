const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    index_catalog: path.resolve(__dirname, './src/index_catalog.js'),
    index_product: path.resolve(__dirname, './src/index_product.js'),
    index_blog: path.resolve(__dirname, './src/index_blog.js'),
    index_cart: path.resolve(__dirname, './src/index_cart.js'),
    index_article: path.resolve(__dirname, './src/index_article.js'),
    index_contact: path.resolve(__dirname, './src/index_contact.js'),
    index_page: path.resolve(__dirname, './src/index_page.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/catalog.html'),
      filename: 'catalog.html',
      chunks: ['index_catalog']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/blog.html'),
      filename: 'blog.html',
      chunks: ['index_blog']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/cart.html'),
      filename: 'cart.html',
      chunks: ['index_cart']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/product.html'),
      filename: 'product.html',
      chunks: ['index_product']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/article.html'),
      filename: 'article.html',
      chunks: ['index_article']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/contact.html'),
      filename: 'contact.html',
      chunks: ['index_contact']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/page.html'),
      filename: 'page.html',
      chunks: ['index_page']
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/images", to: "images"
        }
      ]
    })
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // картинки
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      //Шрифты и svg
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      //SCSS to CSS
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // HTML Templates with html-loader
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ]
  },

  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    //contentBase: path.resolve(__dirname, './dist'),
    open: true, compress: true, hot: true, port: 8080,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          chunks: 'all'
        }
      }
    }
  }
}