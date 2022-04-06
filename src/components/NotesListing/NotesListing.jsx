import "./notesListing.css";
import { Note } from "../Note/Note";
import { useCrudOperations } from "../../contexts/crudOperations-context";
import { useFilterAndSort } from "../../contexts/filterAndSortContext";
import { sortByDateFunc, filterByCategoryFunc, filterByLabelsFunc } from "../../utils/filterAndSortFunc";

const NotesListing = () => {
    
    const { stateOfNotes } = useCrudOperations();
    const { filterAndSortState } = useFilterAndSort();

    const filteredListOfNotes = filterByLabelsFunc(filterAndSortState, filterByCategoryFunc(filterAndSortState, sortByDateFunc(filterAndSortState, stateOfNotes)))
    const pinnedNotes = filteredListOfNotes.filter(note => note.isPinned === true && note.isDeleted === false)
    const otherNotes = filteredListOfNotes.filter(note => note.isPinned === false && note.isArchived === false && note.isDeleted === false)
    const archivedNotes = filteredListOfNotes.filter(note => note.isArchived === true && note.isDeleted === false)

    return (
        <div className="tn_notes-listing">
            {stateOfNotes.some(note => note.isPinned === true) && <h4 className="tn_section-heading">Pinned:-)</h4>}
            {
                [...pinnedNotes].reverse().map((note, index) => { return <Note note={note} key={index} /> })
            }
            {(otherNotes.length > 0 && stateOfNotes.some(note => note.isPinned === true || note.isArchived === true)) && <h4 className="tn_section-heading">Others:-)</h4>}
            {
                otherNotes.length === 0 ? "" :
                    [...otherNotes].reverse().map((note, index) => { return <Note note={note} key={index} /> })
            }
            {archivedNotes.length > 0 && <h4 className="tn_section-heading">Archived:-)</h4>}
            {
                [...archivedNotes].reverse().map((note, index) => { return <Note note={note} key={index} /> })
            }
        </div>
    );
}

export { NotesListing };