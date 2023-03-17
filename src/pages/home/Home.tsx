import tw, { theme } from "twin.macro"
import useBreakpoint from "../../hooks/useBreakpoint"
import Resources from "../../components/shared/Resources"
import PostsList from "./PostsList"

type Props = {}

const Home = (_props: Props) => {
  const isMobile = useBreakpoint(Number(theme`screens.mob.max`.replace('px', '')))
  const isLaptop = useBreakpoint(Number(theme`screens.lap.max`.replace('px', '')))
  // const { id } = useSelector(selectCurrentUser);
  // const { data: posts, isLoading } = useGetPostsQuery(saved ? id : null, {
  //   refetchOnMountOrArgChange: true,
  // });
  const posts: any[] = [];

  return (
    <Wrapper>
      {!isMobile && <Resources saved={false} />}
      {/* {isLoading ? <LoadingSpinner /> : <PostsList posts={posts} />} */}
      <PostsList posts={posts} />
      {/* {!isLaptop && <Tags />} */}
    </Wrapper>
  )
}

const Wrapper = tw.div`flex gap-4 justify-center`

export default Home