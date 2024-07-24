import webpack from "webpack";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { Options } from "../types/options";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { buildDevServer } from "./buildDevServer";

export const buildWebpack = (options: Options): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return ({
    mode: mode ?? 'development',
    entry: paths.indexJsx,
    output: {
      path: paths.build,
      filename: 'bundle.[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolve(options),
    devtool: isDev && 'inline-source-map',
    devServer: buildDevServer(options)
  })
}