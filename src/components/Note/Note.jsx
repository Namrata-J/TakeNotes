import "./note.css";
import { BsPin } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineLabel } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";
import { useCrudOperations } from "../../contexts/crudOperations-context";
import TextareaAutosize from 'react-textarea-autosize';

const Note = (props) => {

    const { stateOfNotes, dispatchOfNotes } = useCrudOperations();

    return (
        <div className="tn_notes-listing">
            {
                stateOfNotes.length === 0 ? "" :
                stateOfNotes.map(( note, index ) => {
                    console.log(note)
                    return <div className="tn_note b-rad1" key={ index }>
                        <div className="tn_pin-icon-container">
                            <BsPin className="tn_note-icon pin-icon" />
                        </div>
                        <div className="tn_note-dateAndLabel-container">
                            <p className="tn_note-date">Created { `${note.currDate.getDate()}/${note.currDate.getMonth()}/${note.currDate.getFullYear()}` }</p>
                            <p className="tn_label b-rad1" style={{ display: props.labelDisplay }}>Label 1</p>
                        </div>
                        <div className="tn_note-title-container">
                            { !note.canEdit && <h4 className="tn_note-title" >{ note.title==="" ? "Note Title" : note.title }</h4>}
                            { note.canEdit && <TextareaAutosize className="tn_note-title-inEditMode" placeholder="Title" defaultValue={ note.title } /> }
                        </div>
                        <div>
                            <p className="tn_note-body" >
                                { note.description === "" ? "I am the body of the note" : note.description }
                            </p>
                        </div>
                        <div className="tn_note-other-options">
                            <div className="tn_note-action-controls-container">
                                <button className="tn_note-action-control et_p-simple-btn primary-color btn b-rad1" onClick={() => dispatchOfNotes({ type: "EDIT_NOTE", payload: note })}>Edit</button>
                                <button className="tn_note-action-control et_p-simple-btn primary-color btn b-rad1" style={{ display: note.canEdit===true? "inline-block":"none" }} >Save</button>
                            </div>
                            <div className="tn_note-action-controls-container icon-controls-container">
                                <VscSymbolColor className="tn_action-icon" style={{ display: note.canEdit===true? "inline-block":"none" }} />
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