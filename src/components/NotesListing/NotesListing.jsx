import "./notesListing.css";
import { Note } from "../Note/Note";
import { useCrudOperations } from "../../contexts/crudOperations-context";

const NotesListing = () => {
    const { stateOfNotes } = useCrudOperations();

    const pinnedNotes = stateOfNotes.filter(note => note.isPinned === true)
    const otherNotes = stateOfNotes.filter(note => note.isPinned === false)

    return (
        <div className="tn_notes-listing">
            {stateOfNotes.some(note => note.isPinned === true) && <h4 className="tn_section-heading">Pinned:-)</h4>}
            {
                [...pinnedNotes].reverse().map((note, index) => { return <Note note={ note } key={ index } /> })
            }
            {(otherNotes.length > 0 && stateOfNotes.some(note => note.isPinned === true)) && <h4 className="tn_section-heading">Others:-)</h4>}
            {
                otherNotes.length === 0 ? "" :
                    [...otherNotes].reverse().map((note, index) => { return <Note note={ note } key={ index } /> })
            }
        </div>
    );
}

export { NotesListing };