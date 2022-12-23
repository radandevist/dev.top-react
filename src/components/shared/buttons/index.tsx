import tw, { styled } from "twin.macro";
import { Link} from "react-router-dom";

// relative
const baseStyles = tw`
p-2 rounded-md outline-none no-underline cursor-pointer text-center
hover:(underline)`

const variantStyles = {
  discrete: tw`
    bg-transparent text-gray-800
    hover:(bg-indigo-700/10 text-indigo-700)
  `,
  solid: tw`bg-indigo-700 text-white border border-indigo-700 hover:bg-transparent`,
  outlined: tw`border border-indigo-700 text-indigo-700 hover:(bg-indigo-700 text-white)`,
}

type BtnOptions = { variant?: keyof typeof variantStyles };

export const Btn = styled.button<BtnOptions>(() => [
  baseStyles,
  ({ variant = "discrete" }) => variantStyles[variant]
])

export const BtnLink = styled(Link)<BtnOptions>(() => [
  baseStyles,
  ({ variant = "discrete" }) => variantStyles[variant]
])