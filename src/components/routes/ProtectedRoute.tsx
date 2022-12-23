import { FC } from "react";
import { Navigate, Outlet, Route, RouteProps } from 'react-router-dom';

const RequireAuth = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to='/' replace={true} />;
};

export const ProtectedRoute: FC<RouteProps> = (props) => {
  return (
    <Route element={<RequireAuth />}>
      <Route {...props} />
    </Route>
  )
};
