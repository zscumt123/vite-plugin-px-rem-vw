import { defineConfig } from 'vite'
import pxToRemOrVwPlugin, {Vw,Rem} from 'vite-plugin-px-rem-vw'

const remOptions: Rem = {
  type: 'rem',
  options: {
    rootValue: 20
  }
}
const vwOptions: Vw = {
  type: 'vw',
  options: {
    viewportWidth: 375
  }
}
export default defineConfig({
  base: './',
  plugins:[
    pxToRemOrVwPlugin(vwOptions)],
})

