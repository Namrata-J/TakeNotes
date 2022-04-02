import "./createNote.css";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { NotesListing } from "../NotesListing/NotesListing";

const CreateNote = () => {

   const [ headingDisplay, setHeadingDisplay ] = useState("block");
   const [ formContentDisplay, setFormContentDisplay ] = useState("none");

   const getTheFormFocusStyle = () => {
       setHeadingDisplay("none")
       setFormContentDisplay("block")
   }

   const getTheFormInitialStyle = (e) => {
       e.target.parentNode.parentNode.children[0].innerText = ""
       e.target.parentNode.parentNode.children[1].innerText = ""
       setHeadingDisplay("block")
       setFormContentDisplay("none")
   }

    return (
        <div className="tn_createNotes-component main-section-component">
            <div className="tn_createNotes-section main-section-innersection">
                <form className="tn_create-Note-container b-rad1">
                    <div className="tn_container-heading" onClick={() => getTheFormFocusStyle()} style={{ display: headingDisplay }}>Take a note...</div>
                    <div className="tn_container-main-content" style={{ display: formContentDisplay }}>
                        <div className="tn_main-content-title" data-text="Title" contentEditable></div>
                        <div className="tn_main-content-note" data-text="Take a note..." contentEditable></div>
                        <i className="tn_check-btn" onClick={(e) => getTheFormInitialStyle(e)}><AiOutlineCheck /></i>
                    </div>
                </form>
                <NotesListing />
            </div>
        </div>
    );
}

export { CreateNote };