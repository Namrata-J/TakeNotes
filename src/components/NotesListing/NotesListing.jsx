import "./notesListing.css";
import { Note } from "../Note/Note";

const NotesListing = () => {
    return (
        <div className="tn_notes-listing">
            <Note labelDisplay="none" />
        </div>
        
    );
}

export { NotesListing };