import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="ap_landing-page">
            <div className="ap_landing-page-content-container">
                <div className="ap_landing-page-content a-tl">
                    <h2>TakeNotes</h2>
                    <div className="ap_app-subtitle">
                        <h4>Meet your modern</h4>
                        <h4 className="ap_highlighted-subtitle">Note Taking App</h4>
                    </div>
                    <p className="ap_app-description">Manage your daily tasks and workflow in a better way and
                        boost your efficiency without any efforts.
                    </p>
                    <Link to="/signUp">
                        <button className="et_p-simple-btn primary-color btn">Join Now</button>
                    </Link>
                    <Link to="logIn" className="ap_landing-page-login">
                        <p>Already have an account?</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { LandingPage };