import React, { useState, useContext, createContext } from "react";

const createNotesContext = createContext(null);

const CreateNotesProvider = ({ children }) => {

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

    return <createNotesContext.Provider value={{ headingDisplay, formContentDisplay, getTheFormFocusStyle, getTheFormInitialStyle }}>
        { children }
    </createNotesContext.Provider>
}

const useCreateNotes = () => useContext(createNotesContext);

export { useCreateNotes, CreateNotesProvider };
