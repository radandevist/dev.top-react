import { ReactNode } from "react";
import tw, { styled } from 'twin.macro';

type Props = {
  children: ReactNode,
  isLoading: boolean,
}

const LoadingController = ({ children, isLoading }: Props) => (
  <Controller isLoading={isLoading}>{children}</Controller>
);

const Controller = styled.div<{ isLoading: boolean }>`
  ${({ isLoading }) => isLoading && tw`pointer-events-none opacity-60`}
`;

export default LoadingController;
