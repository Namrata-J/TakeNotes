import "./deletedNotes.css";
import { Note } from "../Note/Note";

const DeletedNotes = () => {
    return (
        <div className="tn_deletedNotes-component main-section-component">
            <div className="tn_deletedNotes-section main-section-innersection">
                <div className="tn_notes-listing">
                    <Note />
                </div>
            </div>
        </div>
    );
}

export { DeletedNotes };