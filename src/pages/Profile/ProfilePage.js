import "./profilePage.css";
import { Header, SideBar } from "../../components";

const ProfilePage = () => {
    return (
        <div className="tn_archive-page page">
            <div className="tn_archive-page-header-section page-section">
                <Header />
            </div>
            <div className="tn_archive-page-main-section page-main-section">
                <SideBar />
            </div>
        </div>
    );
}

export { ProfilePage };