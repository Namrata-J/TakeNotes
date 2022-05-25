import React, { useReducer, useContext, createContext } from "react";

const textBoxContext = createContext(null);

const TextBoxProvider = ({ children }) => {

   const textBoxReducer = ( stateOfTextBox, action ) => {
       switch(action.type){
            case "EXPAND_TEXTBOX":
               return { ...stateOfTextBox, headingDisplay: "none", formContentDisplay: "block" }
            case "CLOSE_TEXTBOX":
               return { ...stateOfTextBox, headingDisplay: "block", formContentDisplay: "none", titleText: "", descriptiveText: "" }
            case "UPDATE_TEXTBOX_TITLE":
               return { ...stateOfTextBox, titleText: action.payload } 
            case "UPDATE_TEXTBOX_DESCRIPTION":
               return { ...stateOfTextBox, descriptiveText: action.payload } 
       }
   }

   const initialTextBoxObj = {
       headingDisplay: "block",
       formContentDisplay: "none",
       titleText: "",
       descriptiveText: ""
   };

   const [ stateOfTextBox, dispatchOfTextBox ] = useReducer( textBoxReducer, initialTextBoxObj );

    return <textBoxContext.Provider value={{ stateOfTextBox, dispatchOfTextBox }}>
        { children }
    </textBoxContext.Provider>
}

const useTextBox = () => useContext(textBoxContext);

export { useTextBox, TextBoxProvider };
