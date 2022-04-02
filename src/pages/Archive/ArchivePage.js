import "./archivePage.css";
import { Header, SideBar, ArchivedNotes } from "../../components";

const ArchivePage = () => {
    return (
        <div className="tn_archive-page page">
            <div className="tn_archive-page-header-section page-section">
                <Header />
            </div>
            <div className="tn_archive-page-main-section page-main-section">
                <SideBar />
                <ArchivedNotes />
            </div>
        </div>
    );
}

export { ArchivePage };