import { AnimatePresence, motion } from 'framer-motion';
import { IoIosClose } from 'react-icons/io';
import tw, { styled } from 'twin.macro';
import mobileMenu from '../../animations/mobileMenu';
import Backdrop from '../shared/Backdrop';
import Resources from '../shared/Resources';

type Props = {
  toggleMobileMenu: (value?: boolean) => void; 
}

const MobileMenu = ({ toggleMobileMenu }: Props) => {
  return (
    <>
      <Backdrop onClick={() => toggleMobileMenu()} />
      <AnimatePresence /* exitBeforeEnter */ mode='wait'>
        <Wrapper variants={mobileMenu} initial='initial' animate='shown' exit='exit'>
          <Menu>
            <Heading>DEV Community</Heading>
            <CloseIcon onClick={() => toggleMobileMenu()}>
              <IoIosClose />
            </CloseIcon>
          </Menu>
          <Resources saved={false} />
        </Wrapper>
      </AnimatePresence>
    </>
  );
};

const Wrapper = styled(motion.aside)`
  ${tw`w-72 bg-white h-screen z-50 absolute overflow-y-scroll inset-0 px-sm shadow-md`}
  > div {
    ${tw`w-full`};
  }
`;

const Heading = tw.h2``;

const Menu = tw.div`flex justify-between items-center py-4`;

const CloseIcon = styled.div`
  ${tw`rounded-md text-black hover:(text-blue bg-light-blue) cursor-pointer`}
  svg {
    font-size: 2.25rem;
  }
`;

export default MobileMenu;
