import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import clear from 'rollup-plugin-clear'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

// TODO: change [filename] to your app name
const useBabelPlugin = function (options = {}, minified) {
  return getBabelOutputPlugin({
    presets: [['@babel/preset-env', options]],
    filename: '[filename]',
    minified
  })
}

const esbuildPlugin = esbuild({
  sourceMap: true,
  target: 'es2015'
})

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es',
        plugins: [useBabelPlugin()]
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        plugins: [useBabelPlugin()]
      },
      {
        file: 'dist/index.umd.js',
        plugins: [useBabelPlugin({ modules: 'umd' })]
      },
      {
        file: 'dist/index.umd.min.js',
        plugins: [useBabelPlugin({ modules: 'umd' }, true)]
      }
    ],
    plugins: [
      clear({
        targets: ['./dist']
      }),
      esbuildPlugin
    ]
  },
  {
    input: './src/index.ts',
    output: [{ file: 'types/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
]
