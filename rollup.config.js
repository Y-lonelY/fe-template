import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: false,
    },
  ],
  plugins: [external(), url(), resolve(), typescript(), commonjs()],
}