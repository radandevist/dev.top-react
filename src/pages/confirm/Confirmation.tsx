import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import tw from 'twin.macro';
// import LoadingController from '../../common/LoadingController';
// import RouteWrapper from '../../common/RouteWrapper';
// import { useLazyLogoutQuery } from '../../core/features/auth/authApiSlice';
// import { selectCurrentUser } from '../../core/features/auth/authSlice';
// import { useDeleteUserMutation } from '../../core/features/users/usersApiSlice';
import { capitalizeFirstLetter } from '../../helpers/string';
import useRequireAuth from '../../hooks/useRequireAuth';
import { selectCurrentUser } from "../../redux/features/auth/auth.slice";
import LoadingController from "../../components/shared/LoadingController";
import RouteWrapper from "../../components/shared/RouteWrapper";
import NotFound from "../../components/shared/NotFound";
import { useLogoutMutation /* useLazyLogoutQuery */ } from "../../redux/features/mainApi/endpoints/auth.endpoints";

const Confirmation = () => {
  const navigate = useNavigate();
  const { confirmType } = useParams();
  // const [trigger] = useLazyLogoutQuery();
  const [trigger] = useLogoutMutation();
  // const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const currentUser = useSelector(selectCurrentUser);
  const id = currentUser?.id;
  // const { isAuthed, handleAuth } = useRequireAuth();
  const { isAuthed } = useRequireAuth();

  const handleConfirmation = async () => {
    // if (isAuthed) {
    //   try {
    //     confirmType.includes('delete') && (await deleteUser({ id }).unwrap());
    //     trigger();

    //     navigate('/');
    //   } catch (err) {
    //     console.log(err);
    //   }
    // } else handleAuth();
    if (isAuthed) {
      try {
        // only logout for now
        trigger();

        navigate("/")
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isLoading = false;

  if (!isAuthed || !confirmType) {
    return <NotFound />;
  }

  return (
    <RouteWrapper>
      <Wrapper>
        <Heading>Are you sure you want to {confirmType.replace('-', ' ')}?</Heading>
        <LoadingController isLoading={isLoading}>
          <ConfirmButton onClick={handleConfirmation}>
            Yes, {capitalizeFirstLetter(confirmType.replace('-', ' '))}
          </ConfirmButton>
        </LoadingController>
      </Wrapper>
    </RouteWrapper>
  );
};

const Heading = tw.h1``;

const ConfirmButton = tw.button`text-white bg-blue rounded-md py-4 px-6 mt-6`;

const Wrapper = tw.div`text-center`;

export default Confirmation;
