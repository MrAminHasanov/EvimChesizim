export type BuildMode = 'development' | 'production';
export type Paths = Record<'indexJsx' | 'build' | 'html', string>

export interface Options {
  mode: BuildMode;
  paths: Paths;
  isDev: boolean;
  isProd: boolean;
  port: number;
}