import "./note.css";
import { BsPin } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineLabel } from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { CgTrashEmpty } from "react-icons/cg";
import { useState } from "react";

const Note = (props) => {

    const [actionControlDisplay, setActionControlDisplay] = useState("none");
    const [canEditContent, setCanEditContent] = useState("false");

    const saveClickHandler = () => {
        setCanEditContent("false")
        setActionControlDisplay("none")
    }

    const editClickHandler = () => {
        setCanEditContent("true")
        setActionControlDisplay("inline-block")
    }

    return (
        <div className="tn_note b-rad1">
            <div className="tn_pin-icon-container">
                <BsPin className="tn_note-icon pin-icon" />
            </div>
            <div className="tn_note-dateAndLabel-container">
                <p className="tn_note-date">Created 26/10/2021</p>
                <p className="tn_label b-rad1" style={{ display: props.labelDisplay }}>Label 1</p>
            </div>
            <div className="tn_note-title-container">
                <h4 className="tn_note-title" contentEditable={canEditContent} suppressContentEditableWarning="true" >Note Title</h4>
            </div>
            <div>
                <p className="tn_note-body" contentEditable={canEditContent} suppressContentEditableWarning="true" >
                    I am the body of the note
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
    );
}

export { Note };