
declare module 'postcss-px-to-viewport-8-plugin' {
  import type { Plugin } from 'postcss'
  export interface VwOptions {
    unitToConvert?: string,
    viewportWidth?: number,
    unitPrecision?: number,
    propList?:Array<string>,
    viewportUnit?: string,
    fontViewportUnit?: string,
    selectorBlackList?: Array<string | RegExp>,
    minPixelValue?: number,
    mediaQuery?: boolean,
    replace?: boolean,
    exclude?: RegExp | Array<RegExp>,
    landscape?: boolean,
    landscapeUnit?: string,
    landscapeWidth?: number
  }
  const fn: (options?: VwOptions) => Plugin
  export default fn
}

declare module 'postcss-pxtorem' {
  import type { Plugin } from 'postcss'
  export interface RemOptions {
    rootValue?: number,
    unitPrecision?: number,
    propList?: Array<string>,
    selectorBlackList?: Array<string | RegExp>,
    replace?: boolean,
    mediaQuery?: boolean,
    minPixelValue?: number,
    exclude?: string | RegExp | ((file:string) => boolean)
  }
  const fn: (options?: RemOptions) => Plugin
  export default fn
}
