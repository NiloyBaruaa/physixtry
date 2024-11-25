
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Add a spinner or placeholder here
  }

  return user ? children : <Navigate to="/physixtry/login" />;
};

export default PrivateRoute;
