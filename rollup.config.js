import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import json from '@rollup/plugin-json'
import svg from 'rollup-plugin-svg-import'
import { terser } from "rollup-plugin-terser"
import url from '@rollup/plugin-url'

import { defineConfig } from 'rollup'

const packageJson = require("./package.json");

const glob = require('glob')

// Collect all components
const components = glob
  .sync('./src/components/**/index.tsx')
  .reduce((acc, path) => {
    const entry = path.replace('/index.tsx', '/index').replace('./src/', '')
    acc[entry] = path
    return acc
  }, {})

// Collect all utilities
const utils = glob.sync('./src/util/**/index.tsx').reduce((acc, path) => {
  const entry = path.replace('/index.tsx', '/index').replace('./src/', '')
  acc[entry] = path
  return acc
}, {})

const theme = { 'Theme/index': './src/Theme/index.tsx' }

export default defineConfig({
  input: { ...components, ...theme, ...utils },
  output: 
    {
      file: packageJson.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    },
  external: ['react', 'react-is', 'react/jsx-runtime', 'react-dom', '@material-ui/core', '@mui'],
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
    url({
      include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.svg'],
    }),
    // Helps with things like default exports
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react-dom/index.js': ['createPortal']
      }
    }),
    svg(),
    terser()
  ]
})
