import { nanoid } from '@reduxjs/toolkit';
import tw from 'twin.macro';
import Placeholder from '../Placeholder';
import Post from './Post';
// import { IPost } from "../../types/post.types";
import { Post as IHomePost } from "../../../types/queries/homePosts.types";
import { ComponentProps } from "react";

// type ILocalPost = {};

type Props = {
  // posts: IHomePost[];
  posts: ComponentProps<typeof Post>["post"][];
  filteredTag?: string;
  enableImages?: boolean;
  // toInvalidate: unknown; // used for post reactions
};

const PostsList = ({ posts, filteredTag, /* toInvalidate */ enableImages = true }: Props) => {
  return (
    <Wrapper>
      {posts?.length > 0 ? (
        posts.map((post, i) => (
          <Post
            post={post}
            isFirstPost={enableImages && i === 0}
            filteredTag={filteredTag}
            key={nanoid()}
            // toInvalidate={toInvalidate}
          />
        ))
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`w-full`;

export default PostsList;
