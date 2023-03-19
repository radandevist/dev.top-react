import { useSelector } from 'react-redux';
import tw, { styled } from 'twin.macro';
// import { selectCurrentUser } from '../../core/features/auth/authSlice';
// import { useHandleFollowMutation } from '../../core/features/tags/tagsApiSlice';
import { decreaseOpacity } from '../../helpers/utils';
import LoadingController from "./LoadingController";
// import { ITag } from "../../types/tag.types";
// import useRequireAuth from '../../hooks/useRequireAuth';
// import LoadingController from '../LoadingController';

type ILocalTag = {
  color: string;
}

type Props = {
  tag: ILocalTag;
  isFollowed: boolean;
  isTagPage: boolean;
  isLarge?: boolean;
};

const FollowTag = ({ tag, isFollowed, isTagPage, isLarge = false }: Props) => {
  // const { id: userId } = useSelector(selectCurrentUser);
  // const [handleFollow, { isLoading }] = useHandleFollowMutation();
  // const { isAuthed, handleAuth } = useRequireAuth();

  const isLoading = false;
  
  return (
    <LoadingController isLoading={isLoading}>
      <FollowButton
        bg={decreaseOpacity(tag.color, 0.5)}
        color={tag.color}
        isFollowed={isFollowed}
        isLarge={isLarge}
        onClick={() => {
          // if (isAuthed) {
          //   handleFollow({
          //     name: tag.name,
          //     action: isFollowed ? 'unFollow' : 'follow',
          //     userId,
          //     tagId: tag.id,
          //     isTagPage,
          //   });
          // } else handleAuth();
        }}>
        {isFollowed ? 'Following' : 'Follow'}
      </FollowButton>
    </LoadingController>
  );
};

const FollowButton = styled.button<{
  isFollowed: boolean;
  isLarge: boolean;
  bg: string;
}>`
  color: ${props => (props.isFollowed ? props.color : 'white')};
  background: ${props => (props.isFollowed ? 'transparent' : props.color)};
  border: 2px solid ${({ color }) => color};
  ${tw`max-w-lg rounded-md px-2 py-1 text-sm font-semibold ml-2`};
  ${props => !props.isFollowed && `&:hover {background: ${props.bg};border-color: ${props.bg};}`};
  ${({ isLarge }) => isLarge && tw`px-4 py-2`}
`;

export default FollowTag;
