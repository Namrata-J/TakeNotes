import "./signUp.css";
import { useState } from "react";
import { useAuth } from "../../../contexts";
import { useNavigate } from "react-router-dom";
import { signUpHandler } from "../../../services/auth/";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpPage = () => {

    const navigate = useNavigate();
    const [showPwd, setShowPwd] = useState(false);
    const [pwdType, setPwdType] = useState("password");
    const { formData, setFormData, signUpErrMsg, setSignUpErrMsg, setIsUserLoggedIn } = useAuth();

    return (
        <div className="tn_signup-page auth-page">
            <div className="tn_signUp-container auth-container b-rad1">

                <h4>SignUp</h4>

                <form className="tn_auth-form">
                    <label htmlFor="tn_signUp-email">Email</label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        id="tn_signUp-email"
                        value={formData.userEmail}
                        onChange={
                            (e) => {
                                setSignUpErrMsg("");
                                setFormData({ ...formData, userEmail: e.target.value })
                            }
                        }
                        required />

                    <label htmlFor="tn_signUp-password">Password</label>
                    <div className="tn_signUp-pwd-container">
                        <input
                            type={pwdType}
                            placeholder="Password"
                            id="tn_signUp-password"
                            value={formData.userPwd}
                            onChange={
                                (e) => {
                                    setSignUpErrMsg("");
                                    setFormData({ ...formData, userPwd: e.target.value })
                                }
                            }
                            required />
                        {
                            showPwd && <AiOutlineEye
                                className="tn_shown-pwd-icon pwd-icon"
                                onClick={
                                    () => {
                                        setShowPwd(false);
                                        setPwdType("password")
                                    }
                                } />
                        }
                        {
                            !showPwd && <AiOutlineEyeInvisible
                                className="tn_hidden-pwd-icon pwd-icon"
                                onClick={
                                    () => {
                                        setShowPwd(true);
                                        setPwdType("text")
                                    }
                                } />
                        }
                    </div>

                    <button
                        type="button"
                        className="et_p-simple-btn primary-color btn"
                        onClick={(e) => signUpHandler({ e }, { formData, setIsUserLoggedIn, setFormData, setSignUpErrMsg }, navigate)}>
                        SignUp
                    </button>
                </form>

                <div>
                    <p
                        onClick={() => navigate("/LogIn")}>
                        Already have an account:)
                    </p>
                </div>
            </div>

            <div className="tn-authErrMsg">{signUpErrMsg}</div>
        </div>
    );
}

export { SignUpPage };