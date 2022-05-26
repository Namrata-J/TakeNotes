import "./logOut.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts";

const LogOutPage = () => {

    const { setIsUserLoggedIn } = useAuth();

    const logoutClickHandler = () => {
        setIsUserLoggedIn(false)
    }

    return (
        <div className="tn_logout-page auth-page">
            <div className="tn_logout-container auth-container">
                <p className="tn_logout-container-text" >Are you sure you want to log out!?</p>
                <div className="tn_logout-container-action-btns">
                    <Link to="/home">
                        <button className="et_p-simple-btn primary-color btn">Cancel</button>
                    </Link>
                    <Link to="/">
                        <button className="et_p-simple-btn primary-color btn" onClick={() => logoutClickHandler()}>LogOut</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export { LogOutPage };