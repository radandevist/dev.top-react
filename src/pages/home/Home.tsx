import tw, { theme } from "twin.macro"
import useBreakpoint from "../../hooks/useBreakpoint"
import Resources from "../../components/shared/Resources"
import PostsList from "../../components/shared/PostsList/PostsList"
// import { IPost } from "../../types/post.types"
import Tags from "./Tags"
import RouteWrapper from "../../components/shared/RouteWrapper"
// import { useGetHomePostsByPageQuery } from "../../redux/features/mainApi/mainApi.slice"
import LoadingSpinner from "../../components/shared/LoadingSpinner"
import { useGetHomePostsByPageQuery } from "../../redux/features/mainApi/endpoints/posts.endpoints"

type Props = {}

const Home = (_props: Props) => {
  const isMobile = useBreakpoint(Number(theme`screens.mob.max`.replace('px', '')))
  const isLaptop = useBreakpoint(Number(theme`screens.lap.max`.replace('px', '')))
  // const isMobile = useBreakpoint(theme`screens.mob.max`.replace('px', ''));
  // const isLaptop = useBreakpoint(theme`screens.lap.max`.replace('px', ''));
  
  // const { id } = useSelector(selectCurrentUser);
  // const { data: posts, isLoading } = useGetPostsQuery(saved ? id : null, {
  //   refetchOnMountOrArgChange: true,
  // });
  const { data, isLoading } = useGetHomePostsByPageQuery(1, {
    refetchOnMountOrArgChange: true,
  });
  // const posts: IPost[] = [];

  const saved = false;

  return (
    // <Wrapper>
    //   {!isMobile && <Resources saved={false} />}
    //   {/* {isLoading ? <LoadingSpinner /> : <PostsList posts={posts} />} */}
    //   <PostsList posts={posts} />
    //   {!isLaptop && <Tags />}
    // </Wrapper>
    <RouteWrapper>
      <Wrapper>
        {!isMobile && <Resources saved={saved} />}
        {/* {isLoading ? <LoadingSpinner /> : <PostsList posts={data!.data.posts} />} */}
        {isLoading ? <LoadingSpinner /> : <PostsList posts={data ? data.data.posts : []} />}
        {/* <PostsList posts={posts} /> */}
        {!isLaptop && <Tags />}
      </Wrapper>
    </RouteWrapper>
  )
}

const Heading = tw.h1``;
const Wrapper = tw.div`flex gap-4 justify-center `;

export default Home