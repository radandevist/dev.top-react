import tw from 'twin.macro';
import route from '../../animations/route';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from "react";

const RouteWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper variants={route} initial='initial' animate='shown' exit='exit'>
      {children}
    </Wrapper>
  );
};

const Wrapper = tw(motion.div)`w-full`;

export default RouteWrapper;
