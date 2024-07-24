import { Configuration, ModuleOptions } from "webpack";

export type Plugins = Configuration['plugins']
export type DevServer = Configuration['devServer'];
export type Resolve = Configuration['resolve'];

export type ModuleRules = ModuleOptions['rules']; 