import "./labeledNotes.css";
import { Note } from "../Note/Note";

const LabeledNotes = () => {
    return (
        <div className="tn_labeledNotes-component main-section-component">
            <div className="tn_labeledNotes-section main-section-innersection">
                <div className="tn_notes-listing">
                    <Note labelDisplay="block" />
                </div>
            </div>
        </div>
    );
}

export { LabeledNotes };