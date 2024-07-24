import { Configuration } from "webpack";
import { Resolve } from "../types/configParams";
import { Options } from "../types/options";

export const buildResolve = (options: Options): Resolve => ({
  extensions: ['.tsx', '.ts', '.js'],
})