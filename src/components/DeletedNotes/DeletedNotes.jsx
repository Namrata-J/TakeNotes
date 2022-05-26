import "./deletedNotes.css";
import { Note } from "../Note/Note";
import { useCrudOperations } from "../../contexts/";

const DeletedNotes = () => {

    const { stateOfNotes } = useCrudOperations();

    const deletedNotes = stateOfNotes.filter(note => note.isDeleted === true)

    return (
        <div className="tn_deletedNotes-component main-section-component">
            <div className="tn_deletedNotes-section main-section-innersection">
                <div className="tn_notes-listing">
                    <h4 className="tn_section-heading">Deleted:-)</h4>
                    {
                        [...deletedNotes].reverse().map((note, index) => { return <Note note={note} key={index} /> })
                    }
                </div>
            </div>
        </div>
    );
}

export { DeletedNotes };