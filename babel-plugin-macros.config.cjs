module.exports = {
  twin: {
    config: "./tailwind.config.cjs",
    preset: 'styled-components',
  },
}

// module.exports = {
//   twin: {
//     styled: {
//       import: 'default',
//       from: 'styled-components/macro'
//     },
//     css: {
//       import: 'css',
//       from: 'styled-components/macro'
//     },
//     global: {
//       import: 'createGlobalStyle',
//       from: 'styled-components'
//     }
//   }
// }