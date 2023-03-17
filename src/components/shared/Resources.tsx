import { nanoid } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { RiSettingsLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import tw, { styled } from 'twin.macro';
import tw from 'twin.macro';
import styled from 'styled-components';
// import styledOriginal from "styled-components";
// import { selectCurrentUser } from '../../core/features/auth/authSlice';
// import {
//   useGetNumTagsQuery,
//   useLazyGetFollowingTagsQuery,
// } from '../../core/features/tags/tagsApiSlice';
// import useRequireAuth from '../../hooks/useRequireAuth';
import Hashtag from '../shared/Hashtag';

import image1 from "../../assets/images/home.png"
import image2 from "../../assets/images/reading.png"
import image3 from "../../assets/images/tags.png"
import image4 from "../../assets/images/faq.png"
import image5 from "../../assets/images/about.png"
import image6 from "../../assets/images/chat.png"
import image7 from "../../assets/images/code-of-conduct.png"
import image8 from "../../assets/images/privacy-policy.png"
import image9 from "../../assets/images/terms-of-use.png"
import Social from "./Social";

type Props = {
  saved: boolean;
}

const Resources = ({ saved }: Props) => {
  const navigate = useNavigate();
  // const { isAuthed } = useRequireAuth();
  // const { id: userId } = useSelector(selectCurrentUser);
  // const [trigger, { data: followingTags }] = useLazyGetFollowingTagsQuery();
  // const { data: tags } = useGetNumTagsQuery(null, { refetchOnMountOrArgChange: true });

  // useEffect(() => {
  //   if (isAuthed) trigger({ userId });
  // }, [userId]);

  const isAuthed = false;
  const followingTags: any[] = [];
  const tags: any[] = [];

  return (
    <Wrapper>
      {!isAuthed && (
        <DevCommunity>
          <DevHeading>
            <span>DEV Community</span> is a community of 861,806 amazing developers
          </DevHeading>
          <DevDesc>
            We're a place where coders share, stay up-to-date and grow their careers.
          </DevDesc>
          <Buttons>
            <SignUp>Create account</SignUp>
            <Login>Log in</Login>
          </Buttons>
        </DevCommunity>
      )}
      <PublicLinks>
        <Link to='/'>
          <LinkWrapper>
            <Image width="24px" src={image1} />
            Home
          </LinkWrapper>
        </Link>

        <Link to={!saved ? 'reading-list' : ''}>
          <LinkWrapper>
            <Image width="24px" src={image2} />
            Reading List
          </LinkWrapper>
        </Link>

        <Link to='tags'>
          <LinkWrapper>
            <Image width="24px" src={image3} />
            Tags
          </LinkWrapper>
        </Link>
        <Link to=''>
          <LinkWrapper>
            <Image width="24px" src={image4} />
            FAQ
          </LinkWrapper>
        </Link>
        <Link to=''>
          <LinkWrapper>
            <Image width="24px" src={image5} />
            About
          </LinkWrapper>
        </Link>
        <Link to=''>
          <LinkWrapper>
            <Image width="24px" src={image6} />
            Contact
          </LinkWrapper>
        </Link>
      </PublicLinks>
      <Social footer={false} />
      <OtherLinks>
        <Heading>Other</Heading>
        <Link to=''>
          <LinkWrapper>
            <Image width="24px" src={image7} />
            Code of Conduct
          </LinkWrapper>
        </Link>
        <Link to=''>
          <LinkWrapper>
            <Image width="24px" src={image8} />
            Privacy Policy
          </LinkWrapper>
        </Link>
        <Link to=''>
          <LinkWrapper>
            <Image width="24px" src={image9} />
            Terms of Use
          </LinkWrapper>
        </Link>
      </OtherLinks>
      <Tags>
        {isAuthed && followingTags?.length > 0 && (
          <>
            <Header>
              <TagsHeading>My Tags</TagsHeading>
              <Settings>
                <LinkWrapper>
                  <RiSettingsLine onClick={() => navigate('/customize')} />
                </LinkWrapper>
              </Settings>
            </Header>
            <SubscribedTags>
              {followingTags?.map(tag => (
                <Link key={nanoid()} to={`/tags/${tag.name}`}>
                  <LinkWrapper>
                    <Hashtag />
                    {tag.name}
                  </LinkWrapper>
                </Link>
              ))}
            </SubscribedTags>
          </>
        )}
        {(!isAuthed || !(followingTags?.length > 0)) && (
          <>
            {tags?.length > 0 && (
              <Header>
                <TagsHeading>Popular Tags</TagsHeading>
              </Header>
            )}
            <PopularTags>
              {tags?.map(tag => (
                <Link key={nanoid()} to={`/tags/${tag.name}`}>
                  <LinkWrapper>
                    <Hashtag />
                    {tag.name}
                  </LinkWrapper>
                </Link>
              ))}
            </PopularTags>
          </>
        )}
      </Tags>
    </Wrapper>
  );
};

const DevHeading = styled.h2`
  > span {
    ${tw`text-blue`}
  }
`;
const DevDesc = tw.p`text-darker-gray`;

const DevCommunity = styled.div`
  ${tw`bg-white py-6 px-4 rounded-md mb-4`}
  > *:not(:first-child) {
    ${tw`mt-4`}
  }
`;

const Buttons = tw.div`flex flex-col text-center gap-2`;

// const Login = ({ children, to }: { children: ReactNode, to: string }) => {
//   return (
//     <Link to={to} tw="w-full rounded-md text-black py-2 px-3 hover:(text-blue bg-light-blue)">{children}</Link>
//   )
// }
const Login = styled(Link).attrs({ to: "auth/login" })`
  ${tw`w-full rounded-md text-black py-2 px-3 hover:(text-blue bg-light-blue)`}
`;

const SignUp = styled(Link).attrs({ to: "auth/new" })`
  ${tw`w-full rounded-md border border-solid border-white py-2 px-3 text-blue bg-white border-blue hover:(text-white bg-blue border-blue)`}
`;

const SubscribedTags = styled.div``;

const PopularTags = styled.div``;

const Tags = styled.div``;

const Wrapper = tw.div`w-[40%]`;

const PublicLinks = styled.div``;

const OtherLinks = styled.div``;

const Image = styled.img``;

const Heading = tw.h3`text-black mt-3 mb-2 px-3`;

const Header = tw.div`mt-6 flex justify-between items-center`;

const TagsHeading = tw(Heading)`mt-0`;

const Settings = tw.div`cursor-pointer text-xl`;

const LinkWrapper = tw.div`flex justify-start items-center gap-2 rounded-md text-black p-3 hover:(text-blue bg-light-blue)`;

export default Resources;
