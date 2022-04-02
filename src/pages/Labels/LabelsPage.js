import "./labelsPage.css";
import { Header, SideBar, LabeledNotes } from "../../components";

const LabelsPage = () => {
    return (
        <div className="tn_labels-page page">
            <div className="tn_labels-page-header-section page-section">
                <Header />
            </div>
            <div className="tn_labels-page-main-section page-main-section">
                <SideBar />
                <LabeledNotes />
            </div>
        </div>
    );
}

export { LabelsPage };