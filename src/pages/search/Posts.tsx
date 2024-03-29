import { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
// import LoadingSpinner from '../../../common/LoadingSpinner';
// import PostsList from '../../../common/PostsList';
// import { useGetPostsQuery } from '../../../core/features/posts/postsApiSlice';
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import PostsList from "../../components/shared/PostsList/PostsList";
import { useSearchPostsQuery } from "../../redux/features/mainApi/endpoints/posts.endpoints";

type Props = {
  value: string;
}

const Posts = ({ value }: Props) => {
  // const { data: posts, isLoading } = useGetPostsQuery(null, { // ! create a search query instead of getting all posts
  //   refetchOnMountOrArgChange: true,
  // });
  // const [filteredPosts, setFilteredPosts] = useState<any[]>([]);

  // const isLoading = false;
  // const posts: any[] = [];
  const { data, isLoading } = useSearchPostsQuery({ term: value, pageNum: 1 }, {
    refetchOnMountOrArgChange: true,
  })
  const posts = data?.data.posts || [];

  // useEffect(() => {
  //   setFilteredPosts(posts?.filter(post => post.title.toLowerCase().includes(value.toLowerCase())));
  // }, [value, posts]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    // posts && <PostsList posts={posts} enableImages={false} />
    <PostsList posts={posts} enableImages={false} />
  );
};

const Wrapper = tw.div`bg-blue`;

export default Posts;
