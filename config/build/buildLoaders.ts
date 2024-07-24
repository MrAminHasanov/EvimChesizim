import webpack, { Configuration, ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleRules } from "../types/configParams";
import { Options } from "../types/options";

export const buildLoaders = ({ isDev }: Options): ModuleRules => {
  const moduleCssLoader = {
    loader: 'css-loader',
    options: {
      modules:{
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      }
    }
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev
        ? 'style-loader'
        : MiniCssExtractPlugin.loader,
      moduleCssLoader,
      'sass-loader'
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return ([scssLoader, tsLoader])
}
