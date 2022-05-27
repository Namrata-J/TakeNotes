import "./archivedNotes.css";
import { Note } from "../Note/Note";
import { useCrudOperations } from "../../contexts/";

const ArchivedNotes = () => {

    const { stateOfNotes } = useCrudOperations();

    const archivedNotes = stateOfNotes.filter(note => note.isArchived === true && note.isDeleted === false)

    return (
        <div className="tn_archivedNotes-component main-section-component">
            <div className="tn_archivedNotes-section main-section-innersection">
                <div className="tn_notes-listing">
                    <h4 className="tn_section-heading">Archived:-)</h4>
                    {
                        [...archivedNotes].reverse().map((note, index) => { return <Note note={note} key={index} /> })
                    }
                </div>
            </div>
        </div>
    );
}

export { ArchivedNotes };