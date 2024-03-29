import { childrenProp } from "../../contexts/contextFiles.types";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

const RequiresAuth = ({ children }: childrenProp): any => {

    const { isUserLoggedIn } = useAuth();
    const location = useLocation();

    return isUserLoggedIn ? children : <Navigate to="/logIn" state={{ from: location }} replace />
}

export { RequiresAuth };