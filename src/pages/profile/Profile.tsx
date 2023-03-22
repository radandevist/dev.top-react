import { useEffect } from 'react';
import { CgNotes } from 'react-icons/cg';
import { FaBirthdayCake, FaHashtag, FaRegComment } from 'react-icons/fa';
import { GiConsoleController } from 'react-icons/gi';
import { HiLocationMarker } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
// import FollowUser from '../../common/FollowUser/FollowUser';
// import LoadingSpinner from '../../common/LoadingSpinner';
// import NotFound from '../../common/NotFound/NotFound';
// import PostsList from '../../common/PostsList';
// import RouteWrapper from '../../common/RouteWrapper';
// import ShowMore from '../../common/ShowMore';
// import { selectCurrentUser } from '../../core/features/auth/authSlice';

// import { useGetUserQuery } from '../../core/features/users/usersApiSlice';

import { formatDate } from '../../helpers/string';
import { selectCurrentUser } from "../../redux/features/auth/auth.slice";
import RouteWrapper from "../../components/shared/RouteWrapper";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import FollowUser from "../../components/shared/FollowUser";
// import { IUser } from "../../types/user.types";
// import ShowMore from "../../components/shared/ShowMore";
import NotFound from "../../components/shared/NotFound";
import PostsList from "../../components/shared/PostsList/PostsList";
import { useGetUserProfileQuery } from "../../redux/features/mainApi/endpoints/users.endpoints";
import { useGetUserProfilePostsQuery } from "../../redux/features/mainApi/endpoints/users.endpoints";

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const { userName } = useParams();
  // const { data: previewedUser, isLoading } = useGetUserQuery(userName, {
  //   refetchOnMountOrArgChange: true,
  // });
  const { data, isLoading } = useGetUserProfileQuery(userName!, {
    refetchOnMountOrArgChange: true,
  })
  const previewedUser = data?.data.user;
  // const previewedUser = {};
  // const isLoading = false;

  const { data: postsData, isLoading: isPostsLoading } = useGetUserProfilePostsQuery({
    userName: userName!,
    pageNum: 1,
  }, {
    refetchOnMountOrArgChange: true,
  })
  const previewedUserPosts = postsData?.data.posts;

  return (
    <RouteWrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : previewedUser ? (
        <Wrapper>
          <Card>
            <Avatar src={previewedUser.profilePicUrl || ''} />
            {previewedUser.userName === currentUser?.userName ? (
              <EditButton onClick={() => navigate('/customize')}>Edit profile</EditButton>
            ) : (
              <FollowUser currentUser={currentUser} previewedUser={previewedUser} />
            )}
            <Name>{previewedUser.firstName} {previewedUser.lastName}</Name>
            <Bio>{previewedUser.bio || 'No bio'}</Bio>
            <Other>
              <LocationWrapper>
                <HiLocationMarker />
                <Location>{previewedUser.location || 'Not determined yet'}</Location>
              </LocationWrapper>
              <CreatedAtWrapper>
                <FaBirthdayCake />
                <CreatedAt>Joined {formatDate(previewedUser.createdAt, false)}</CreatedAt>
              </CreatedAtWrapper>
            </Other>
            <Footer>
              <EducationWrapper>
                <Title>Education</Title>
                <Education>{previewedUser.education || 'Not determined yet'}</Education>
              </EducationWrapper>
              <WorkWrapper>
                <Title>Work</Title>
                <Work>{previewedUser.work || 'Not determined yet'}</Work>
              </WorkWrapper>
            </Footer>
          </Card>
          <MoreInfo>
            <LeftPortion>
              <BoxWrapper>
                <Heading>Available for</Heading>
                <BoxContent>{previewedUser.availableFor || 'Not determined yet'}</BoxContent>
              </BoxWrapper>
              {/* <BoxWrapper>
                <Heading>Skills/Languages</Heading>
                <BoxContent>
                  <ShowMore text={previewedUser.skills || 'Not determined yet'} maxChars={300} />
                </BoxContent>
              </BoxWrapper> */}
              <Stats>
                <Heading>Stats</Heading>
                <StatWrapper>
                  <CgNotes />
                  <StatContent>
                    <Count>{previewedUser._count.posts}</Count>
                    Posts published
                  </StatContent>
                </StatWrapper>
                <StatWrapper>
                  <FaRegComment />
                  <StatContent>
                    <Count>{previewedUser._count.comments}</Count>
                    Comments written
                  </StatContent>
                </StatWrapper>
                <StatWrapper>
                  <FaHashtag />
                  <StatContent>
                    <Count>{previewedUser._count.followedTags}</Count>
                    Tags followed
                  </StatContent>
                </StatWrapper>
              </Stats>
            </LeftPortion>
            <Posts>
              {/* <PostsList
                // posts={previewedUser.posts}
                posts={previewedUserPosts}
                // toInvalidate={{
                //   type: 'User',
                //   id: previewedUser.id,
                //   extra: { username },
                // }}
              /> */}
              {isPostsLoading ? (
                <LoadingSpinner />
              ) : (
                <PostsList
                // posts={previewedUser.posts}
                posts={previewedUserPosts || []}
                // toInvalidate={{
                //   type: 'User',
                //   id: previewedUser.id,
                //   extra: { username },
                // }}
              />
              )}
            </Posts>
          </MoreInfo>
        </Wrapper>
      ) : (
        <NotFound />
      )}
    </RouteWrapper>
  );
};

const LeftPortion = tw.div`mob:(flex flex-row gap-2)`;

const MoreInfo = tw.div`flex mob:flex-col-reverse`;

const Posts = tw.div`w-full mt-sm ml-sm`;

const Wrapper = tw.div`max-w-[1200px]`;

const Card = styled.div`
  ${tw`bg-white flex flex-col items-center gap-sm relative rounded-md mob:(items-start) shadow`}
`;

const Avatar = tw.img`w-28 h-28 object-cover rounded-full mob:(ml-md)`;

const EditButton = tw.button`absolute top-md right-md text-white bg-blue rounded-md py-2 px-4`;

const Name = tw.h2` mob:(ml-md)`;

const Bio = tw.p`text-lg max-w-2xl text-center mob:text-left mob:(ml-md)`;

const Other = tw.div`flex gap-lg mob:(ml-md)`;

const LocationWrapper = tw.div`flex gap-2 text-gray items-center`;

const CreatedAtWrapper = tw(LocationWrapper)``;

const Location = tw.div``;

const CreatedAt = tw.div``;

const Footer = tw.div`w-full text-center border-t border-light-gray py-md flex items-center justify-evenly`;

const EducationWrapper = tw.div``;

const Education = tw.div``;

const WorkWrapper = tw.div``;

const Work = tw.div``;

const Title = tw.p`text-gray`;

const Stats = tw(Card)`w-80 items-start p-5 mt-sm shadow`;

const StatWrapper = tw.div`flex items-center gap-sm text-xl`;

const StatContent = tw.p``;

const Count = tw.span`mr-2`;

const BoxWrapper = tw(Stats)`shadow`;

const Heading = tw.h4`w-full pb-sm border-b border-light-gray`;

const BoxContent = tw.p`pb-sm whitespace-pre-line`;

export default Profile;
