import "./createNote.css";
import { AiOutlineCheck } from "react-icons/ai";
import { NotesListing } from "../NotesListing/NotesListing";
import { useCreateNotes } from "../../contexts/createNotes-context";
import { useCrudOperations } from "../../contexts/crudOperations-context";

const CreateNote = () => {

    const { headingDisplay, formContentDisplay, getTheFormFocusStyle, getTheFormInitialStyle } = useCreateNotes();
    const { dispatchOfNotes } = useCrudOperations();

    return (
        <div className="tn_createNotes-component main-section-component">
            <div className="tn_createNotes-section main-section-innersection">
                <form className="tn_create-Note-container b-rad1">
                    <div className="tn_container-heading" onClick={() => getTheFormFocusStyle()} style={{ display: headingDisplay }}>Take a note...</div>
                    <div className="tn_container-main-content" style={{ display: formContentDisplay }}>
                        <div className="tn_main-content-title" data-text="Title" contentEditable suppressContentEditableWarning="true" ></div>
                        <div className="tn_main-content-note" data-text="Take a note..." contentEditable suppressContentEditableWarning="true" ></div>
                        <i className="tn_check-btn" onClick={(e) => { dispatchOfNotes({ type: "ADD_NOTE", payload: { _title: e.target.parentNode.parentNode.children[0].innerText , _description: e.target.parentNode.parentNode.children[1].innerText }}); getTheFormInitialStyle(e) }}><AiOutlineCheck /></i>
                    </div>
                </form>
                
                <NotesListing />
            </div>
        </div>
    );
}

export { CreateNote };