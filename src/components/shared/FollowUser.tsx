import { MouseEventHandler, useContext } from 'react';
import tw, { styled } from 'twin.macro';
import LoadingController from "./LoadingController";
// import socketContext from '../../context/SocketContext';
// import { useHandleUserFollowMutation } from '../../core/features/users/usersApiSlice';
// import useRequireAuth from '../../hooks/useRequireAuth';
// import LoadingController from '../LoadingController';

type Props = {
  currentUser: unknown;
  previewedUser: unknown;
  bottom?: boolean;
  preventPropagation?: boolean;
}

const FollowUser = ({ 
  currentUser,
  previewedUser,
  bottom = false,
  preventPropagation,
}: Props) => {
  // const [handleUserFollow, { isLoading }] = useHandleUserFollowMutation();
  // const { isAuthed, handleAuth } = useRequireAuth(false);
  // const isFollowed = previewedUser.followers.includes(currentUser.id);
  // const isFollowingYou = previewedUser.following.includes(currentUser.id);
  // const { socket } = useContext(socketContext);

  const isFollowed = false;
  const isFollowingYou = false;

  const isLoading = false;

  const handleFollow: MouseEventHandler = async e => {
    if (preventPropagation) e.stopPropagation();
    // if (isAuthed) {
    //   if (!isFollowed)
    //     socket.emit('follow', {
    //       sender: currentUser,
    //       receiver: previewedUser,
    //     });
    //   await handleUserFollow({
    //     previewedUsername: previewedUser.username,
    //     previewedId: previewedUser.id,
    //     currentId: currentUser.id,
    //     action: isFollowed ? 'unFollow' : 'follow',
    //   });
    // } else handleAuth();
  };

  return (
    <LoadingController isLoading={isLoading}>
      <FollowButton onClick={handleFollow} isFollowed={isFollowed} bottom={bottom}>
        {isFollowed ? 'Following' : isFollowingYou ? 'Follow back' : 'Follow'}
      </FollowButton>
    </LoadingController>
  );
};

const FollowButton = styled.button<{
  isFollowed: boolean
  bottom: boolean
}>`
  ${tw`absolute right-md bg-blue text-white border border-solid border-transparent rounded-md py-2 px-4`}
  ${({ isFollowed }) =>
    isFollowed
      ? tw`text-blue border-blue bg-transparent`
      : tw`hover:(text-blue border-blue bg-transparent)`}
      ${({ bottom }) => (bottom ? tw`bottom-md` : `top-md`)}
`;

export default FollowUser;
