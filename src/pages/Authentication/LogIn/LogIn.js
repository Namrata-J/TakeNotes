import "./logIn.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/";

const LogInPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { setIsUserLoggedIn } = useAuth();

    const handleGuestLogin = () => {
        setIsUserLoggedIn(true)
        if(location.state === null){
            navigate("/home")
        }else
            navigate(location?.state?.from?.pathname)
    }

    return (
        <div className="tn_login-page auth-page">
            <div className="tn_login-container auth-container b-rad1">

                <h4>LogIn</h4>

                <label htmlFor="tn_login-email">Email</label>
                <input type="email" placeholder="example@gmail.com" id="tn_login-email" required />

                <label htmlFor="tn_login-password">Password</label>
                <input type="password" placeholder="Password" id="tn_login-password" required />

                <button className="et_p-simple-btn primary-color btn">LogIn</button>

                <button className="et_p-simple-btn primary-color btn" onClick={() => handleGuestLogin()}>LogIn As A Guest</button>

            </div>
        </div>
    );
}

export { LogInPage };