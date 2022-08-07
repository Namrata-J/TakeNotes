import "./trashPage.css";
import { Header, SideBar, DeletedNotes } from "../../components";

const TrashPage = () => {
    return (
        <div className="tn_trash-page page">
            <div className="tn_trash-page-header-section page-section">
                <Header />
            </div>
            <div className="tn_trash-page-main-section page-main-section">
                <SideBar />
                <DeletedNotes />
            </div>
        </div>
    );
}

export { TrashPage };