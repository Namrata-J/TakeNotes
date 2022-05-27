import "./labeledNotes.css";
import { Note } from "../Note/Note";
import { useCrudOperations } from "../../contexts/";

const LabeledNotes = () => {

    const { stateOfNotes } = useCrudOperations();

    const labeledNotes = stateOfNotes.filter(note => note.label !== "" && note.isDeleted === false)

    return (
        <div className="tn_labeledNotes-component main-section-component">
            <div className="tn_labeledNotes-section main-section-innersection">
                <div className="tn_notes-listing">
                    <h4 className="tn_section-heading">Labeled:-)</h4>
                    {
                        [...labeledNotes].reverse().map((note, index) => { return <Note note={note} key={index} /> })
                    }
                </div>
            </div>
        </div>
    );
}

export { LabeledNotes };