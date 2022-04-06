import "./archivedNotes.css";
import { Note } from "../Note/Note";
import { useCrudOperations } from "../../contexts/crudOperations-context";

const ArchivedNotes = () => {

    const { stateOfNotes } = useCrudOperations();

    const archivedNotes = stateOfNotes.filter(note => note.isArchived === true)

    return (
        <div className="tn_archivedNotes-component main-section-component">
            <div className="tn_archivedNotes-section main-section-innersection">
                <div className="tn_notes-listing">
                    {archivedNotes.length > 0 && <h4 className="tn_section-heading">Archived:-)</h4>}
                    {
                        [...archivedNotes].reverse().map((note, index) => { return <Note note={note} key={index} /> })
                    }
                </div>
            </div>
        </div>
    );
}

export { ArchivedNotes };