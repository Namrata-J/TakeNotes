import "./logIn.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/";

const LogInPage = () => {

    const navigate = useNavigate();
    const { formData, setFormData, logInErrMsg, setLogInErrMsg, loginHandler, handleGuestLogin } = useAuth();

    return (
        <div className="tn_login-page auth-page">
            <div className="tn_login-container auth-container b-rad1">

                <h4>LogIn</h4>

                <form  className="tn_auth-form">
                    <label htmlFor="tn_login-email">Email</label>
                    <input type="email" placeholder="example@gmail.com" id="tn_login-email" value={formData.userEmail} onChange={(e) => {setLogInErrMsg(""); setFormData({...formData, userEmail: e.target.value})}} required />

                    <label htmlFor="tn_login-password">Password</label>
                    <input type="password" placeholder="Password" id="tn_login-password" value={formData.userPwd} onChange={(e) => {setLogInErrMsg(""); setFormData({...formData, userPwd: e.target.value})}} required />

                    <button type="submit" className="et_p-simple-btn primary-color btn" onClick={(e) => loginHandler(e)}>LogIn</button>
                </form>
                <button className="et_p-simple-btn primary-color btn" onClick={() => handleGuestLogin()}>LogIn As A Guest</button>
                <div>
                    <p onClick={() => navigate("/SignUp")}>Create new account:)</p>
                </div>

            </div>
            <div className="tn-authErrMsg">{ logInErrMsg }</div>
        </div>
    );
}

export { LogInPage };