# vite-plugin-px-rem-vw


Integrate postcss plugin [pxtorem](https://github.com/cuth/postcss-pxtorem) and [pxtovw](https://github.com/lkxian888/postcss-px-to-viewport-8-plugin) in vite 


## Install

```sh
# pnpm
pnpm add -D vite-plugin-px-rem-vw
# yarn
yarn add -D vite-plugin-px-rem-vw
# npm
npm i -D vite-plugin-px-rem-vw
```

## Usage

```ts
// vite.config.js
import { defineConfig } from 'vite'
import pxToRemOrVwPlugin from "vite-plugin-px-rem-vw"

export default defineConfig({
  plugins: [
    pxToRemOrVwPlugin({
      type: 'rem',
      options: {
        rootValue: 20
      }
    }),
  ],
})
```

## Options
```js
  //pxtovw
  interface Vw {
    type: 'vw';
    options?: VwOptions;
  }
  //pxtorem
  interface Rem {
      type: 'rem';
      options?: RemOptions;
  }
  type Options = Vw | Rem;
```
