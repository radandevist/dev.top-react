import { FC, PropsWithChildren } from "react";
import tw from 'twin.macro';

const Error: FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = tw.p`font-bold text-red mx-auto w-max`;

export default Error;
