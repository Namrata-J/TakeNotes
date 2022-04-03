import React, { useState, useContext, createContext } from "react";

const noteContext = createContext({ actionControlDisplay: "none", canEditContent: "false", saveClickHandler: () => {}, editClickHandler: () => {} });

const NoteProvider = ({ children }) => {

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

    return <noteContext.Provider value={{ actionControlDisplay, canEditContent, saveClickHandler, editClickHandler }}>
        { children }
    </noteContext.Provider>
}

const useNote = () => useContext(noteContext);

export { useNote, NoteProvider };