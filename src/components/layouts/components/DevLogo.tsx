
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const DevLogo = () => {
  return (
    <Anchor to="/">
      <Image src="/logo.png" alt="DEV Community 👩‍💻👨‍💻" />
    </Anchor>
  )
}

const Anchor = styled(Link)`max-w-[7.8125rem] inline-flex shrink-0 self-center items-center align-middle text-black no-underline leading-none outline-none tracking-tight cursor-pointer`

const Image = tw.img`max-w-full w-auto h-10 object-contain align-middle inline-block outline-none`