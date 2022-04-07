import "./logIn.css";

const LogInPage = () => {
    return (
        <div className="tn_login-page auth-page">
            <div className="tn_login-container auth-container b-rad1">

                <h4>LogIn</h4>

                <label htmlFor="tn_login-email">Email</label>
                <input type="email" placeholder="example@gmail.com" id="tn_login-email" required />

                <label htmlFor="tn_login-password">Password</label>
                <input type="password" placeholder="Password" id="tn_login-password" />

                <button className="et_p-simple-btn primary-color btn">LogIn</button>

            </div>
        </div>
    );
}

export { LogInPage };