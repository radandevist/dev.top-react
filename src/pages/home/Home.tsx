import tw, { styled } from "twin.macro"
import { Btn, BtnLink } from "../../components/shared/buttons";
import { Link, useLocation } from "react-router-dom";
import { FC, ReactElement } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { RiBookmarkLine, RiHeart2Line } from "react-icons/ri";
import { IconType } from "react-icons";

const navLinks = [
  {
    label: "Relevant",
    to: "/"
  },
  {
    label: "Latest",
    to: "/latest"
  },
  {
    label: "Top",
    to: "/top/week"
  }
]

export const Home = () => {
  const location = useLocation();

  return (
    <>
      {/* <h1 tw="bg-red-500">This is the home content</h1> */}
      <div tw="text-base w-full max-w-screen-xl grid gap-2 p-0 mx-auto grid-cols-12">
        {/* Sidebar here */}

        {/* Posts feed here */}
        <main tw="col-span-12">
          <header tw="px-3 p-2 text-lg">
            <nav tw="-mx-3 md:mx-0 flex items-center justify-between">
              <ul tw="flex -my-1 py-1 flex-nowrap">
                {navLinks.map(({ label, to }) => {
                  return (
                    <li key={nanoid()}>
                      <HeaderLink to={to} active={location.pathname === to} label={label} />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>

          <div>
            <FeedPostItem />
          </div>
        </main>
      </div>
    </>
  )
}

type HeaderLinkProps = {
  label: string;
  to: string;
  active: boolean;
};

const HeaderLink: FC<HeaderLinkProps> = ({
  label,
  to,
  active
}) => {
  return (
    <BtnLink
      to={to}
      // tw={"inline-block !no-underline !px-3 !pt-1.5 hover:(!bg-white)"}
      css={[
        tw`inline-block !no-underline !px-3 !pt-1.5 hover:(!bg-white)`,
        active && tw`font-semibold`
      ]}
    >
      {label}
    </BtnLink>
  )
}

const FeedPostItem = () => {
  return (
    <article tw="shadow-crayon cursor-pointer mb-2 relative bg-white rounded-md">
      {/* <Link to="/article" tw="pointer-events-none opacity-0 absolute top-0 right-0 bottom-0 left-0">View this awesome article</Link> */}
      <PostLinkCover to="/article" />
      <div tw="border-none">
        <PostCoverWrapper>
          <PostCoverLink to="/article">
            <PostCoverImage
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--1Q02Y2vx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m65orue8y24oj8ht56mu.png"
              alt="ok"
              // srcset=""
            />
          </PostCoverLink>
        </PostCoverWrapper>
        <main tw="p-4 pb-3">
          <div tw="flex items-center justify-between mb-3">
            <div tw="flex items-center leading-tight text-sm">
              <div tw="relative mr-2">
                <Link to="/profile" tw="w-8 h-8 inline-block relative bg-gray-700 overflow-hidden align-middle shrink-0 rounded-full">
                  <img
                    src="/avatar.png"
                    alt="ok"
                    tw="w-full h-full inline-block align-bottom rounded-full"
                  />
                </Link>
              </div>
              <div>
              <div>
                <Link to="/profile" tw="font-medium text-gray-700 hover:text-gray-900 text-sm">Andrianarisoa Daniel</Link>
              </div>
              <time dateTime="2022-12-24" tw="text-gray-700 text-xs">Dec 22</time>
            </div>
            </div>
          </div>
          <div>
            <h3 tw="text-xl text-gray-900 leading-tight [word-break:break-word] mb-1 font-bold sm:(text-3xl)">
              <DevLink to="article">
                <span>The Four Horsemen of Software Complexity — Architecture Decision Records to the Rescue</span>
              </DevLink>
            </h3>
            <div tw="mb-2 -ml-1 text-sm flex flex-wrap gap-px text-gray-800">
              <PostTag to="/t/mytag">#My Tag</PostTag>
            </div>
            <div tw="flex justify-between items-center text-sm leading-tight font-[400]">
              <div tw="flex -ml-2">
                <ReactionBtnLink to="/article" count={22} type="Reactions" Icon={RiHeart2Line} />
                <ReactionBtnLink to="/article" count={10} type="Comments" Icon={RiHeart2Line} />
              </div>
              <div tw="flex items-center">
                <small tw="mr-2 text-gray-700">5 min read</small>
                <Btn>
                  <RiBookmarkLine size={24} tw="p-0.5" />
                </Btn>
              </div>
            </div>
          </div>
        </main>
      </div>
    </article>
  )
}

const DevLink = tw(Link)`hover:text-indigo-700`;

const PostLinkCover = tw(Link)`pointer-events-none opacity-0 absolute top-0 right-0 bottom-0 left-0`

const postCoverBaseStyles = tw`pt-0 pb-0 h-full w-full object-scale-down rounded-t-md aspect-[auto_650/273]`;
const PostCoverWrapper = styled.div(() => [postCoverBaseStyles, tw`relative`]);
const PostCoverLink = styled(Link)(() => [postCoverBaseStyles, tw`inline-block`]);
const PostCoverImage = styled.img(() => [postCoverBaseStyles, tw`bg-gray-400`])

const PostTag = tw(Link)`bg-transparent text-gray-800 rounded-md inline-flex items-center whitespace-nowrap flex-nowrap transition-all duration-100 py-1 px-[7px] hover:(bg-gray-900/5 text-gray-900 shadow-tag)`

type ReactionBtnLinkProps = {
  to: string;
  Icon: IconType;
  count: number;
  type: string;
};

const ReactionBtnLink = ({
  to,
  Icon,
  count,
  type,
}: ReactionBtnLinkProps) => {
  return (
    <BtnLink to={to} css={[tw`inline-block !pr-3 !py-1 !text-gray-700 hover:(!no-underline !text-gray-900 !bg-gray-100)`]}>
      <Icon size={24} className="mr-1 p-0.5 inline-block" />
      {count}
      <span tw="hidden sm:inline">&nbsp;{type}</span>
    </BtnLink>
  )
}
