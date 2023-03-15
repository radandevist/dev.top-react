import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  plugins: [
    react({
      babel: {
        // presets: [
        //   "@babel/preset-react",
        //   "@emotion/babel-preset-css-prop"
        // ],
        plugins: [
          'babel-plugin-macros',
          'babel-plugin-styled-components',
          // [
          //   '@emotion/babel-plugin-jsx-pragmatic',
          //   {
          //     export: 'jsx',
          //     import: '__cssprop',
          //     module: '@emotion/react',
          //   },
          // ],
          // [
          //   '@babel/plugin-transform-react-jsx',
          //   { pragma: '__cssprop' },
          //   'twin.macro',
          // ],
        ],
      },
    }),
    // macrosPlugin(),
  ]
})
