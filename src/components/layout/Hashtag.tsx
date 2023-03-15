import { HiOutlineHashtag } from 'react-icons/hi';
import tw, { styled } from 'twin.macro';

type Props = {
  large?: boolean;
}

const Hashtag = ({ large = false }: Props) => {
  return (
    <Wrapper large={large}>
      <HiOutlineHashtag />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ large: boolean }>`
  ${({ large }) => large && tw`text-2xl`}
  ${tw`[svg]:inline inline`}
`;

export default Hashtag;
