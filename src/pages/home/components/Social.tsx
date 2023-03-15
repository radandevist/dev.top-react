import { ReactElement } from "react";
import { IconType } from "react-icons";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

type Props = {
  footer: boolean;
};

type LinkItem = {
  path: string;
  icon: ReactElement<IconType>;
};

const links: LinkItem[] = [
  {
    path: '//github.com/radandevist',
    icon: <AiFillGithub />,
  },
  {
    path: '//www.instagram.com/radandevist',
    icon: <AiFillInstagram />,
  },
  {
    path: '//www.linkedin.com/in/radandevist',
    icon: <AiFillLinkedin />,
  }
];

const Social = ({ footer }: Props) => {
  return (
    <Wrapper footer={footer}>
      {links.map(link => {
        return (
          <SocialLink key={link.path} to={link.path} target='_blank' footer={footer}>
            <IconWrapper>
              {link.icon}
            </IconWrapper>
          </SocialLink>
        )
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ footer: boolean }>`
  ${tw`py-3 flex [svg]:w-full [a]:w-full [&>*:first-child]:(rounded-tl-lg rounded-bl-lg) [&>*:last-child]:(rounded-tr-lg rounded-br-lg) hover:([&>*>*]:animate-bounce)`}
  ${({ footer }) => footer && tw`max-w-2xl mx-auto`}
`;

const IconWrapper = styled.div`
  ${tw`cursor-pointer w-full text-xl`};
`;

const SocialLink = styled(Link)<{ footer: boolean }>`
  ${tw`w-full cursor-pointer flex justify-start text-center gap-2 text-black p-3`}
  ${({ footer }) =>
    footer ? tw`hover:(text-white bg-blue)` : tw`rounded-md hover:(text-blue bg-light-blue)`}
`;

export default Social;
