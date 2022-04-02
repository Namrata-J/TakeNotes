import "./homePage.css";
import { Header, SideBar, CreateNote } from "../../components/index";

const HomePage = () => {
    return (
        <div className="tn_home-page page">
            <div className="tn_home-page-header-section page-section">
                <Header />
            </div>
            <div className="tn_home-page-main-section page-main-section">
                <SideBar />
                <CreateNote />
            </div>
        </div>
    );
}

export { HomePage };