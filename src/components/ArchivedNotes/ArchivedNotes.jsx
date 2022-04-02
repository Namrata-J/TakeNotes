import "./archivedNotes.css";
import { Note } from "../Note/Note";

const ArchivedNotes = () => {
    return (
        <div className="tn_archivedNotes-component main-section-component">
            <div className="tn_archivedNotes-section main-section-innersection">
                <div className="tn_notes-listing">
                    <Note />
                </div>
            </div>
        </div>
    );
}

export { ArchivedNotes };