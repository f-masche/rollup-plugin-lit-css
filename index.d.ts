import { UglifyCSSOptions } from 'uglifycss'
interface LitCSSOptions {
  include: string[];
  exclude: string[];
  uglify: boolean | UglifyCSSOptions;
}

export function css(options: LitCSSOptions): {
  name: 'lit-css',
  transform: (css:string, id: string) => ({map: any, code: string})
}