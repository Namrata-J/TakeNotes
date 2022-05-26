import "./signUp.css";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const SignUpPage = () => {

    const [showPwd, setShowPwd] = useState(false);
    const [pwdType, setPwdType] = useState("password");

    return (
        <div className="tn_signup-page auth-page">
            <div className="tn_signUp-container auth-container b-rad1">

                <h4>SignUp</h4>

                <label htmlFor="tn_signUp-email">Email</label>
                <input type="email" placeholder="example@gmail.com" id="tn_signUp-email" required />

                <label htmlFor="tn_signUp-password">Password</label>
                <div className="tn_signUp-pwd-container">
                    <input type={pwdType} placeholder="Password" id="tn_signUp-password" required />
                    {showPwd && <AiOutlineEye className="tn_shown-pwd-icon pwd-icon" onClick={() => { setShowPwd(false); setPwdType("password") }} />}
                    {!showPwd && <AiOutlineEyeInvisible className="tn_hidden-pwd-icon pwd-icon" onClick={() => { setShowPwd(true); setPwdType("text") }} />}
                </div>

                <button className="et_p-simple-btn primary-color btn">SignUp</button>
            </div>
        </div>
    );
}

export { SignUpPage };