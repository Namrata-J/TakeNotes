import "./note.css";
import { BsPin, BsPinFill } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineLabel } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";
import { useCrudOperations } from "../../contexts/crudOperations-context";
import TextareaAutosize from 'react-textarea-autosize';

const Note = ({ note }) => {

    const { dispatchOfNotes } = useCrudOperations();

    const noteBgColors = ["#e2e8f0", "#fecaca", "#fde047", "#bef264", "#86efac", "#99f6e4", "#67e8f9", "#a5b4fc", "#fb7185", "#a5f3fc"];

    return (
        <div className="tn_note b-rad1" style={{ backgroundColor: note.bgColor }}>
            <div className="tn_pin-icon-container">
                {!note.isPinned && <BsPin className="tn_note-icon pin-icon" onClick={() => dispatchOfNotes({ type: "PIN_THE_NOTE", payload: note })} />}
                {note.isPinned && <BsPinFill className="tn_note-icon pin-icon" onClick={() => dispatchOfNotes({ type: "UNPIN_THE_NOTE", payload: note })} />}
            </div>
            <div className="tn_note-dateAndLabel-container">
                <p className="tn_note-date">Created {`${note.currDate.getDate()}/${note.currDate.getMonth()}/${note.currDate.getFullYear()}`}</p>
                <p className="tn_label b-rad1" style={{ backgroundColor: note.bgColor !== "white" ? "var(--white-color)" : "var(--light-brown)" }} >Label 1</p>
            </div>
            <div className="tn_note-title-container">
                {!note.canEdit && <h4 className="tn_note-title" >{note.title === "" ? "Note Title" : note.title}</h4>}
                {note.canEdit && <TextareaAutosize className="tn_note-title-inEditMode textarea-inEditMode" placeholder="Title" defaultValue={note.title}  style={{ backgroundColor: note.bgColor }} onChange={(e) => dispatchOfNotes({ type: "UPDATE_NOTE_TITLE", payload: { note: note, value: e.target.value } })} />}
            </div>
            <div>
                {
                    !note.canEdit &&
                    <p className="tn_note-body" >
                        {note.description === "" ? "I am the body of the note" : note.description}
                    </p>
                }
                {
                    note.canEdit &&
                    <TextareaAutosize className="tn_note-description-inEditMode textarea-inEditMode" placeholder="Take a note..." defaultValue={note.description}  style={{ backgroundColor: note.bgColor }} onChange={(e) => dispatchOfNotes({ type: "UPDATE_NOTE_DESCRIPTION", payload: { note: note, value: e.target.value } })} />
                }
            </div>
            <div className="tn_note-other-options">
                <div className="tn_note-action-controls-container">
                    <button className="tn_note-action-control et_p-simple-btn primary-color btn b-rad1" onClick={() => dispatchOfNotes({ type: "EDIT_NOTE", payload: note })} style={{ backgroundColor: note.bgColor !== "white" ? "var(--white-color)" : "var(--light-brown)" }} >Edit</button>
                    <button className="tn_note-action-control et_p-simple-btn primary-color btn b-rad1" onClick={() => dispatchOfNotes({ type: "SAVE_NOTE", payload: note })} style={{ display: note.canEdit === true ? "inline-block" : "none", backgroundColor: note.bgColor !== "white" ? "var(--white-color)" : "var(--light-brown)" }} >Save</button>
                </div>
                <div className="tn_note-action-controls-container icon-controls-container">
                    <VscSymbolColor className="tn_action-icon" style={{ display: note.canEdit === true ? "inline-block" : "none" }} onClick={() => dispatchOfNotes({ type: "COLOR_PALETTE_DISPLAY", payload: note })} />
                    <div className="tn_color-palatte b-rad1" style={{ display: note.colorPalette? "flex" : "none" }} >
                        {
                            noteBgColors.map((bgColor, index) => <div className="tn_palette-color" key={index} style={{ backgroundColor: bgColor }} onClick={() => dispatchOfNotes({ type: "NOTE_BACKGROUND_COLOR", payload: { note: note, bgColor: bgColor } })} ></div>)
                        }
                    </div>
                    <MdOutlineLabel className="tn_action-icon" />
                    <BiArchiveIn className="tn_action-icon" />
                    <CgTrashEmpty className="tn_action-icon" onClick={() => dispatchOfNotes({ type: "DELETE_NOTE", payload: note })} />
                </div>
            </div>
        </div>
    );
}

export { Note };