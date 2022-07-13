import { resolve } from './utils'
import { Configuration as WebpackConfiguration } from "webpack"
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server"
import HtmlWebpackPlugin from "html-webpack-plugin"

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  module: {
    rules: [
      // {
      //   test: /\.(jsx?|tsx?)$/,
      //   exclude: /node_modules/,
      //   use: 'babel-loader'
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/svg')],
        options: {
          symbolId: 'icon-[name]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[base]',
        },
        exclude: [resolve('src/assets/svg')],
      },
      // element-plus
      {
        test: /\.mjs$/,
        include: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
        type: 'javascript/auto',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 4000,
    open: true,
    hot: true,
    allowedHosts: 'all',
    compress: true, // 为所有服务启用gzip 压缩
  }
}

export default config