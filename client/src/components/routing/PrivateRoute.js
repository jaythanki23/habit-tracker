import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      !isAuthenticated ? (<Navigate to='/login' />) : (children)
  );
};

export default PrivateRoute;