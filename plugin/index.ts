import type {Plugin} from 'vite'
import postcssrc from 'postcss-load-config'
import pxToVw from 'postcss-px-to-viewport-8-plugin'
import pxToRem from 'postcss-pxtorem'


export interface Vw {
  type: 'vw',
  options?: VwOptions
}
export interface Rem {
  type: 'rem',
  options?: RemOptions
}

export type Options = Vw | Rem

function isObject(value: unknown): value is Record<string, any> {
  return Object.prototype.toString.call(value) === '[object Object]'
}


export default function pxToRemOrVwPlugin(opts: Options): Plugin {
  return {
    name: 'vite-plugin-px2remOrVw',
    config() {
      return {
        css: {}
      }
    },
    async configResolved(config) {
      // must be exist because defined in config hook
      const cssOptions = config.css!;
      let postCssOptions = cssOptions.postcss;

      const pluginInfo = opts.type === 'rem' ? pxToRem(opts.options) : pxToVw(opts.options)

      if(isObject(postCssOptions)) {

        postCssOptions.plugins = postCssOptions.plugins || []
        postCssOptions.plugins.push(pluginInfo)
      } else {

        const searchPath = typeof postCssOptions === 'string' ? postCssOptions : config.root
        //load postcss config
        try {
          const result = await postcssrc({}, searchPath)
          result.plugins.push(pluginInfo)
          cssOptions.postcss = result
        } catch (error) {
          //no found postcss config
          cssOptions.postcss = {
            plugins: [pluginInfo]
          }
        }
      }
    },
    transformIndexHtml() {
      if(opts.type === 'vw') {
        return
      }
      return [
        {
          tag: 'script',
          children: `
          !function(e,t){function n(){t.body?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);
          `,
          injectTo: 'head'
        }
      ]
    }

  }
}
