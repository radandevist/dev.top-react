// import { useDispatch, useSelector } from 'react-redux';
// import { selectCurrentToken, setAuthModal } from '../core/features/auth/authSlice';
import { selectAccessToken } from "../redux/features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const useRequireAuth = () => {
  // const token = useSelector(selectCurrentToken);
  const token = useAppSelector(selectAccessToken);
  const isAuthed = !!token;
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  // const handleAuth = () => !isAuthed && dispatch(setAuthModal(true));

  return {
    isAuthed,
    // handleAuth,
  };
};

export default useRequireAuth;
