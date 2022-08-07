import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="tn_landing-page">
            <div className="tn_landing-page-content-container">
                <div className="tn_landing-page-content a-tl">
                    <h2>TakeNotes</h2>
                    <div className="tn_app-subtitle">
                        <h4>Meet your modern</h4>
                        <h4 className="tn_highlighted-subtitle">Note Taking App</h4>
                    </div>
                    <p className="tn_app-description">Manage your daily tasks and workflow in a better way and
                        boost your efficiency without any efforts.
                    </p>
                    <Link to="/signUp">
                        <button className="tn_p-simple-btn primary-color btn">Join Now</button>
                    </Link>
                    <Link to="logIn" className="tn_landing-page-login">
                        <p>Already have an account?</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { LandingPage };