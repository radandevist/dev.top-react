import { ComponentProps, MouseEventHandler } from "react";
import tw, { styled } from 'twin.macro';

type Props = {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Backdrop = ({ onClick }: Props) => {
  return <Wrapper onClick={onClick} />;
};

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  ${tw`w-full h-full fixed inset-0 z-40`}
`;

export default Backdrop;
