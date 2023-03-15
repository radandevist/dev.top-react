import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    // WebkitTapHighlightColor: theme`colors.purple.500`,
    // backgroundColor: theme`colors.gray.200`,
    ...tw`antialiased`,
  },
})

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)