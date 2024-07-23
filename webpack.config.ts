import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'development' | 'production';

interface EnvVariables {
  mode: Mode
}

export default (env: EnvVariables): webpack.Configuration => {
  const isDev = env.mode === 'development';
  return ({
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      isDev && new webpack.ProgressPlugin()
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? {
      port: 5000,
      open: true
    } : undefined
  })
};