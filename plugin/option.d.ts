declare interface VwOptions {
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
declare interface RemOptions {
  rootValue?: number,
  unitPrecision?: number,
  propList?: Array<string>,
  selectorBlackList?: Array<string | RegExp>,
  replace?: boolean,
  mediaQuery?: boolean,
  minPixelValue?: number,
  exclude?: string | RegExp | ((file:string) => boolean)
}
