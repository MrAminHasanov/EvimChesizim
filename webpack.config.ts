import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildMode, Options, Paths } from "./config/types/options";
import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";

export interface EnvVariables {
  mode: BuildMode;
  port?: number;
}

export default (env: EnvVariables): webpack.Configuration => {
  const paths: Paths = {
    indexJsx: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  };

  const options: Options = {
    isDev: env.mode === 'development',
    isProd: env.mode === 'production',
    mode: env.mode,
    port: env.port ?? 3000,
    paths
  };

  return buildWebpack(options);
};