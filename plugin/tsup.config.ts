import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  clean: true,
  dts: {
    banner: '/// <reference path="../option.d.ts"/>'
  },
  format: ['cjs' ,'esm']

})
