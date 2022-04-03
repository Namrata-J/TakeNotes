import "./note.css";
import { BsPin } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineLabel } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";
import { useNote } from "../../contexts/note-context";
import { useCrudOperations } from "../../contexts/crudOperations-context";

const Note = (props) => {

    const { actionControlDisplay, canEditContent, saveClickHandler, editClickHandler } = useNote();
    const { stateOfNotes } = useCrudOperations();

    return (
        <div className="tn_notes-listing">
            {
                stateOfNotes.length === 0 ? "" :
                stateOfNotes.map(( note, index ) => {
                    return <div className="tn_note b-rad1" key={ index }>
                        <div className="tn_pin-icon-container">
                            <BsPin className="tn_note-icon pin-icon" />
                        </div>
                        <div className="tn_note-dateAndLabel-container">
                            <p className="tn_note-date">Created 26/10/2021</p>
                            <p className="tn_label b-rad1" style={{ display: props.labelDisplay }}>Label 1</p>
                        </div>
                        <div className="tn_note-title-container">
                            <h4 className="tn_note-title" contentEditable={canEditContent} suppressContentEditableWarning="true" >{ note.title==="" ? "Note Title" : note.title }</h4>
                        </div>
                        <div>
                            <p className="tn_note-body" contentEditable={canEditContent} suppressContentEditableWarning="true" >
                                { note.description === "" ? "I am the body of the note" : note.description }
                            </p>
                        </div>
                        <div className="tn_note-other-options">
                            <div className="tn_note-action-controls-container">
                                <button className="tn_note-action-control et_p-simple-btn primary-color btn b-rad1" onClick={() => editClickHandler()}>Edit</button>
                                <button className="tn_note-action-control et_p-simple-btn primary-color btn b-rad1" onClick={() => saveClickHandler()} style={{ display: actionControlDisplay }}>Save</button>
                            </div>
                            <div className="tn_note-action-controls-container icon-controls-container">
                                <VscSymbolColor className="tn_action-icon" style={{ display: actionControlDisplay }} />
                                <MdOutlineLabel className="tn_action-icon" />
                                <BiArchiveIn className="tn_action-icon" />
                                <CgTrashEmpty className="tn_action-icon" />
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export { Note };