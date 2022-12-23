/// <reference path="./option.d.ts"/>
declare module 'postcss-px-to-viewport-8-plugin' {
  import type { Plugin } from 'postcss'
  const fn: (options?: VwOptions) => Plugin
  export default fn
}

declare module 'postcss-pxtorem' {  
  import type { Plugin } from 'postcss'
  const fn: (options?: RemOptions) => Plugin
  export default fn
}



