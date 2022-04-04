import "./createNote.css";
import { AiOutlineCheck } from "react-icons/ai";
import { NotesListing } from "../NotesListing/NotesListing";
import { useTextBox } from "../../contexts/textBox-context";
import { useCrudOperations } from "../../contexts/crudOperations-context";
import TextareaAutosize from 'react-textarea-autosize';

const CreateNote = () => {

    const { stateOfTextBox, dispatchOfTextBox } = useTextBox();
    const { dispatchOfNotes } = useCrudOperations();

    return (
        <div className="tn_createNotes-component main-section-component">
            <div className="tn_createNotes-section main-section-innersection">

                <form className="tn_create-Note-container b-rad1">
                    <div className="tn_container-heading" onClick={() => dispatchOfTextBox({ type: "EXPAND_TEXTBOX" })} style={{ display: stateOfTextBox.headingDisplay }}>Take a note...</div>
                    <div className="tn_container-main-content" style={{ display: stateOfTextBox.formContentDisplay }}>
                        <TextareaAutosize className="tn_main-content-title" placeholder="Title" />
                        <TextareaAutosize className="tn_main-content-note" placeholder="Take a note..." />
                        <i className="tn_check-btn" onClick={(e) => { dispatchOfNotes({ type: "ADD_NOTE", payload: { _title: e.target.parentNode.parentNode.children[0].textContent, _description: e.target.parentNode.parentNode.children[1].textContent } }); dispatchOfTextBox({ type: "CLOSE_TEXTBOX" }) }}><AiOutlineCheck /></i>
                    </div>
                </form>

                <NotesListing />

            </div>
        </div>
    );
}

export { CreateNote };