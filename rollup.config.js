import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import json from '@rollup/plugin-json'
import url from 'rollup-plugin-url'

import { defineConfig } from 'rollup'

const glob = require('glob')

// Collect all components
const components = glob
  .sync('./src/components/**/index.tsx')
  .reduce((acc, path) => {
    const entry = path.replace('/index.tsx', '/index').replace('./src/', '') //.replace('./src/components/', '')
    acc[entry] = path
    return acc
  }, {})

// Collect all utilities
const utils = glob.sync('./src/util/**/index.tsx').reduce((acc, path) => {
  const entry = path.replace('/index.tsx', '/index').replace('./src/', '') //.replace('./src/components/', '')
  acc[entry] = path
  return acc
}, {})

const theme = { 'Theme/index': './src/Theme/index.tsx' }

export default defineConfig({
  input: { ...components, ...theme, ...utils },
  output: {
    dir: './dist',
    format: 'es',
    exports: 'named',
    sourcemap: true
  },
  external: ['react', 'react-is', 'react/jsx-runtime'],
  plugins: [
    // Allow loading json files
    json(),
    // Externalize peer dependencies
    external(),
    // Use Node's resolution algorithm
    resolve(),
    // Allow typescript
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['**/*.tests.tsx', '**/*.stories.*'],
      clean: true
    }),
    // Helps with things like default exports
    commonjs({
      include: ['node_modules/**'],
      namedExports: {}
    }),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity
    })
  ]
})
