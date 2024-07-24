import { Configuration } from "webpack";
import { Options } from "../types/options";
import { DevServer } from "../types/configParams";

export const buildDevServer = ({ isDev, port }: Options): DevServer => {
  if (isDev) {
    return ({
      port: port,
      open: true
    })
  }
}